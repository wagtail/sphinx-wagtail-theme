# [Sphinx Wagtail theme](https://sphinx-wagtail-theme.readthedocs.io/)

[![CI status](https://github.com/wagtail/sphinx_wagtail_theme/workflows/CI/badge.svg)](https://github.com/wagtail/sphinx_wagtail_theme/actions?query=workflow%3ACI) [![PyPI version](https://badge.fury.io/py/sphinx-wagtail-theme.svg)](https://badge.fury.io/py/sphinx-wagtail-theme) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sphinx Wagtail theme contains all files required to build a Sphinx extension that provides the theme.

-   [MIT license](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/LICENSE)
-   [Contributors](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/CONTRIBUTORS.md)
-   [Repository](https://github.com/wagtail/sphinx_wagtail_theme)
-   [Documentation](https://sphinx-wagtail-theme.readthedocs.io/en/latest/)
-   [Security](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/SECURITY.md)
-   [Changelog](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/CHANGELOG.md)
-   Supports Python >= 3.8

## Installation

```sh
pip install sphinx-wagtail-theme
```

## Usage

Select the "Sphinx Wagtail theme" in the `conf.py` file of a Sphinx

```python
# include the theme in the list of extensions to be loaded
extensions = ['sphinx_wagtail_theme', …]

# select the theme
html_theme = 'sphinx_wagtail_theme'
```

-   See the documentation for more usage instructions

## Development

### Getting started

-   [Instructions for Mac, Linux, and Windows](docs/development.rst)

### Release process

This section is for maintainer reference.

1. Check all relevant changes since the last release are documented in `CHANGELOG.md`
2. Check if there are any new contributors and add them to `CONTRIBUTORS.md`
3. Update the version number in `setup.cfg`. The version number should follow [Semantic Versioning](https://semver.org/).
4. Commit and push the changes
5. Create and push a new tag with the version number, prefixed with `v`. For example, `v1.2.3`
6. In the GitHub repository, create a new release against the tag you just pushed.
7. Once the release is created, the CI will automatically publish the new version to PyPI.

## Credits

[Sphinx Wagtail theme](https://github.com/wagtail/sphinx_wagtail_theme) is based on [Sphinx Typo3 theme](https://github.com/TYPO3-Documentation/sphinx_typo3_theme) which is based on [t3SphinxThemeRtd](https://github.com/typo3-documentation/t3SphinxThemeRtd) which is based on the [Read the Docs Sphinx theme](https://github.com/readthedocs/sphinx_rtd_theme).
