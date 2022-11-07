# [Sphinx Wagtail theme](https://sphinx-wagtail-theme.vercel.app/)

[![CI status](https://github.com/wagtail/sphinx_wagtail_theme/workflows/CI/badge.svg)](https://github.com/wagtail/sphinx_wagtail_theme/actions?query=workflow%3ACI) [![PyPI version](https://badge.fury.io/py/sphinx-wagtail-theme.svg)](https://badge.fury.io/py/sphinx-wagtail-theme) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sphinx Wagtail theme contains all files required to build a Sphinx extension that provides the theme.

-   [MIT license](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/LICENSE)
-   [Contributors](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/CONTRIBUTORS.md)
-   [Repository](https://github.com/wagtail/sphinx_wagtail_theme)
-   [Documentation](https://sphinx-wagtail-theme.netlify.app/)
-   [Security](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/SECURITY.md)
-   [Changelog](https://github.com/wagtail/sphinx_wagtail_theme/blob/main/CHANGELOG.md)
-   Supports Python > 3.7

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

Checklist:

-   [ ] `CONTRIBUTORS.md` is updated
-   [ ] `CHANGELOG.md` is updated
-   [ ] `setup.cfg` is updated (see `version`)
-   [ ] Everything is committed, clean checkout
-   [ ] `~/.pypirc` has a username and password (token)
-   [ ] Add a git tag and a GitHub release once completed

With an active virtual environment:

```sh
python -m pip install --upgrade -r requirements.txt
make clean
make clean-frontend
npm ci
npm run build
prerelease
git tag -a N.N.N -m "N.N.N"
git push origin N.N.N
python -m build
python -m twine upload --repository pypi dist/*
postrelease
```

## Credits

[Sphinx Wagtail theme](https://github.com/wagtail/sphinx_wagtail_theme) is based on [Sphinx Typo3 theme](https://github.com/TYPO3-Documentation/sphinx_typo3_theme) which is based on [t3SphinxThemeRtd](https://github.com/typo3-documentation/t3SphinxThemeRtd) which is based on the [Read the Docs Sphinx theme](https://github.com/readthedocs/sphinx_rtd_theme).

Thank you to [Vercel](https://vercel.com/?utm_source=wagtail&utm_campaign=oss) for hosting the theme’s preview sites.
