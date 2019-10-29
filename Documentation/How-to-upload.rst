# mb, 2018-07-04, 2018-07-04

# Ubuntu 14.04, Trusty Tahr

# update pip
sudo pip install --upgrade pip

# update setuptools
sudo pip install --upgrade setuptools

# update twine
sudo pip install --upgrade twine

# remove old files
rm -rf /home/marble/Repositories/github.com/TYPO3-Documentation/t3SphinxThemeRtd/dist/*

# go to project
cd /home/marble/Repositories/github.com/TYPO3-Documentation/t3SphinxThemeRtd

# build
python3 setup.py sdist bdist_wheel

# upload
twine upload dist/*

# Done.
