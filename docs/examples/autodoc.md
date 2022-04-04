# Autodoc

With its [autodoc feature](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html), Sphinx supports writing documentation in Python docstrings for subsequent integration in the project’s documentation pages.
This is a very powerful feature which we highly recommend using to document Wagtail’s APIs.

For Sphinx (actually, the Python interpreter that executes Sphinx) to find your module, it must be importable.
That means that the module or the package must be in one of the directories on `sys.path` – adapt your `sys.path` in the configuration file accordingly.

The following uses a `flake8` module as an example, because `flake8` is installed in the theme development environment and had many docstings.

## `flake8.main.application`

```{eval-rst}
.. automodule:: flake8.main.application
   :members:
```
