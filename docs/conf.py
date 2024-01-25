import os
import sys

import sphinx_wagtail_theme

sys.path.insert(0, os.path.abspath('..'))

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx_wagtail_theme',
    'myst_parser',
    'sphinx_copybutton',
]
templates_path = ['_templates']
source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'markdown',
    '.md': 'markdown',
}
master_doc = 'index'
project = 'Sphinx Wagtail theme'
copyright = "2022, Wagtail contributors"
author = "Wagtail"
# The short X.Y version.
version = sphinx_wagtail_theme.__version__
# The full version, including alpha/beta/rc tags.
release = sphinx_wagtail_theme.__version__
language = "en"
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'requirements.txt']
# If true, `todo` and `todoList` produce output, else they produce nothing.
todo_include_todos = False
today_fmt = '%Y-%m-%d %H:%M'

# -- Options for HTML output -------------------------------------------
html_theme = 'sphinx_wagtail_theme'
html_static_path = []
html_favicon = 'favicon.ico'
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

github_doc_root = 'https://github.com/wagtail/sphinx_wagtail_theme/tree/main/docs'

def setup(app):
    pass


# https://docs.readthedocs.io/en/stable/guides/manage-translations.html#create-translatable-files
# https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-gettext_uuid
gettext_uuid = True
gettext_compact = False
