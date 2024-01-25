# Sphinx Wagtail Theme Changelog

All notable changes to this project will be documented in this file.

## 6.2.0 (unreleased)

### Added

-   ...

### Changed

-   ...

### Removed

-   ...

### Fixed

-   Update `favicon` usage to be the new Sphinx variable `favicon_url` & add default favicon (Sahil Jangra)

### Security

-   ...

## [6.1.1] - 2023-07-19

### Fixed

-   Fix regression with icon fonts not loading correctly (LB (Ben) Johnston)

## [6.1.0] - 2023-07-19

### Added

-   Add Prettier formatting and checks (LB (Ben) Johnston)

### Fixed

-   Ensure names in code use monospace fonts (LB (Ben) Johnston)
-   Ensure code copy button is always visible (LB (Ben) Johnston)
-   Ensure the version picker can be closed easily on small devices (LB (Ben) Johnston)

### Removed

-   Officially drop support for Python 3.7 (LB (Ben) Johnston)

### Changed

-   Upgrade frontend build dependencies (LB (Ben) Johnston)
-   Upgrade build tooling to latest GitHub actions and Python 3.10 (LB (Ben) Johnston)

## [6.0.0] - 2023-03-09

### Added

-   Add basic styling of `autodoc` generated methods for readability (Temidayo Azeez)

### Removed

-   Remove Algolia DocSearch meta tags (Thibaud Colas)
-   Remove jQuery loading by default (LB (Ben) Johnston)

### Upgrade considerations

For projects relying on Algolia DocSearch meta tags, make sure to add back the `docsearch:version` tag in your project:

```html
<meta name="docsearch:version" content="{{ version|striptags|e }}" />
```

## [5.3.2] - 2022-10-16

### Added

-   Add search input attributes for better search compatibility with screen readers and mobile devices (LB (Ben) Johnston)
-   Add skip to main content link for keyboard only and screen reader users (LB (Ben) Johnston)

### Fixed

-   Fix `make test-import` to correctly use the `__version_full__` value (Andy Chosak)
-   Ensure version picker correctly shows above right sidebar (LB (Ben) Johnston)
-   Fix underline colour regression to ensure it is not the same as the link colour (LB (Ben) Johnston)

## [5.3.1] - 2022-10-13

### Added

-   Add ability to copy code snippets using `sphinx_copybutton` (Mohammad Areeb)

### Changed

-   Update page contents (right sidebar) to ensure horizontal scrollbars do not appear (Kartik Kankurte)

### Fixed

-   Resolve further issues with links in Safari not showing correctly, especially in dark mode (LB (Ben) Johnston)
-   Ensure that the dark mode toggle does not clear existing body classes (LB (Ben) Johnston)
-   Fix issue where dark mode theme would flash incorrectly on load (LB (Ben) Johnston)

## [5.3.0] - 2022-08-20

### Added

-   Add Dark mode 🧛 - you can now feel more at home with the Wagtail docs if you choose to in your device preferences or manually (Vince Salvino)
-   Add layout scss to fix some global style issues (LB (Ben) Johnston)
-   Add a consistent and high contrast focus outline to focusable (tabbable) elements (LB (Ben) Johnston, Vince Salvino)

### Changed

-   Use variable for the `max-width` of the version picker in styles (LB (Ben) Johnston)
-   Sidebar will have a right border (when on the side) and a maximum width on large breakpoints (LB (Ben) Johnston)
-   Set language to `en` for this project's documentation (Vince Salvino)
-   Docs buttons such as View source, Edit source, and Dark mode will now show on small devices (Vince Salvino, LB (Ben) Johnston)
-   Ensure the table of contents expand button can be focused with a keyboard (LB (Ben) Johnston)

### Removed

-   Source Code Pro is no longer included in this theme, instead the Wagtail system font stack is used (Vince Salvino)

### Fixed

-   Fix gap after content within admonitions, avoid styling every last element inside, only the container (LB (Ben) Johnston)
-   Resolve issues with sidebar container and overflow scroll, add padding so that visible scrollbars (Windows) does not cut into content (LB (Ben) Johnston)
-   Avoid using coded styles when bootstrap utility classes are suitable in the sidebar & search box (LB (Ben) Johnston)
-   Fix documentation syntax error in example `conf.py` (Vince Salvino)
-   Avoid hard-coding the `/` for the root path to the logo as documentation may not be served at the root path (Vince Salvino)
-   Fix focus outline on search box so (Vince Salvino)

## [5.2.0] - 2022-08-17

### Added

