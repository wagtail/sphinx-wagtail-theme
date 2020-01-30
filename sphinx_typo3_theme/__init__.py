"""Sphinx TYPO3 theme for docs.typo3.org.

"""

import json
import os

f1path = os.path.join(os.path.dirname(__file__), 'static/theme_info.json')
with open(f1path) as f1:
    theme_info = json.load(f1)

__version__ = theme_info['theme_version_core']


def get_html_theme_path():
    """Return absolute path to parent folder of installed theme."""

    return os.path.abspath(os.path.dirname(os.path.dirname(__file__)))


def _htmlPageContext(app, pagename, templatename, context, doctree):
    """Inspect reST page metadata possibly select a custom template file.

    A field field list near the top of a reST source file is passed on by
    Sphinx as file metadata. Here we are looking for a meta field 'template'.
    If found it specifies the html template file for the page. For example, a
    line `:template: sitemap.html' right at the beginning of a reST file will
    tell Sphinx to use the template file `sitemap.html` for this page instead
    of the default template file `page.html`.

    """

    return app.builder.env.metadata.get(pagename, {}).get('template')


def _add_html_theme_options(app, config):
    """Make the theme_version available in html templates."""

    config.html_theme_options['theme_version'] = __version__

def setup(app):
    """Setup functionality called by Sphinx"""

    app.connect('html-page-context', _htmlPageContext)
    app.connect('config-inited', _config_inited)
    if hasattr(app, 'add_html_theme'):
        app.add_html_theme("sphinx_typo3_theme",
                           get_html_theme_path())
    return {
        'version': __version__,
        'parallel_read_safe': True
    }
