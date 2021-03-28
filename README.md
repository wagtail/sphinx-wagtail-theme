# [Sphinx Wagtail theme](https://sphinx-wagtail-theme.netlify.app/) [![CI status](https://github.com/wagtail/sphinx_wagtail_theme/workflows/CI/badge.svg)](https://github.com/wagtail/sphinx_wagtail_theme/actions?query=workflow%3ACI) [![Netlify Status](https://api.netlify.com/api/v1/badges/82ecbf01-a706-4e92-8457-8a8726ca2123/deploy-status)](https://app.netlify.com/sites/sphinx-wagtail-theme/deploys)

Sphinx Wagtail theme contains all files required to build a Sphinx extension that provides the theme.

* Free software: MIT license
* Authors: See AUTHORS.rst
* Repository: https://github.com/wagtail/sphinx_wagtail_theme
* Documentation: See docs/ folder


## Release process

Checklist:

- AUTHORS.rst is updated
- HISTORY.rst (change log) is updated
- Everything is committed, clean checkout
- ~/.pypirc has a username and password (token)

With an active virtual environment:

    python -m pip install --upgrade -r requirements.txt
    make clean
    make clean-frontend
    npm install
    npm run build
    prerelease
    python -m build
    python -m twine upload --repository pypi dist/*
    postrelease


## Credits

[Sphinx Wagtail theme](https://github.com/wagtail/sphinx_wagtail_theme) is based on [Sphinx Typo3 theme](https://github.com/TYPO3-Documentation/sphinx_typo3_theme) which is based on [t3SphinxThemeRtd](https://github.com/typo3-documentation/t3SphinxThemeRtd) which is based on the [Read the Docs Sphinx theme](https://github.com/readthedocs/sphinx_rtd_theme).
