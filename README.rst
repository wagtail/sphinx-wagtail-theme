
==============================
A new theme for Docs.TYPO3.Org
==============================

:Project:  sphinx_typo3_theme
:Team:     TYPO3 Documentation Team
:Author:   Martin Bless <martin.bless@typo3.org>
:License:  MIT
:Demo:     See this demo docs `t3SphinxThemeRtdDemoDocs
           <https://docs.typo3.org/typo3cms/drafts/github/TYPO3-Documentation/t3SphinxThemeRtdDemoDocs/>`__
           which are kind of a "stresstest" and demonstrate what's possible and
           how the theme can be used.

Table of contents:

.. default-role:: code

.. contents::
   :local:
   :depth: 3
   :backlinks: top


Installation
============

Install the Theme Using PIP
---------------------------

`PIP <https://pip.pypa.io/en/stable/>`__ is the
`Python <https://www.python.org/>`__ packet manager for
`PyPi <https://pypi.python.org/pypi>`__.
'sphinx_typo3_theme' is provided by the TYPO3 Documentation Team
and available from PyPi.

Installation with ``pip``::

   # fetch from PyPi and install latest version:
   pip install --upgrade sphinx-typo3-theme

   # if required for your system, run a superuser:
   pip install --upgrade sphinx-typo3-theme

For your interest: Some quick examples of ``pip`` usage::

   # find help
   pip install --help
   pip --help

   # install locally for this user only
   pip install --upgrade --user sphinx-typo3-theme

   # uninstall - no matter if installed by PIP or setup.py:
   pip uninstall sphinx-typo3-theme

   # search PyPi, the Python packet index
   pip search sphinx-typo3-theme
   pip search sphinx


Install directly using 'setup.py'
---------------------------------

To install directly from the package::

   git clone git@github.com:TYPO3-Documentation/sphinx_typo3_theme.git
   cd sphinx_typo3_theme
   (sudo) python setup.py install

   # or install locally in user's home:
   python setup.py install --user


Usage
=====

To use the theme in your Sphinx project, you will need to add the following to
your ``conf.py`` file:

.. code:: python

    import sphinx_typo3_theme

    extensions = [
        ...
        "sphinx_typo3_theme",
    ]

    html_theme = "sphinx_typo3_theme"


Special Information for TYPO3 Users
-----------------------------------

1. Disable or remove any existing "TYPO3 codeblock"

   If the "TYPO3 codeblock" is part of your ``conf.py`` file
   then you need to remove or disable that code.
   You can do that easily by writing ``if 0`` instead of ``if 1``.

   .. figure:: Documentation/Images/disable-typo3-codeblock.png
      :alt: How to disable an existing TYPO3 codeblock in conf.py

      Disable any "TYPO3 codeblock" in your ``conf.py`` by
      writing ``if 0``.

2. Once the "TYPO3 codeblock" is disabled the old `t3sphinx module
   <https://git.typo3.org/Documentation/RestTools.git/tree/HEAD:/ExtendingSphinxForTYPO3/src/t3sphinx>`__
   IS NOT used any more. So you finally are being freed from old ballast
   and some of those old and annoying errors are gone. Rendering of Sphinx Json
   format will just work fine with the new theme.

3. On the other hand: Since the ``t3sphinx module`` isn't loaded any more
   there is no processing of Yaml files for configuration at the moment. This
   means, at least for now:

   - You have to use a ``conf.py`` file for configuration.
   - You need to move all necessary settings from possible ``GlobalSettings.yml``
     and ``Settings.yml`` files into the ``conf.py``.

4. Maybe we add Yaml processing in the future. At the moment this doesn't exist.

5. **To quickly get going:** Feel free to copy from this
   `Typoscript Reference conf.py example file
   <Documentation/Examples/TyposcriptReferenceExample-conf.py>`__.
   The relevant parts are at the end.

Contributing or modifying the theme
===================================

This chapter is taken from the `original README <https://github.com/snide/sphinx_rtd_theme>`__
(and then modified)::

The ``sphinx_typo3_theme`` is primarily a `Sass <http://sass-lang.com/>`__ project that
requires a few other Sass libraries. We are using yarn to
manage these dependencies and Sass to build the css. The good news is that there is
a nice set of `Grunt <http://gruntjs.com/>`__ operations that will not only load
these dependencies, but watch for changes, rebuild the sphinx demo docs and build
a distributable version of the theme. The bad news is this means you'll need to
set up your environment similar to that of a front-end developer (versus that of
a python developer). That means installing `Node <https://nodejs.org/>`__.

Setup minimal development environment
-------------------------------------

1. Install Node

2. Install Yarn::

      npm install yarn

3. Install project dependencies::

      yarn install

4. Compile::

      yarn build

5. Serve::

      yarn serve
