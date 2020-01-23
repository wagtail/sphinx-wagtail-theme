# -*- coding: utf-8 -*-
"""`sphinx_typo3_theme` lives on `Github`_.

.. _github: https://github.com/TYPO3-Documentation/sphinx_typo3_theme

"""
from setuptools import setup
from sphinx_typo3_theme import __version__

setup(
    name='sphinx_typo3_theme',
    version=__version__,
    url='https://github.com/TYPO3-Documentation/sphinx_typo3_theme',
    license='MIT',
    author='Martin Bless',
    author_email='martin.bless@mbless.de',
    description='Sphinx TYPO3 theme for docs.typo3.org, starting 2015.',
    long_description=open('README.rst', encoding='utf-8').read(),
    zip_safe=False,
    packages=['sphinx_typo3_theme'],
    package_data={'sphinx_typo3_theme': ['*.*']},
    include_package_data=True,
    entry_points = {
        'sphinx.html_themes': [
            'sphinx_typo3_theme = sphinx_typo3_theme',
        ]
    },
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
