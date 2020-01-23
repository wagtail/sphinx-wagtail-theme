import os
from pkg_resources import get_distribution, DistributionNotFound

try:
    release = get_distribution('sphinx_typo3_theme').version
    VERSION = release.split('.')[:2]
except DistributionNotFound:
    VERSION = (0, 0, 0)

__version__ = '.'.join(str(v) for v in VERSION)
__version_full__ = __version__

def get_html_theme_path():
    """Return list of HTML theme paths."""
    return os.path.abspath(os.path.dirname(os.path.dirname(__file__)))

def get_theme_version():
    """Return the theme version"""
    return __version__

def update_context(app, pagename, templatename, context, doctree):
    context['typo3_theme_version'] = __version__

def setup(app):
    app.connect('html-page-context', update_context)
    app.add_html_theme('sphinx_typo3_theme', get_html_theme_path())
    return {'version': __version__,
            'parallel_read_safe': True}