-   Page table of contents made sticky and scrollable ([#167](https://github.com/wagtail/sphinx_wagtail_theme/pull/167))
-   Stylelint checks are now functional and included in CI, these now extend `@wagtail/stylelint-config-wagtail` ([#173](https://github.com/wagtail/sphinx_wagtail_theme/pull/173))
-   Adopt eslint with shared Wagtail project rules ([#180](https://github.com/wagtail/sphinx_wagtail_theme/pull/180))
-   Add build instructions for Windows ([#157](https://github.com/wagtail/sphinx_wagtail_theme/pull/157))

### Changed

-   Distinguished the caption text visually from the body text ([#166](https://github.com/wagtail/sphinx_wagtail_theme/pull/166))
-   Clean up frontend dependences ([#168](https://github.com/wagtail/sphinx_wagtail_theme/pull/168))
-   `make install-for-dev` has been changed to `make install-for-development` and explicit development requirements have been added ([#162](https://github.com/wagtail/sphinx_wagtail_theme/pull/162))

### Fixed

-   De-emphasize page table of contents ([#159](https://github.com/wagtail/sphinx_wagtail_theme/pull/159))
-   Fix links not styled properly in Safari ([#160](https://github.com/wagtail/sphinx_wagtail_theme/pull/160))
-   Fix issue where RTD build would not work since the adoption of MYst Parser ([#162](https://github.com/wagtail/sphinx_wagtail_theme/pull/162))
-   Fix scrolling issues on shorter viewports with a long table of contents ([#178](https://github.com/wagtail/sphinx_wagtail_theme/pull/178))

## [5.1.1] - 2022-04-07

### Fixed

-   Fix code highlight, exclude pygments css from layout ([#154](https://github.com/wagtail/sphinx_wagtail_theme/pull/154))

## [5.1.0] - 2022-04-07

See new [customising docs](https://sphinx-wagtail-theme.readthedocs.io/en/latest/customizing.html) for info on how to change fonts, sidebars, etc. in this version.

### Added

-   Massively improved autocomplete ([#123](https://github.com/wagtail/sphinx_wagtail_theme/pull/123))
-   Make navigation sticky ([#110](https://github.com/wagtail/sphinx_wagtail_theme/pull/110))
-   Use language specified by Sphinx in HTML tag ([#116](https://github.com/wagtail/sphinx_wagtail_theme/pull/116))
-   Add customising documentation ([#118](https://github.com/wagtail/sphinx_wagtail_theme/pull/118))
-   Style version added/changed/deprecated directives ([#119](https://github.com/wagtail/sphinx_wagtail_theme/pull/119))
-   Search autocomplete improvements ([#123](https://github.com/wagtail/sphinx_wagtail_theme/pull/123))
-   Allow customising the sidebar ([#124](https://github.com/wagtail/sphinx_wagtail_theme/pull/124))
-   Use sphinx-provided JavaScript files (documentation_options.js) ([#114](https://github.com/wagtail/sphinx_wagtail_theme/pull/114))
    -   **NOTE** You should set `language = "en"` in your project's `conf.py`

### Changed

-   Ignore pyenv python-version file ([#146](https://github.com/wagtail/sphinx_wagtail_theme/pull/146))
-   Clean-up make file ([#150](https://github.com/wagtail/sphinx_wagtail_theme/pull/150))
-   Update development instructions ([#149](https://github.com/wagtail/sphinx_wagtail_theme/pull/149))
-   Update node version usage from v14 to v16 ([#132](https://github.com/wagtail/sphinx_wagtail_theme/pull/132))
-   Replace "Apercu Pro" font with "Source Sans" ([#122](https://github.com/wagtail/sphinx_wagtail_theme/pull/122))
-   Update colours for success/info/warning admonitions to match reference designs (Paarth Agarwal [#137](https://github.com/wagtail/sphinx_wagtail_theme/pull/137))
-   Migrate from `recommonmark` to [`MyST Parser`](https://myst-parser.readthedocs.io/) for markdown usage in documentation ([#142](https://github.com/wagtail/sphinx_wagtail_theme/pull/142))

### Fixed

-   Fix link states ([#152](https://github.com/wagtail/sphinx_wagtail_theme/pull/152))
-   Remove unused Typo3 version selector code ([#123](https://github.com/wagtail/sphinx_wagtail_theme/pull/123))
-   Don't load webfonts.css since it's been removed and 404s ([#111](https://github.com/wagtail/sphinx_wagtail_theme/pull/111))
-   Remove invalidly named file path preventing git clone on Windows ([#112](https://github.com/wagtail/sphinx_wagtail_theme/pull/112))
-   Fix sphinx-based search ([#113](https://github.com/wagtail/sphinx_wagtail_theme/pull/113))
-   Use `<main>` tag for body content ([#117](https://github.com/wagtail/sphinx_wagtail_theme/pull/117))
-   Fix copyright and date in footer ([#118](https://github.com/wagtail/sphinx_wagtail_theme/pull/118))
-   Increase contrast of admonitions to WCAG AAA, inline code to AA ([#121](https://github.com/wagtail/sphinx_wagtail_theme/pull/121))
-   Fix appearance of links within code blocks ([#127](https://github.com/wagtail/sphinx_wagtail_theme/pull/127))
-   Fix issue where core styles for content such as autodoc were not being used (Paarth Agarwal [#136](https://github.com/wagtail/sphinx_wagtail_theme/pull/136))
-   Fix build issue due to jinja2 compatibility ([#142](https://github.com/wagtail/sphinx_wagtail_theme/pull/142))
-   Fix issue where Sphinx default pygments styles were being imported but not required ([#151](https://github.com/wagtail/sphinx_wagtail_theme/pull/151))

## [5.0.4] - 2021-06-28

-   Fix some simple accessibility issues (#109). Fixes #103
-   Trial translated documentation setup

## [5.0.3] - 2021-04-19

-   Only wrap search scripts with search block

## [5.0.2] - 2021-04-19

-   Do not render html structure if header/footer link var is empty (#101)
-   Wrap search scripts in search block (#102)

## [5.0.1] - 2021-04-19

-   Hide (confusing) theme version from footer

## [5.0.0] - 2021-04-18

-   De-emphasize page TOC (#98)
-   Add hidetoc, in the rst, on the first line set `:hidetoc: 1` (#97)
-   Take the full width of the view port (#94)

## [5.0.0-a6] - 2021-04-18

-   Position search
-   Add footer block

## [5.0.0-a5] - 2021-04-16

-   Fix version picker (#90)
-   Revert "Finish deleting Read the Docs integration. Fix #54"
-   Remove unused theme options
-   Simplify Github url, always edit main
-   Pin Sphinx version to match Read the Docs (#93)

## [5.0.0-a4] - 2021-04-14

-   Remove http-server from devDependencies
-   Remove bootstrap.bundle.min.js from layout
-   Makefile: add missing requirements.txt install step
-   Fix: Autodoc white text
-   Explicitly define col widths
-   Fix: Link style
-   Fix: Page toc levels
-   Pin docutils to 0.16 because of recommonmark issue
-   Revert "Remove obsolete pages"
-   Remove obsolete pages
-   Fix Django code snippet declaration
-   Extend python and js code block examples
-   Add reStructuredText page from Wagtail Docs
-   Add progressive disclosure example page
-   Add code only heading to examples
-   Move example to end of index
-   Add version change metadata example page
-   Add example pages
-   Add additional configuration for markdown support
-   Add other typical venv folder names to gitignore

## [5.0.0-a3] - 2021-03-28

-   Remove unused SCSS components
-   Add vertical space around content header hr
-   Add search bar style as per design
-   Only show source buttons on large displays
-   Simplify pagination bootstrap use
-   Light github button
-   Update breadcumb sep and start
-   Implement breadcrumbs with bootstrap
-   Use semantic elements for body content
-   Split breadcrumbs and source buttons
-   Remove hidden pager, it never rendered anything.
-   Simplify sidebar structure
-   Add toc class but remove unneeded styles
-   Remove toctree title
-   Simplify TOC ordering
-   Fix TOC positioning for pages without TOC
-   Simplify toc positioning with bootstrap
-   Use root as logo link
-   Ensure responsive images
-   Simplify header and footer structure
-   Move sidebar toggle to header
-   Import bootstrap in theme.js
-   Remove pageheader block definition
-   Hide header links below large screens
-   Implement footer links like header links
-   Simplify header link implementation
-   Remove unused variables
-   Fix use of theme options
-   Remove typo3 specific variables
-   Use Bootstrap for header, main and footer
-   Remove page content from main nav
-   Change theme name in footer
-   Remove typo3 analytics scripts
-   Remove commented elements
-   Remove theme title from sidebar nav
-   Remove typo3 universe bar
-   Update screenshot
-   Document node version 14
-   Move release process to readme
-   Netlify for build previews
-   Switch from yarn to npm (#58)
-   Fix CI urls

## [5.0.0-a2] - 2021-03-17

-   Include `/static/dist`

## [5.0.0-a1] - 2021-03-17

-   Clean up and simplify CI build
-   Add Netlify build configuration
-   Use sass package instead of node-sass
-   Set webpack mode as cli option
-   Use Node.js 14
-   Use webpack instead of grunt
-   Clean up layout

## [5.0.0-a0] - 2021-03-10

-   Rename Sphinx Typo3 Theme to Sphinx Wagtail Theme
-   Add initial Wagtail styling
-   Initial setup of Wagtail theme CI and release

## [4.4.3] - 2021-01-20

-   37af740 Raise full width break point from 1800px to 2049px

## [4.4.2] - 2021-01-06

-   8b1f5c3 Style index page genindex.html (issue #99)

## [4.4.1] - 2020-12-10

-   5fb7837 Fix css for images and figures

## [4.4.0] - 2020-12-07

-   daf6211 [FEATURE] Provide for Sphinx extension sphinx-tabs

## [4.3.1] - 2020-12-01

-   e67d144 Use max-width:100% for PlantUML objects

## [4.3.0] - 2020-11-30

-   5ac9115 v4.3.0
-   d605a2c Update .compact-list, only for screens >=992px
-   e886449 Bring back .compact-list, remove Figure:
-   f56aeea Fix indent of nested .line-block
-   604eee1 Issue #14: Tweak $box-shadow-sm
-   7d52ca8 Enable sourceMap in Gruntfile.js
-   53012f5 Update yarn.lock - apply security updates reported by GitHub
-   0ffa575 Update flake8 exclude - don't check `*GENERATED*` files
-   1225ec1 Add styles .centered, .rubric - add css classes
-   14eea54 Update style p.attribution - style attribution in blockquotes
-   56bbb03 Update style .versionmodified - make 'versionadded' stick out
-   0610ae2 [FEATURE] Issue #80: Breakpoint to allow width:99999px - use total
    width for screens >= 1800px

## [4.2.1] - 2020-05-20

-   Add PAGE CONTENTS above the menu of intra-page links

## [4.2.0] - 2020-05-08

Overview

1. If used with Sphinx extension `sphinxcontrib-gitloginfo <https://github.com/TYPO3-Documentation/sphinxcontrib-gitloginfo/>`\_ meta tags
   with the 'last modified' date may now be added to the page html head section.
   A 'Last updated' line can be shown in the footer with a link to the latest
   commit.

2. For search result pages a link will appear to deselect hightlighting of
   search text hits.

3. The intra page menu is now appended to the left menu column of the page.

4. The logo is now defineable in the theme configuration file `theme.conf`.

Some commits:

-   d5cc051 [BUGFIX] Supply missing options in theme.conf to remove warnings
    about non existing theme options
-   a69e91b [FEATURE] Always show table of contents {{ toc }} to get back
    "the third level" in the page menu
-   e5f8b9c [FEATURE] Add date_last_modified and commit_url to footer
-   14c3f6a Update whitespace control in html templates to further beautify the
    indentation of generated html
-   4da72be [FEATURE] Add last_updated_isoformat to meta data in html head
-   e1061a2 [TASK] Update docsearch meta tags
-   a6605e0 [FEATURE] Make logo defineable in theme.conf
-   9b25042, 54d580e Improve page template "layout.html"
-   cfb7081 Update documentation
-   5f8cd43 Upgrade Javascript packages
-   cbeac0c Have link "Hide Search Matches" appear on a page with the search
    result to turn off the highlighting of the hits of the searched text

## [4.1.3] - 2020-02-25

-   Update documentation
-   Have {{ theme_version }} in page context

## [4.1.2] - 2020-02-25

-   Fix workflow, adapt docs

## [4.1.1] - 2020-02-24

-   a907b05 Update documentation
-   f6e0b22 Update python_requires in setup.py
-   94e0f8f Make installation via entry_points work
-   4282600 Simplify conf.py in workflow
-   a06ddbb Upload to CDN with as well

## [4.1.0] - 2020-02-24

"Let's start" release

-   Elaborate workflow
-   Add Makefile
-   Add Python unit test
-   Add docs
-   Deploy docs to Github pages
-   Tune setup.py and 'version from repo' procedure

## [0.1.0] - 2020-01-01

-   Starting development.

<!-- TEMPLATE - Copy for new releases

## [x.y.z] - YYYY-MM-DD

### Added

-   ...

### Changed

-   ...

### Removed

-   ...

### Fixed

-   ...

### Security

-   ...

-->
