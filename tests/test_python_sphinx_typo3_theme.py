#!/usr/bin/env python

"""Tests for `sphinx_typo3_theme` package."""

from __future__ import print_function
import sphinx_typo3_theme

is_main = __name__ == "__main__"


def test_theme_info():
    """Test imported stuff."""
    version_info = sphinx_typo3_theme.version_info
    build_mtime = version_info['build_mtime']
    assert int(build_mtime) > 1580000000
    module_name = version_info['module_name']
    assert module_name == 'sphinx_typo3_theme'
    version_scm = version_info['version_scm']
    assert len(version_scm)
    assert version_scm == sphinx_typo3_theme.__version__
    version_scm_build = version_info['version_scm_build']
    assert type(version_scm_build) == str
    version_scm_core = version_info['version_scm_core']
    assert len(version_scm_core)
    version_scm_pre_release = version_info['version_scm_pre_release']
    assert type(version_scm_pre_release) == str
    if is_main:
        print('succeeded: test_theme_info()')


def test_methods():
    """Test the module methods."""

    assert len(sphinx_typo3_theme.get_html_theme_path())
    mtime = sphinx_typo3_theme.get_theme_mtime()
    assert isinstance(mtime, int)
    assert mtime > 1580000000
    assert sphinx_typo3_theme.get_theme_name() == 'sphinx_typo3_theme'
    if is_main:
        print('succeeded: test_methods()')


def main():
    test_theme_info()
    test_methods()


if is_main:
    main()
