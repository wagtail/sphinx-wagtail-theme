=======
History
=======


4.4.2 (2021-06-01)
==================

*  8b1f5c3 Style index page genindex.html (issue #99)


4.4.1 (2020-12-10)
==================

*  5fb7837 Fix css for images and figures


4.4.0 (2020-12-07)
==================

*  daf6211 [FEATURE] Provide for Sphinx extension sphinx-tabs


4.3.1 (2020-12-01)
==================

*  e67d144 Use max-width:100% for PlantUML objects


4.3.0 (2020-11-30)
==================

*  5ac9115 v4.3.0
*  d605a2c Update .compact-list, only for screens >=992px
*  e886449 Bring back .compact-list, remove Figure:
*  f56aeea Fix indent of nested .line-block
*  604eee1 Issue #14: Tweak $box-shadow-sm
*  7d52ca8 Enable sourceMap in Gruntfile.js
*  53012f5 Update yarn.lock - apply security updates reported by GitHub
*  0ffa575 Update flake8 exclude - don't check ``*GENERATED*`` files
*  1225ec1 Add styles .centered, .rubric - add css classes
*  14eea54 Update style p.attribution - style attribution in blockquotes
*  56bbb03 Update style .versionmodified - make 'versionadded' stick out
*  0610ae2 [FEATURE] Issue #80: Breakpoint to allow width:99999px - use total
   width for screens >= 1800px


4.2.1 (2020-05-20)
==================

*  Add PAGE CONTENTS above the menu of intra-page links


4.2.0 (2020-05-08)
==================

Overview

#. If used with Sphinx extension `sphinxcontrib-gitloginfo
   <https://github.com/TYPO3-Documentation/sphinxcontrib-gitloginfo/>`_ meta tags
   with the 'last modified' date may now be added to the page html head section.
   A 'Last updated' line can be shown in the footer with a link to the latest
   commit.

#. For search result pages a link will appear to deselect hightlighting of
   search text hits.

#. The intra page menu is now appended to the left menu column of the page.

#. The logo is now defineable in the theme configuration file `theme.conf`.

Some commits:

*  d5cc051 [BUGFIX] Supply missing options in theme.conf to remove warnings
   about non existing theme options
*  a69e91b [FEATURE] Always show table of contents {{ toc }} to get back
   "the third level" in the page menu
*  e5f8b9c [FEATURE] Add date_last_modified and commit_url to footer
*  14c3f6a Update whitespace control in html templates to further beautify the
   indentation of generated html
*  4da72be [FEATURE] Add last_updated_isoformat to meta data in html head
*  e1061a2 [TASK] Update docsearch meta tags
*  a6605e0 [FEATURE] Make logo defineable in theme.conf
*  9b25042, 54d580e Improve page template "layout.html"
*  cfb7081 Update documentation
*  5f8cd43 Upgrade Javascript packages
*  cbeac0c Have link "Hide Search Matches" appear on a page with the search
   result to turn off the highlighting of the hits of the searched text


4.1.3 (2020-02-25)
==================

*  Update documentation
*  Have {{ theme_version }} in page context


4.1.2 (2020-02-25)
==================

*  Fix workflow, adapt docs


4.1.1 (2020-02-24)
==================

*  a907b05 Update documentation
*  f6e0b22 Update python_requires in setup.py
*  94e0f8f Make installation via entry_points work
*  4282600 Simplify conf.py in workflow
*  a06ddbb Upload to CDN with as well


4.1.0 (2020-02-24)
==================

"Let's start" release

*  Elaborate workflow
*  Add Makefile
*  Add Python unit test
*  Add docs
*  Deploy docs to Github pages
*  Tune setup.py and 'version from repo' procedure


0.1.0 (2020-01-01)
==================

*  Starting development.
