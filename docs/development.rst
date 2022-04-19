.. highlight:: shell
.. index:: Development
.. _Development:

===========
Development
===========


For local development you need a system with Node v16.x, Python3, Git and
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

Build and install the package for development::

   make install-for-development

Don't forget to update the docs. Render the documentation::

   make docs

Serve build docs locally::

   make serve

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


Example pages
=============

When working on the theme it is often going to be helpful to know the impact of your changes.
The :doc:`examples section <examples/index>` should be helpful for this.

When you are adding new elements or styles that are not part of the examples, please make sure to add them.


Javascript package management
=============================

Use `npm` for package management.
