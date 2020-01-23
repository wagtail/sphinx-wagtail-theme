from os

VERSION = (3, 6, 17)

__version__ = ".".join(str(v) for v in VERSION)
__version_full__ = __version__

def get_html_theme_path():
    """Return list of HTML theme paths."""
    theme_path = os.path.abspath(os.path.dirname(__file__))
    return [theme_path]

def setup(app):
    app.add_html_theme('sphinx_typo3_theme', path.abspath(path.dirname(__file__)))
