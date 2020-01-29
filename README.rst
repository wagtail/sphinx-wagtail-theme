
=====================================
Sphinx TYPO3 theme for docs.typo3.org
=====================================

:Project:  sphinx_typo3_theme
:Team:     TYPO3 Documentation Team
:Main curator: Martin Bless <martin.bless@typo3.org>
:License:  MIT
:Authors:  `List of authors <AUTHORS.rst>`_

.. image:: https://raw.githubusercontent.com/TYPO3-Documentation/sphinx_typo3_theme/master/img/screenshot.png
   :alt: Sphinx TYPO3 theme screenshot


.. contents:: This page
   :local:
   :depth: 3
   :backlinks: top


Status
======

.. image:: https://github.com/TYPO3-Documentation/sphinx_typo3_theme/workflows/CI/badge.svg?branch=master
   :alt: CI
   :target: https://github.com/TYPO3-Documentation/sphinx_typo3_theme/actions?query=workflow%3ACI

.. image:: https://github.com/TYPO3-Documentation/sphinx_typo3_theme/workflows/CDN/badge.svg?branch=master
   :alt: CDN Deployment
   :target: https://github.com/TYPO3-Documentation/sphinx_typo3_theme/actions?query=workflow%3ACDN

.. image:: https://github.com/TYPO3-Documentation/sphinx_typo3_theme/workflows/Python%20Package/badge.svg?branch=master
   :alt: Python Package
   :target: https://github.com/TYPO3-Documentation/sphinx_typo3_theme/actions?query=workflow%3A%22Python+Package%22


Demo manual to demonstrate html rendering
=========================================

There is a demo manual `t3SphinxThemeRtdDemoDocs`_
under construction. It serves as a "stress test" for this `sphinx_typo3_theme`
and tries to use as many reStructuredText examples as possible and covered by
the theme. **Documentation writers** may want to have a look at those pages to
understand what reST markup can be used and what the visual effect will be.
**Theme contributors** should use the demo manual for testing and *visually*
check the rendering.

.. _pip: https://pip.pypa.io/en/stable/
.. _pypi: https://pypi.org/
.. _python: https://www.python.org/
.. _sphinx: https://www.sphinx-doc.org/
.. _sphinx_typo3_theme: https://pypi.org/project/sphinx-typo3-theme/
.. _t3SphinxThemeRtdDemoDocs: https://docs.typo3.org/typo3cms/drafts/github/TYPO3-Documentation/t3SphinxThemeRtdDemoDocs/
.. _typo3 documentation team: https://typo3.org/community/teams/documentation/


Installation
============

Install the Theme Using PIP
---------------------------

PIP_ is a Python_ packet manager for PyPi_.
sphinx_typo3_theme_ is a Sphinx_ theme provided by the
`TYPO3 Documentation Team`_ available from PyPi.

Installation::

   # fetch from PyPi and install latest version
   pip install --upgrade sphinx-typo3-theme

Some quick examples of ``pip`` usage::

   pip install --help
   pip --help

   # install locally for the current user only
   pip install --upgrade --user sphinx-typo3-theme

   # uninstall
   pip uninstall sphinx-typo3-theme

   # search PyPi, the Python packet index
   pip search sphinx-typo3-theme
   pip search sphinx


Usage
=====

To use the theme in your Sphinx project, you will need to add these lines to
``conf.py``:

.. code:: python

   import sphinx_typo3_theme
   html_theme = "sphinx_typo3_theme"
   html_theme_path = [].append(sphinx_typo3_theme.get_html_theme_path())


TYPO3 documentation docker container
====================================

The container will use this theme for rendering automatically.


Usage on docs.typo3.org
=======================

The theme data of each release will be automatically uploaded to the TYPO3
content delivery network (CDN). The general url is::

   # NAME=sphinx_typo3_theme
   https://typo3.azureedge.net/typo3documentation/theme/<NAME>/<BRANCH|VERSION>/css/theme.css

For example, to access the `4.0.1` release, write::

   https://typo3.azureedge.net/typo3documentation/theme/sphinx_typo3_theme/4.0.1/css/theme.css

To access the latest use the branch name instead of the version number::

   https://typo3.azureedge.net/typo3documentation/theme/sphinx_typo3_theme/master/css/theme.css


Contribute
==========

If you would like to contribute and to help improve the theme feel free to fork
this project and create a pull request when you're happy with your changes.

You may as well check the `list of issues
<https://github.com/TYPO3-Documentation/sphinx_typo3_theme/issues>`_ to see
whether somebody else is already addressing your problem. If not, don't
hesitate to create a new issue for your problem.

Frontend development
--------------------

Setup minimal development environment:

1. Install Node

2. Install Yarn::

      npm install yarn

3. Install project dependencies::

      yarn install

4. Compile::

      yarn build

5. Serve::

      yarn serve


Python packaging
----------------

Make sure you have `python3`, `pip`, `setuptools`.

1. Update Python packages::

      pip install --user --upgrade pip
      pip install --user --upgrade setuptools

2. Build 'wheel' distribution packages for Linux or Mac and for Windows::

      python3 setup.py sdist bdist_wheel


Workflows (GitHub Actions)
==========================

Continous Integration (CI)
--------------------------

`.github/workflows/ci.yml`

1. `build-frontend`

   Ensure that the frontend dependencies can be installed and build. Ensure
   that the working directory is clean - there must not be any uncommitted
   changes.

2. `build-render`

   Ensure that the theme can be found and used by Sphinx.
   ((to be added: builds an example documentation, keeps it as an artifact
   for manual inspection)). Ensure the the working dir is clean.

This workflow is executed on every `push` or `pull_request`.


Python Package
--------------

`.github/workflows/python-package.yml`


1. `build`

   Lint the Python files.


2. `package`

   Build an installable package of the module and provide it as downloadable
   artifact.


3. `sphinx-quickstart-local`

   Build a minimal sample documentation obtained from `sphinx-quickstart`
   with the theme version of the current checkout. ((?))


4. `sphinx-quickstart-package`

   Build a minimal sample documentation obtained from `sphinx-quickstart`
   with the theme version (artifact) of step `package` as theme.

This workflow is executed on every `push` or `pull_request`.


Publish Python Package
----------------------

`.github/workflows/python-publish.yml`

1. `deploy`

   Build package and publish as sphinx_typo3_theme_ at PyPi_.

This workflow is executed on every `release`.


Content Delivery Network (CDN)
------------------------------

`.github/workflows/cdn.yml`

1. `build`

   Prepare and provide an usable artifact to be deployed to the CDN.


2. `deploy`

   Extract the current version number or branch name from `GITHUB_REF` and use
   it as identifier in the url on the TYPO3 Azure CDN.

This workflow is executed on every `push` to the `master` branch and `release`.
