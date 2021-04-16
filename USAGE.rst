=====
Usage
=====

Select the "Sphinx Wagtail theme" in the `conf.py` file of a Sphinx project::

   # include the theme in the list of extensions to be loaded
   extensions = ['sphinx_wagtail_theme', …]

   # select the theme
   html_theme = 'sphinx_wagtail_theme'


For developers:

The following snippet should always work if appended at the end of `conf.py`::

   try:
      extensions
   except NameError:
      extensions = []

   extensions.append('sphinx_wagtail_theme')
   html_theme = 'sphinx_wagtail_theme'
