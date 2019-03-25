"""Sphinx ReadTheDocs theme.

From https://github.com/ryan-roemer/sphinx-bootstrap-theme.

"""
import os

VERSION = (3, 6, 16)

__version__ = ".".join(str(v) for v in VERSION)
__version_full__ = __version__


def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    return cur_dir


def htmlPageContext(app, pagename, templatename, context, doctree):
    # Here we check the document's metadata for a 'template' specification.
    # You may set that this in reST AT THE VERY TOP of the reST source
    # as ':template: sitemap.html' for example

    template = app.builder.env.metadata.get(pagename, {}).get('template')
    return template

    # if 'sitemap' in pagename.lower():
    #     env = app.builder.env
    #     import pprint
    #     pprint.pprint(dir(env))
    #     pprint.pprint(env.metadata)
    #     pprint.pprint({'context': context})
    #     pprint.pprint({'doctree': doctree})
    #     pprint.pprint({'app': app})
    #     pprint.pprint({'pagename': pagename})
    #     pprint.pprint({'templatename': templatename})
    #     pprint.pprint({'template': template})
    #     #pprint.pprint(app.env.config)

# The following function 'setup()' is the requirement for
# a Sphinx extension. By having this we can use 't3SphinxThemeRtd'
# as sphinx extension as well.

def setup(app):
    app.connect('html-page-context', htmlPageContext)
