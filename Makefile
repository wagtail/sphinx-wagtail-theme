.DEFAULT_GOAL := help


define BROWSER_PYSCRIPT
import os, webbrowser, sys

from urllib.request import pathname2url

webbrowser.open("file://" + pathname2url(os.path.abspath(sys.argv[1])))
endef
export BROWSER_PYSCRIPT


define PRINT_HELP_PYSCRIPT
import re, sys

hits = []
for line in sys.stdin:
	match = re.match(r'^([a-zA-Z_-]+):.*?## (.*)$$', line)
	if match:
		target, help = match.groups()
		hits.append([target, help])
if 1: hits.sort()
for target, help in hits:
	print("%-20s %s" % (target, help))
print("""
Start with the installation of Python and Node modules:
   make setup

Compile frontend changes:
   make frontend

Build, import from package, test, render the repo docs and open in browser:
   make install test-import docs
""")
endef
export PRINT_HELP_PYSCRIPT


BROWSER := python -c "$$BROWSER_PYSCRIPT"

.PHONY: help
help:
	@python -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)


.PHONY: build
build: clean build-project ## Build all, except frontend


.PHONY: build-project
build-project: clean-project ##- Build Sphinx extension
	python setup.py sdist
	python setup.py bdist_wheel
	ls -l dist


.PHONY: clean
clean: clean-project ## Clean all, except frontend


.PHONY: clean-project
clean-project: clean-build clean-pyc clean-test clean-docs ## Remove all build, test, coverage and Python artifacts


.PHONY: clean-build
clean-build: ##- Remove build artifacts
	rm -rf build/
	mkdir -p build
	touch build/.gitkeep
	rm -rf dist/
	rm -rf .eggs/
	find . -name '*.egg-info' -exec rm -rf {} +
	find . -name '*.egg' -exec rm -f {} +


.PHONY: clean-frontend
clean-frontend: ## Clean frontend files
	rm -rf sphinx_wagtail_theme/static/dist

clean-pyc: ##- Remove Python file artifacts
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -rf {} +

.PHONY: clean-test
clean-test: ##- Remove test and coverage artifacts
	rm -rf .tox/
	rm -f .coverage
	rm -rf htmlcov/
	rm -rf .pytest_cache


.PHONY: clean-docs
clean-docs: ##- Remove previously built docs
	rm -rf ./docs/_build
	rm -rf ./rtd-venv


.PHONY: coverage
coverage: ##- Check code coverage quickly with default Python
	coverage run --source sphinx_wagtail_theme -m pytest
	coverage report -m
	coverage html
	$(BROWSER) htmlcov/index.html


.PHONY: docs
docs: ## Regenerate Sphinx HTML documentation
	$(MAKE) -C docs clean
	$(MAKE) -C docs html


.PHONY: rtd-docs
rtd-docs: ## Build the docs like Readthedocs does.
	python3.10 -m venv "./rtd-venv"
	./rtd-venv/bin/python -m pip install --upgrade --no-cache-dir pip "setuptools<58.3.0"
	./rtd-venv/bin/python -m pip install --upgrade --no-cache-dir "mock==1.0.1" "pillow==5.4.1" "alabaster>=0.7,<0.8,!=0.7.5" "commonmark==0.8.1" "recommonmark==0.5.0" "sphinx" "sphinx-rtd-theme" "readthedocs-sphinx-ext<2.2"
	./rtd-venv/bin/python -m pip install --exists-action=w --no-cache-dir -r docs/requirements.txt
	# This had to be modified to use the ./docs/ dir instead of cwd.
	./rtd-venv/bin/python -m sphinx -T -E -b html -d ./docs/_build/doctrees -D language=en ./docs ./docs/_build/html
	rm -rf "./rtd-venv"

.PHONY: serve
serve: ## Serve docs at http://localhost:8000
	python -m http.server --directory ./docs/_build/html


.PHONY: frontend
frontend: ## Compile frontend files
	npm run frontend


.PHONY: install
install: clean build uninstall ## Build Sphinx extension and install from package
	find dist -name "*.whl" -print0 | xargs -0 pip install --upgrade


.PHONY: install-for-development ifd
ifd: install-for-development
install-for-development: clean uninstall ## Clean, uninstall and pip install -e for development (alias ifd)
	pip install -r requirements-dev.txt
	pip install -e .


.PHONY: lint
lint: ## Check Python style
	flake8 *.py
	flake8 sphinx_wagtail_theme
	flake8 tests


.PHONY: lint-minimal lm
lm: lint-minimal
lint-minimal: ## Check Python style for minimal standards (alias lm)
	flake8 *.py  --count --select=E9,F63,F7,F82 --show-source --statistics
	echo
	flake8 sphinx_wagtail_theme   --count --select=E9,F63,F7,F82 --show-source --statistics
	echo
	flake8 tests --count --select=E9,F63,F7,F82 --show-source --statistics
	echo
	flake8 *.py  --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
	echo
	flake8 sphinx_wagtail_theme   --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
	echo
	flake8 tests --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
	echo


.PHONY: release
release: dist ##- Clean, build and upload a release
	echo TO BE DONE: twine upload dist/*


.PHONY: servedocs sd
sd: servedocs
servedocs: docs ##- Redo 'docs' and watch for changes (=make sd)
	watchmedo shell-command -p '*.rst' -c '$(MAKE) -C docs html' -R -D .


.PHONY: setup
setup: setup-python setup-frontend ## Setup all


.PHONY: setup-frontend
setup-frontend: ##- Setup node modules
	npm install


.PHONY: setup-python
setup-python: ##- Setup Python modules
	pip install -U pip
	pip install -U -r requirements.txt


.PHONY: test
test: ## Run Python tests quickly with pytest
	pytest
	if [ -d dist ]; then find dist -name *.whl -exec twine check {} +; fi


.PHONY: test-tox
test-tox: ##- Run tests on every Python version with tox
	tox


.PHONY: test-import
test-import: ## Verify the extension is install and can be imported
	python3 -c "import sphinx_wagtail_theme as m; print(m.__version__)"
	python3 -c "import sphinx_wagtail_theme as m, pprint; pprint.pprint(m.__version_full__)"

.PHONY: test-visual-regression
test-visual-regression: ## Run visual regression tests
	./node_modules/.bin/percy exec -- python tests/test_visual_regression.py

.PHONY: uninstall ui
ui: uninstall
uninstall: ##- Uninstall the extension
	pip uninstall -y sphinx-wagtail-theme

