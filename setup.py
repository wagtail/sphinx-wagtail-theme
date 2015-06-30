# -*- coding: utf-8 -*-
"""`t3SphinxThemeRtd` lives on `Github`_.

.. _github: https://github.com/TYPO3-Documentation/t3SphinxThemeRtd

"""
from setuptools import setup
from t3SphinxThemeRtd import __version__

setup(
    name='t3SphinxThemeRtd',
    version=__version__,
    url='https://github.com/TYPO3-Documentation/t3SphinxThemeRtd',
    license='MIT',
    author='Martin Bless',
    author_email='martin@mbless.de',
    description='Docs.TYPO3.Org theme for Sphinx, starting 2015.',
    long_description=open('README.rst').read(),
    zip_safe=False,
    packages=['t3SphinxThemeRtd'],
    package_data={'t3SphinxThemeRtd': ['*.*']},
    include_package_data=True,
    install_requires=open('requirements.txt').read().splitlines(),
    classifiers=[
        # How mature is this project? Common values are
        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        'Development Status :: 5 - Production/Stable',

        # Indicate who your project is intended for
        'Intended Audience :: End Users/Desktop',
        'Framework :: Sphinx :: Extension',

        # Pick your license as you wish (should match "license" above)
        'License :: OSI Approved :: MIT License',

        # Specify the Python versions you support here. In particular, ensure
        # that you indicate whether you support Python 2, Python 3 or both.
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
