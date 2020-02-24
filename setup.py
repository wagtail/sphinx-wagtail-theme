# -*- coding: utf-8 -*-
"""`sphinx_typo3_theme` lives on `Github`_.

.. _github: https://github.com/TYPO3-Documentation/sphinx_typo3_theme
"""

import json
import os
import re
import setuptools_scm
import sys
import time
from distutils import dir_util
from setuptools import setup

PY3 = sys.version_info[0] >= 3
setup_requirements = ['setuptools_scm']
test_requirements = []

our_version_info_target_dir = 'sphinx_typo3_theme/static'
our_version_info_file_name = '_version_info_GENERATED'
scm_version_info_target_dir = 'sphinx_typo3_theme/static'
scm_version_write_to = os.path.join(scm_version_info_target_dir,
                                    '_version_GENERATED.py')


def scm_version_as_dict(ver):
    build = ''
    pre_release = ''
    info = {}
    info['version_scm'] = ver
    info['version_scm_core'] = '.'.join(ver.split('.')[0:3])
    info['build_mtime'] = str(int(time.time()))
    parts = ver.split('+', 1)
    if len(parts) > 1:
        ver, build = parts
    parts = ver.split('-', 1)
    if len(parts) > 1:
        ver, pre_release = parts
    elif not pre_release:
        parts = ver.split('.', 4)
        if len(parts) > 3:
            pre_release = parts[3]
    info['version_scm_build'] = build
    info['version_scm_pre_release'] = pre_release
    return info


def version_info_to_file(info, target_dir, file_name, ext):
    if ext not in ['.py', '.json']:
        sys.exit(1)
    dir_util.mkpath(target_dir)
    target_file = os.path.join(target_dir, file_name) + ext
    with open(target_file, 'w') as f2:
        if ext == '.py':
            f2.write('version_info = (\n')
        json.dump(info, f2, indent=2, sort_keys=True)
        if ext == '.py':
            f2.write('\n)\n')


info = scm_version_as_dict(setuptools_scm.get_version())
info['module_name'] = 'sphinx_typo3_theme'
target_dir = scm_version_info_target_dir
version_info_to_file(info, target_dir, our_version_info_file_name, '.py')
version_info_to_file(info, target_dir, our_version_info_file_name, '.json')

if PY3:
    with open('README.rst', encoding='utf-8') as readme_file:
        readme = readme_file.read()
    with open('HISTORY.rst', encoding='utf-8') as history_file:
        history = history_file.read()
else:
    with open('README.rst') as readme_file:
        readme = readme_file.read().decode('utf-8', 'replace')
    with open('HISTORY.rst') as history_file:
        history = history_file.read().decode('utf-8', 'replace')

readme = re.compile('^.. BADGES_START.*^.. BADGES_END', re.M | re.S).sub('', readme)

setup(
    name='sphinx_typo3_theme',
    url='https://github.com/TYPO3-Documentation/sphinx_typo3_theme',
    license='MIT license',
    author='Martin Bless',
    author_email='martin.bless@mbless.de',
    description='Sphinx TYPO3 theme for docs.typo3.org, restarting 2020.',
    long_description=readme + '\n\n' + history,
    long_description_content_type='text/x-rst',
    include_package_data=True,
    packages=['sphinx_typo3_theme'],
    setup_requires=setup_requirements,
    tests_require=test_requirements,
    use_scm_version={
        'write_to': scm_version_write_to,
        'fallback_version': '99.88.77',
    },
    zip_safe=False,
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
