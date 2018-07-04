
==============================
A new theme for Docs.TYPO3.Org
==============================

:Project:  t3SphinxThemeRtd
:Team:     TYPO3 Documentation Team
:Author:   Martin Bless <martin.bless@typo3.org>
:License:  MIT
:Demo:     See this demo docs `t3SphinxThemeRtdDemoDocs
           <https://docs.typo3.org/typo3cms/drafts/github/TYPO3-Documentation/t3SphinxThemeRtdDemoDocs/>`__
           which are kind of a "stresstest" and demonstrate what's possible and
           how the theme can be used.

This work builds on top of v0.1.8 of `https://github.com/snide/sphinx_rtd_theme
<https://github.com/snide/sphinx_rtd_theme>`__.

Find notes about the state of development `in this blogpost
<http://mbless.de/blog/2015/06/16/a-new-theme-for-docs-typo3-org.html>`__.

Navigate this page:

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
't3SphinxThemeRtd' is provided by the TYPO3 Documentation Team
and available from PyPi.

Installation with ``pip``::

   # fetch from PyPi and install latest version:
   pip install --upgrade t3SphinxThemeRtd

   # if required for your system, run a superuser:
   pip install --upgrade t3SphinxThemeRtd

For your interest: Some quick examples of ``pip`` usage::

   # find help
   pip install --help
   pip --help

   # install locally for this user only
   pip install --upgrade --user t3SphinxThemeRtd

   # uninstall - no matter if installed by PIP or setup.py:
   pip uninstall t3SphinxThemeRtd

   # search PyPi, the Python packet index
   pip search t3SphinxThemeRtd
   pip search sphinx


Install directly using 'setup.py'
---------------------------------

To install directly from the package::

   git clone https://github.com/TYPO3-Documentation/t3SphinxThemeRtd.git
   cd t3SphinxThemeRtd
   (sudo) python setup.py install

   # or install locally in user's home:
   python setup.py --user install


Usage
=====

In the ``conf.py`` file of your documentation project:

Load the module::

   import t3SphinxThemeRtd

Choose the theme::

   html_theme = "t3SphinxThemeRtd"

Set the theme path::

   html_theme_path = [t3SphinxThemeRtd.get_html_theme_path()]

Or, if that's better in your case, add the theme path to to the
list of already defined paths::

   html_theme_path = []
   # ...
   html_theme_path.append(t3SphinxThemeRtd.get_html_theme_path())


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


To be done
==========

Check this `list in the blogpost
<http://mbless.de/blog/2015/06/16/a-new-theme-for-docs-typo3-org.html#to-be-done>`__


Changelog
=========

v3.1.0
------
- publish as 3.1.0
- use minified jQuery
- add our "Edit me on GitHub" button

v3.0.0
------

- First public version.
  We start numbering this TYPO3 fork of the RTD theme with version number 3.0.0
  to be clearly different from the original ``sphinx_rtd_theme`` which is v0.1.8.

Already done
------------

Check this `list in the blogpost
<http://mbless.de/blog/2015/06/16/a-new-theme-for-docs-typo3-org.html#already-done>`__


How the Table of Contents builds
================================

Read about this in the `original README <https://github.com/snide/sphinx_rtd_theme>`__.


Contributing or modifying the theme
===================================

This chapter is taken from the `original README <https://github.com/snide/sphinx_rtd_theme>`__
(and then modified)::

The ``t3SphinxThemeRtd`` is primarily a `Sass <http://sass-lang.com/>`__ project that
requires a few other Sass libraries. We are using `Bower <http://bower.io/>`__ to
manage these dependencies and Sass to build the css. The good news is that there is
a nice set of `Grunt <http://gruntjs.com/>`__ operations that will not only load
these dependecies, but watch for changes, rebuild the sphinx demo docs and build
a distributable version of the theme. The bad news is this means you'll need to
set up your environment similar to that of a front-end developer (versus that of
a python developer). That means installing `Node <https://nodejs.org/>`__
and `Ruby <https://www.ruby-lang.org/>`__.

Set up a development environment
--------------------------------

1. Install `Sphinx <http://sphinx-doc.org/>`__.
   It is a good idea - but not a requirement - to install into a `virtual environment
   <https://virtualenv.pypa.io/en/latest/>`__::


      # Maybe activate virtualenv first. Then:

      pip install sphinx

2. Install Sass::

      gem install sass

3. Install Node, Bower and Grunt::

      # Install node
      brew install node

      # Install bower and grunt
      npm install -g bower grunt-cli

      # Now that everything is installed, let's install the theme's dependecies.
      cd t3SphinxThemeRtd
      npm install


5. You may want to add the `Livereload Addons <http://livereload.com/>`__ to your
   Firefox and Chrome browser.

6. Now that our environment is set up, make sure you're in your virtual environment, go to
   our package in the terminal and run Grunt::

      cd t3SphinxThemeRtd
      grunt

   Or, mabe even better, run Grunt in the background::

      cd t3SphinxThemeRtd
      grunt &

This default task will do the following **very cool things that make it worth the trouble**.

1. It'll install and update any bower dependencies.
2. It'll run sphinx and build the demo_docs.
3. It'll watch for changes to the Sass files and build css from the changes.
4. It'll rebuild the sphinx demo_docs anytime it notices a change to .rst, .html, .js
   or .css files.
5. It'll start a local web server at localhost:1919.
6. It'll show the demo_docs in the browser.
7. It'll refresh the browser for localhost:1919 automatically if LiveReload is enabled.

There is a `grunt copy` command as well that copies files from the components
that bower fetches into the actual theme directory. For example fonts are move to the
right place that way.

**Note:** I you want that copy action you need to run ``grunt copy`` manually.
It is not run by default.

End of README.