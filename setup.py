# -*- coding: utf-8 -*-
"""`sphinx_typo3_theme` lives on `Github`_.

.. _github: https://github.com/TYPO3-Documentation/sphinx_typo3_theme

"""
from io import open
from setuptools import setup

setup(
    name='sphinx_typo3_theme',
    url='https://github.com/TYPO3-Documentation/sphinx_typo3_theme',
    license='MIT',
    author='Martin Bless',
    author_email='martin.bless@mbless.de',
    description='Sphinx TYPO3 theme for docs.typo3.org, starting 2015.',
    long_description=open('README.rst').read(),
    zip_safe=False,
    entry_points = {
        'sphinx.html_themes': [
            'sphinx_typo3_theme = sphinx_typo3_theme',
        ]
    },
    packages=[
        'sphinx_typo3_theme'
    ],
    package_data={
        'sphinx_typo3_theme': [
            'theme.conf',
            '*.html',
            'static/css/*.css',
            'static/fonts/*.*'
            'static/img/*.*',
            'static/js/*.js',
        ]
    },
    include_package_data=True,
    use_scm_version=True,
    setup_requires=[
        'setuptools_scm'
    ],
    install_requires=[
       'sphinx'
    ],
    tests_require=[
        'pytest',
    ],
    classifiers=[
        'Framework :: Sphinx',
        'Framework :: Sphinx :: Theme',
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: MIT License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
