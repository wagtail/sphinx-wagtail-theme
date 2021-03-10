import os
import sys

import sphinx_wagtail_theme

sys.path.insert(0, os.path.abspath('..'))

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx_wagtail_theme',
    ]
templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'
project = 'Sphinx Wagtail theme'
copyright = "2020, Wagtail contributors"
author = "Wagtail"
# The short X.Y version.
version = sphinx_wagtail_theme.__version__
# The full version, including alpha/beta/rc tags.
release = sphinx_wagtail_theme.__version__
language = None
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
pygments_style = 'sphinx'
# If true, `todo` and `todoList` produce output, else they produce nothing.
todo_include_todos = False
today_fmt = '%Y-%m-%d %H:%M'

# -- Options for HTML output -------------------------------------------
html_theme = 'sphinx_wagtail_theme'
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
