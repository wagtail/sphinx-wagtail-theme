Customizing
===========

The following code snippets can be set in ``conf.py`` to customize the
appearance of your docs.

Project Name & Logo
-------------------

Project name should be set both in Sphinx and in the theme. Logo options are set
for the theme.

.. code-block:: python

   # This is used by Sphinx in many places, such as page title tags.
   project = "My Project"

   # These are options specifically for the Wagtail Theme.
   html_theme_options = dict(
       project_name = "My Project",
       logo = "img/wagtail-logo-circle.svg",
       logo_alt = "Wagtail",
       logo_height = 59,
       logo_url = "/",
       logo_width = 45,
   )

GitHub Link
-----------

The GitHub link is used for generating an "Edit on GitHub" button on each page.
As such it should point to your docs folder in your default branch.

.. code-block:: python

   html_theme_options = dict(
       github_url = "https://github.com/wagtail/sphinx_wagtail_theme/blob/main/docs/"
   )

Header & Footer Links
---------------------

These will be shown in the bars at the top and bottom of the page.

Note that each setting is one long string, with entries separated by commas
within the string. Each comma-separated entry uses a pipe ``|`` character to
separate page title (left of pipe) from URL (right of pipe).

.. code-block:: python

   html_theme_options = dict(
       header_links = "Top 1|http://example.com/one, Top 2|http://example.com/two",
       footer_links = ",".join([
           "About Us|http://example.com/",
           "Contact|http://example.com/contact",
           "Legal|http://example.com/dev/null",
       ]),
    )

Show Copyright in Footer
------------------------

This is a built-in Sphinx feature which will show the copyright notice in the
footer of your docs.

.. code-block:: python

   copyright = "2021, My Company Inc."
   html_show_copyright = True

Show Date Last Updated
----------------------

This is a built-in Sphinx feature which will show the date the docs were last
rendered in the footer of your docs. Format strings for Python's
`strftime() <https://docs.python.org/3/library/time.html#time.strftime>`_
are valid here. To disable, set to ``None``

.. code-block:: python

   html_last_updated_fmt = "%b %d, %Y"

Custom Fonts & CSS
------------------

The theme ships with Adobe's Source Sans and Source Code Pro fonts.
You can change these, or any other style of the docs, with a custom CSS file.

Enable custom static files in ``conf.py``:

.. code-block:: python

   # These folders are copied to the documentation's HTML output.
   html_static_path = ["_static"]

   # These paths are either relative to html_static_path
   # or fully qualified paths (eg. https://...).
   html_css_files = ["custom.css"]

Then in your ``_static/custom.css`` file, import a font and override the
relevant rules:

.. code-block:: css

   /* Import from Google Fonts, a CDN, or files in your _static folder.
      This Google Fonts import provides its own `@font-face` CSS;
      if providing your own font files, you'll also need to
      provide your own `@font-face` code. */
   @import url("https://fonts.googleapis.com/css2?family=Roboto");

   /* Main font used throughout the docs. */
   body {
     font-family: "Roboto", sans-serif;
   }

   /* Code snippets. */
   pre, code, kbd, samp {
     font-family: "Courier New", monospace;
   }

Customize the Sidebar
---------------------

To change the contents of the sidebar, create a custom HTML template and specify
it in ``conf.py``. For example, let's add a link to sponsor your project below
the table of contents tree:

.. code-block:: python

   # Add any relative paths that contain templates.
   templates_path = ["_templates"]

   # Custom sidebar templates, must be a dictionary that maps document names
   # to template names. "**" will apply the templates to all pages.
   # The theme default is just searchbox and globaltoc.
   html_sidebars = {"**": [
       "searchbox.html",
       "globaltoc.html",
       "custom.html",    # Your template here
   ]}

Then in ``_templates/custom.html``:

.. code-block:: html

   <p>
     Sponsor my project!
     <a href="http://example.com">Here's the link</a>
   </p>

Read more about `customizing the sidebar in Sphinx <https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_sidebars>`_
