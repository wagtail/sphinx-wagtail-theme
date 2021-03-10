.. highlight:: shell
.. index:: Development
.. _Development:

===========
Development
===========

For local development you need a system with Node v12.x, Yarn, Python3, Git and
make. It is strongly recommended to use a Python virtual environment (`venv`_).
The build process derives the version from repository data, so it's necessary
to clone the repository and not just download a single snapshot.

Start with `make`::

   # show all available tasks
   make

Install requirements and fulfill Python and Node demands (repeatable)::

   make setup

When doing frontend development compile your changes at any time::

   make frontend

Build and install the package::

   make install

Don't forget to update the docs. Render the documentation and show in browser::

   make docs

Without opening the browser::

   non_interactive=1  make docs

Check the Python code. The CI workflow requires `lint-minimal` to succeed::

   # for local use
   make lint

   # used in the workflow
   make lint-minimal

Run Python unit tests::

   make test

Rebuild and install from Python wheel package::

   make install

   # then verify the module can be imported and used
   make test-import


To find out whether the created wheel package passes the `twine check` test and
can be uploaded to PyPi run::

   make build test


.. _venv: https://docs.python.org/3/library/venv.html

Grunt
=====

More commands are available by means of `grunt`. Run::

   grunt --help

and check the `gruntfile.js`.


Theme stress test
=================

There is a demo manual `t3SphinxThemeRtdDemoDocs`_
under construction. It serves as a "stress test" for this `sphinx_wagtail_theme`_
and tries to use as many reStructuredText examples as possible and covered by
the theme. **Documentation writers** may want to have a look at those pages to
understand what reST markup can be used and what the visual effect will be.
**Theme contributors** should use the demo manual for testing and *visually*
check the rendering.

.. _t3SphinxThemeRtdDemoDocs: https://docs.typo3.org/m/typo3/demo-t3SphinxThemeRtd/master/en-us/
.. _sphinx_wagtail_theme: https://github.com/typo3-documentation/sphinx_wagtail_theme


Javascript package management
=============================

Use `yarn` for package management.

To upgrade a Javascript package to a newer version use the following. This
keeps `package.json` and `yarn.lock` in sync as BOTH will be modified:

.. code-block:: shell

   # ATTENTION: Select only those with reasonable version numbers.
   # Be very careful if the MAJOR number would change
   yarn upgrade-interactive --latest


Release process
===============

Checklist:

- AUTHORS.rst is updated
- HISTORY.rst (change log) is updated
- Everything is committed, clean checkout
- ~/.pypirc has a username and password (token)

With an active virtual environment:

.. code-block:: shell

    python -m pip install -r requirements_dev.txt
    make clean
    fullrelease
    python -m pip install --upgrade build
    python -m build
    python -m twine upload --repository pypi dist/*