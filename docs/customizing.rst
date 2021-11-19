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
       logo = "img/wagtail-logo-new.svg",
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
