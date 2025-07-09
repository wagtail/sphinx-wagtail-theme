import sphinx_wagtail_theme
import subprocess
import tempfile
from pathlib import Path


def test_theme_info():
    assert isinstance(sphinx_wagtail_theme.__version__, str)
    assert len(sphinx_wagtail_theme.__version__) >= 5


def test_module_methods():
    assert isinstance(sphinx_wagtail_theme.get_html_theme_path(), str)


def test_breadcrumbs_customization():
    """Test that breadcrumbs_root option works correctly."""
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)

        # Test default behavior (should use project name)
        conf_content_default = """
extensions = ["sphinx_wagtail_theme"]
html_theme = "sphinx_wagtail_theme"
project = "Test Project Name"
"""

        # Test custom breadcrumbs_root
        conf_content_custom = """
extensions = ["sphinx_wagtail_theme"]
html_theme = "sphinx_wagtail_theme"
html_theme_options = {"breadcrumbs_root": "Custom Breadcrumb Root"}
project = "Test Project Name"
"""

        index_content = """
Test Page
=========

This is a test page for breadcrumb testing.
"""

        # Test default behavior
        (temp_path / "conf.py").write_text(conf_content_default)
        (temp_path / "index.rst").write_text(index_content)

        result = subprocess.run(
            [
                "python",
                "-m",
                "sphinx",
                "-b",
                "html",
                str(temp_path),
                str(temp_path / "_build_default"),
            ],
            capture_output=True,
            text=True,
        )

        assert result.returncode == 0, f"Sphinx build failed: {result.stderr}"

        # Check that default uses project name
        index_html = (temp_path / "_build_default" / "index.html").read_text()
        assert "Test Project Name</a></li>" in index_html

        # Test custom breadcrumbs_root
        (temp_path / "conf.py").write_text(conf_content_custom)

        result = subprocess.run(
            [
                "python",
                "-m",
                "sphinx",
                "-b",
                "html",
                str(temp_path),
                str(temp_path / "_build_custom"),
            ],
            capture_output=True,
            text=True,
        )

        assert result.returncode == 0, f"Sphinx build failed: {result.stderr}"

        # Check that custom option is used
        index_html = (temp_path / "_build_custom" / "index.html").read_text()
        assert "Custom Breadcrumb Root</a></li>" in index_html
