#! /bin/bash

# echo $1
# echo $2

sphinx-build $1 $2

if ((1)); then
	mv $2/_static $2/__static
	ln -s $(pwd)/t3SphinxThemeRtd/static $2/_static
fi
