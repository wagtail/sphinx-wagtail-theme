.. highlight:: shell
.. index:: Development
.. _Development:

===========
Development
===========


For local development you need a system with Node v22.x, Python3, and Git.
It is strongly recommended to use a Python virtual environment (`venv`_) and
you use `fnm <https://github.com/Schniz/fnm>`_ to manage your Node versions.
The build process derives the version from repository data, so it's necessary
to clone the repository and not just download a single snapshot.

Mac or Linux
============

These steps require having ``make`` installed. If the first command below
produces an error, you can follow the steps below in the Windows section.

Start with ``make``

.. code-block:: shell

   # show all available tasks
   make

Install requirements and fulfill Python and Node demands (repeatable)

.. code-block:: text

   make install

When doing frontend development compile your changes at any time

.. code-block:: text

   make frontend

Don't forget to update the docs. Render the documentation

.. code-block:: text

   make docs

Serve build docs locally

.. code-block:: text

   make serve

Check the Python code and CSS/JS against the styleguide.

.. code-block:: shell

   make lint

Run Python unit tests

.. code-block:: text

   make test


To find out whether the created wheel package passes the `twine check` test and
can be uploaded to PyPi run

.. code-block:: text

   make build test


.. _venv: https://docs.python.org/3/library/venv.html


Windows, or systems without ``make`` installed
==============================================

Windows does not have ``make`` therefore we must run the commands directly
rather than using the shortcuts in the Makefile. Assume the commands below are
all run in PowerShell. These instructions will also work on Mac or Linux without
make installed as well.

First, be sure to install Python, and Node.
`fnm <https://github.com/Schniz/fnm>`_ is really useful for
managing multiple versions of Node on Windows.

Make a Python virtual environment. Let's make it in a folder called ``.venv``
which will be ignored by git.

.. code-block:: shell

   # Create the venv
   python -m venv ./.venv/

   # Activate it (PowerShell)
   ./.venv/Scripts/Activate.ps1

   # Install dependencies
   pip install -r requirements-dev.txt

Install the the NPM dependencies:

.. code-block:: text

   npm install

Now, build the frontend (this compiles the CSS and JavaScript). Re-run this
whenever you edit ``.scss`` or ``.js`` files.

.. code-block:: text

   npm run frontend

To test out the sphinx theme, build the project's own documentation using the
theme! The command below tells Sphinx to build the ``./docs/`` folder as HTML,
and put the output HTML files in ``./docs/_build/``.

.. code-block:: text

   sphinx-build -M html ./docs/ ./docs/_build/

If you see any red errors in the console, that would most likely be related to
a syntax error in a ``.rst`` or ``.md`` file in the ``./docs/`` folder.

To browse the docs you just built, fire up a simple web server using Python:

.. code-block:: text

   python -m http.server -d ./docs/_build/html/

Now go to http://localhost:8000/ in your browser.

If you make any changes to the Python code, you'll want to run the linters to
check for errors:

.. code-block:: text

   flake8 .


Example Pages
=============

When working on the theme it is often going to be helpful to know the impact of your changes.
The :doc:`examples section <examples/index>` should be helpful for this.

When you are adding new elements or styles that are not part of the examples, please make sure to add them.


Javascript package management
=============================

Use ``npm`` for package management.
