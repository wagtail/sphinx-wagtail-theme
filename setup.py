# -*- coding: utf-8 -*-
"""`sphinx_typo3_theme` lives on `Github`_.

.. _github: https://github.com/TYPO3-Documentation/sphinx_typo3_theme

"""

import json
import os
import sys
import time
from distutils import dir_util
from setuptools import setup
from setuptools.command.build_py import build_py

PY2 = sys.version_info[0] < 3

class our_build(build_py):

    def run(self):
        """Overwrite static/theme_info.json and fill in build version data.

        """

        if not self.dry_run:
            meta = self.distribution.metadata
            build = ''
            pre_release = ''
            info = {}
            info['theme_name'] = meta.get_name()
            info['theme_version_scm'] = ver = meta.get_version()
            info['theme_version_core'] = '.'.join(ver.split('.')[0:3])
            info['theme_mtime'] = str(int(time.time()))
            L = ver.split('+', 1)
            if len(L) > 1:
                ver, build = L
            L = ver.split('-', 1)
            if len(L) > 1:
                ver, pre_release = L
            elif not pre_release:
                L = ver.split('.', 4)
                if len(L) > 3:
                    pre_release = L[3]
            info['theme_version_build'] = build
            info['theme_version_pre_release'] = pre_release
            target_dir = os.path.join(self.build_lib,
                                      'sphinx_typo3_theme/static')
            dir_util.mkpath(target_dir)
            with open(os.path.join(target_dir, 'theme_info.json'), 'w') as f2:
                json.dump(info, f2, indent=2, sort_keys=True)

        build_py.run(self)

if PY2:
    long_description = open('README.rst').read().decode('utf-8', 'replace')
else:
    long_description = open('README.rst', encoding='utf-8').read()


setup(
    name='sphinx_typo3_theme',
    url='https://github.com/TYPO3-Documentation/sphinx_typo3_theme',
    license='MIT',
    author='Martin Bless',
    author_email='martin.bless@mbless.de',
    description='Sphinx TYPO3 theme for docs.typo3.org, restarting 2020.',
    long_description=long_description,
    zip_safe=False,
    cmdclass={'build_py': our_build},
    entry_points={
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
            'static/*',
        ]
    },
    include_package_data=True,
    use_scm_version=True,
    setup_requires=[
        'setuptools_scm'
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
