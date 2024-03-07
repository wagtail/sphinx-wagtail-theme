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
   make install

Compile frontend changes:
   make frontend

Build example docs and open in browser:
   make docs serve
""")
endef
export PRINT_HELP_PYSCRIPT


BROWSER := python -c "$$BROWSER_PYSCRIPT"

.PHONY: help
help:
	@python -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)


.PHONY: install
install: install-python install-frontend ## Install all


.PHONY: install-frontend
install-frontend: ##- Install node modules
	npm install


.PHONY: install-python
install-python: ##- Install Python modules
	pip install -U pip
	pip install -U -r requirements.txt
	pip install -U -r requirements-dev.txt


.PHONY: build
build: clean frontend-dist ##- Build Sphinx extension
	python -m build
	ls -l dist


.PHONY: clean
clean: ##- Remove all build, test and Python artifacts
	# Build frontend files
	rm -rf sphinx_wagtail_theme/static/dist

	# Python build artifacts
	rm -rf build/
	rm -rf dist/
	rm -rf .eggs/
	find . -name '*.egg-info' -exec rm -rf {} +
	find . -name '*.egg' -exec rm -f {} +

	# Clean build docs
	rm -rf ./docs/_build
	rm -rf ./rtd-venv

	# Python test artifacts
	rm -rf .tox/
	rm -rf htmlcov/
	rm -rf .pytest_cache

	# Python artifacts
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -rf {} +


.PHONY: docs
docs: ## Build Sphinx HTML documentation
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


.PHONY: frontend-dist
frontend-dist: ##- Build frontend files for distribution
	npm run build


.PHONY: watch
watch:
	npm run watch



.PHONY: watchdocs
watchdocs: docs ##- Redo 'docs' and watch for changes (=make sd)
	pip install watchdog
	watchmedo shell-command -p '*.rst' -c '$(MAKE) -C docs html' -R -D .


.PHONY: lint
lint: lint-python lint-frontend ##- Run all linters


.PHONY: lint-python
lint-python:
	flake8 *.py
	flake8 sphinx_wagtail_theme
	flake8 tests


.PHONY: lint-frontend
lint-frontend:
	npm run lint


.PHONY: test
test:
	pytest


.PHONY: test-visual-regression
test-visual-regression: ## Run visual regression tests
	./node_modules/.bin/percy exec -- python tests/test_visual_regression.py

