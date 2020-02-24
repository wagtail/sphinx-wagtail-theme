=====
Usage
=====

Select the "Sphinx TYPO3 theme" in the `conf.py` file of a Sphinx project like
so::

   # include the theme in the list of extensions to be loaded
   extensions = ['sphinx_typo3_theme', …]

   # select the theme
   html_theme = 'sphinx_typo3_theme'


For developers:

The following snippet should always work if appended at the end of `conf.py`::

   try:
      extensions
   except: NameError
      extensions = []

   extensions.append('sphinx_typo3_theme')
   html_theme = 'sphinx_typo3_theme'
