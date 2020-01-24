import os
import json
from pkg_resources import get_distribution, DistributionNotFound

try:
    release = get_distribution('sphinx_typo3_theme').version
    VERSION = release.split('.')[:3]
    __version__ = '.'.join(str(v) for v in VERSION)
    __version_full__ = release
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

def _config_inited(app, config):
    config.html_theme_options['version'] = __version__
    config.html_theme_options['version_full'] = __version_full__

def setup(app):
    app.connect('config-inited', _config_inited)
    # add_html_theme is new in Sphinx 1.6+
    if hasattr(app, "add_html_theme"):
        theme_path = os.path.abspath(os.path.dirname(__file__))
        app.add_html_theme("sphinx_typo3_theme", theme_path)
    return {
        'version': __version__,
        'version_full': __version_full__,
        'parallel_read_safe': True
    }
