=====
Usage
=====

Use the Sphinx TYPO3 theme in the conf.py file of a Sphinx project::

    import sphinx_typo3_theme
    html_theme = 'sphinx_typo3_theme'
    try:
        html_theme_path
    except NameError:
        html_theme_path = []
    html_theme_path.insert(0, sphinx_typo3_theme.get_html_theme_path())
