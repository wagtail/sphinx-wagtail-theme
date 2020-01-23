import os

VERSION = (3, 6, 17)

__version__ = ".".join(str(v) for v in VERSION)
__version_full__ = __version__

def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    return cur_dir

def htmlPageContext(app, pagename, templatename, context, doctree):
    template = app.builder.env.metadata.get(pagename, {}).get('template')
    return template

def setup(app):
    app.connect('html-page-context', htmlPageContext)
