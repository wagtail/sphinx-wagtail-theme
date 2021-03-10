#!/usr/bin/env python
#
import os
import sys
sys.path.insert(0, os.path.abspath('..'))

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    ]
templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'
project = 'Sphinx Wagtail theme'
copyright = "2020, Wagtail documentation team"
author = "Martin Bless"
# The short X.Y version.
version = '0.0'
# The full version, including alpha/beta/rc tags.
release = '0.0.0'
language = None
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
pygments_style = 'sphinx'
# If true, `todo` and `todoList` produce output, else they produce nothing.
todo_include_todos = False
today_fmt = '%Y-%m-%d %H:%M'

# -- Options for HTML output -------------------------------------------
html_theme = 'alabaster'
html_static_path = []
# -- Options for HTMLHelp output ---------------------------------------
htmlhelp_basename = 'sphinx_wagtail_themedoc'
# -- Options for LaTeX output ------------------------------------------
latex_elements = {}
latex_documents = [
    (master_doc, 'sphinx_wagtail_theme.tex',
     'Sphinx Wagtail theme documentation',
     'Martin Bless', 'manual'),
]
# -- Options for manual page output ------------------------------------
man_pages = [
    (master_doc, 'sphinx_wagtail_theme',
     'Sphinx Wagtail theme documentation',
     [author], 1)
]
# -- Options for Texinfo output ----------------------------------------
texinfo_documents = [
    (master_doc, 'sphinx_wagtail_theme',
     'Sphinx Wagtail theme documentation',
     author,
     'sphinx_wagtail_theme',
     'One line description of project.',
     'Miscellaneous'),
]
# -- what we are doing -------------------------------------------------
try:
    import sphinx_wagtail_theme
    is_imported = True
except:
    is_imported = False
if is_imported:
    version = sphinx_wagtail_theme.__version__
    release = sphinx_wagtail_theme.__version__
    html_theme = 'sphinx_wagtail_theme'





