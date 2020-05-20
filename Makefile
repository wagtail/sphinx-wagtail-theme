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

See grunt help for more grunt commands:
   grunt --help
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
	grunt clean


clean-pyc: ##- Remove Python file artifacts
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -rf {} +


.PHONY: clean-project
clean-project: clean-build clean-pyc clean-test ##- Remove all build, test, coverage and Python artifacts


.PHONY: clean-test
clean-test: ##- Remove test and coverage artifacts
	rm -rf .tox/
	rm -f .coverage
	rm -rf htmlcov/
	rm -rf .pytest_cache


.PHONY: coverage
coverage: ##- Check code coverage quickly with default Python
	coverage run --source sphinx_typo3_theme -m pytest
	coverage report -m
	coverage html
	$(BROWSER) htmlcov/index.html


.PHONY: docs
docs: ## Regenerate Sphinx HTML documentation, including API docs
	rm -f docs/sphinx_typo3_theme.rst
	rm -f docs/modules.rst
	sphinx-apidoc -o docs/ sphinx_typo3_theme
	$(MAKE) -C docs clean
	$(MAKE) -C docs html
	@if [ "$$non_interactive" = "" ]; then $(BROWSER) docs/_build/html/index.html; fi


.PHONY: frontend
frontend: ## Compile frontend files
	grunt frontend


.PHONY: install
install: clean build uninstall ## Build Sphinx extension and install from package
	find dist -name "*.whl" -print0 | xargs -0 pip install --upgrade


.PHONY: install-for-dev ifd
ifd: install-for-dev
install-for-dev: clean uninstall ## Clean, uninstall and pip install -e for development (alias ifd)
	pip install -e .


.PHONY: lint
lint: ## Check Python style
	flake8 *.py
	flake8 sphinx_typo3_theme
	flake8 tests


.PHONY: lint-minimal lm
lm: lint-minimal
lint-minimal: ## Check Python style for minimal standards (alias lm)
	flake8 *.py  --count --select=E9,F63,F7,F82 --show-source --statistics
	echo
	flake8 sphinx_typo3_theme   --count --select=E9,F63,F7,F82 --show-source --statistics
	echo
	flake8 tests --count --select=E9,F63,F7,F82 --show-source --statistics
	echo
	flake8 *.py  --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
	echo
	flake8 sphinx_typo3_theme   --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
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
	yarn install


.PHONY: setup-python
setup-python: ##- Setup Python modules
	pip install -U pip
	pip install -U -r requirements_dev.txt


.PHONY: test
test: ## Run Python tests quickly with pytest
	pytest
	if [ -d dist ]; then find dist -name *.whl -exec twine check {} +; fi


.PHONY: test-tox
test-tox: ##- Run tests on every Python version with tox
	tox


.PHONY: test-import
test-import: ## Verify the extension is install and can be imported
	python2 -c "import sphinx_typo3_theme as m; print(m.__version__)"
	python2 -c "import sphinx_typo3_theme as m, pprint; pprint.pprint(m.version_info)"
	python3 -c "import sphinx_typo3_theme as m; print(m.__version__)"
	python3 -c "import sphinx_typo3_theme as m, pprint; pprint.pprint(m.version_info)"


.PHONY: uninstall ui
ui: uninstall
uninstall: ##- Uninstall the extension
	pip uninstall -y sphinx-typo3-theme

