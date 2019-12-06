
=========
Textroles
=========


.. This is 'Includes.txt'. It is included at the very top of each and
   every ReST source file in THIS documentation project (= manual).

.. role:: aspect (emphasis)
.. role:: html(code)
.. role:: js(code)
.. role:: method(code)
.. role:: php(code)
.. role:: typoscript(code)

.. role:: ts(typoscript)
   :class: typoscript

.. highlight:: rst
.. default-role:: code


Übersicht
=========


================ ================================================= ============================================
role             source                                            output
================ ================================================= ============================================
(default)        ```result = (1 + x) * 32```                       `result = (1 + x) * 32`
aspect           ``:aspect:`Description:```                        :aspect:`Description:`
code             ``:code:`result = (1 + x) * 32```                 :code:`result = (1 + x) * 32`
class            ``:class:`\\TYPO3\\CMS\\Extbase```                :class:`\\TYPO3\\CMS\\Extbase`
file             ``:file:`/etc/passwd```                           :file:`/etc/passwd`
js               ``:js:`var f = function () {return 1;}```         :js:`var f = function () {return 1;}`
html             ``:html:`<a href="#">```                          :html:`<a href="#">`
method           ``:method:`__construct()```                       :method:`__construct()`
ts               ``:ts:`lib.hello.value = Hello World!```          :ts:`lib.hello.value = Hello World!`
typoscript       ``:typoscript:`lib.hello.value = Hello World!```  :typoscript:`lib.hello.value = Hello World!`
php              ``:php:`$result = $a + 23;```                     :php:`$result = $a + 23;`
================ ================================================= ============================================

`Standard Sphinx interpreted text roles
<http://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html#other-semantic-markup>`__:

================ ================================================= ============================================ ===
Role             Source                                            Output                                       Note
================ ================================================= ============================================ ===
abbr             ``:abbr:`LIFO (last-in, first-out)```             :abbr:`LIFO (last-in, first-out)`            An abbreviation. If the role content contains a parenthesized explanation, it will be treated specially: it will be shown in a tool-tip in HTML, and output only once in LaTeX.
code             ``:code:`result = (1 + x) * 32```                 :code:`result = (1 + x) * 32`
command          ``:command:`rm```                                 :command:`rm`                                The name of an OS-level command, such as rm.
dfn              ``:dfn:`something```                              :dfn:`something`                             Mark the defining instance of a term in the text. (No index entries are generated.)
file             ``:file:`/etc/passwd```                           :file:`/etc/passwd`
guilabel         ``:guilabel:`&Cancel```,                          :guilabel:`&Cancel`,                         Labels presented as part of an interactive user interface should be marked using guilabel. This includes labels from text-based interfaces such as those created using curses or other text-based libraries. Any label used in the interface should be marked with this role, including button labels, window titles, field names, menu and menu selection names, and even values in selection lists.
                  ``:guilabel:`O&k```,                              :guilabel:`O&k`,
                  ``:guilabel:`&Reset```,                           :guilabel:`&Reset`,
                  ``:guilabel:`F&&Q```                              :guilabel:`F&&Q`
kbd              ``Press :kbd:`ctrl` + :kbd:`s```                  Press :kbd:`ctrl` + :kbd:`s`                 Mark a sequence of keystrokes. What form the key sequence takes may depend on platform- or application-specific conventions. When there are no relevant conventions, the names of modifier keys should be spelled out, to improve accessibility for new users and non-native speakers. For example, an xemacs key sequence may be marked like :kbd:`C` + :kbd`x`, :kbd:`C` + :kbd:`f`, but without reference to a specific application or platform, the same sequence should be marked as :kbd:`ctrl` + :kbd:`x`, :kbd:`ctrl` + :kbd:`f`.
mailheader       ``:mailheader:`Content-Type```                    :mailheader:`Content-Type`                   The name of an RFC 822-style mail header. This markup does not imply that the header is being used in an email message, but can be used to refer to any header of the same “style.” This is also used for headers defined by the various MIME specifications. The header name should be entered in the same way it would normally be found in practice, with the camel-casing conventions being preferred where there is more than one common usage.
ref              ``:ref:`textroles```                              :ref:`textroles`                             Sphinx cross-referencing
================ ================================================= ============================================ ===


Standard Sphinx and Docutils Textroles
======================================

- This is how ``:code:`result = (1 + x) * 32``` looks like: :code:`result = (1 + x) * 32`

- "code" also is the **default** *text-role*. So ```result = (1 + x) * 32``` looks the
  same `result = (1 + x) * 32` as ``:code:`result = (1 + x) * 32```.

- This is how ``:class:`\\TYPO3\\CMS\\Extbase\\Mvc\\Controller\\ControllerInterface``` looks like: :class:`\\TYPO3\\CMS\\Extbase\\Mvc\\Controller\\ControllerInterface`

- This is how ``:file:`/etc/passwd``` looks like: :file:`/etc/passwd`




Self Defined Textroles
======================

In file :file:`Includes.txt` we usually have::

   .. This is 'Includes.txt'. It is included at the very top of each and
      every ReST source file in THIS documentation project (= manual).

   .. role:: aspect (emphasis)
   .. role:: html(code)
   .. role:: js(code)
   .. role:: method(code)
   .. role:: php(code)
   .. role:: typoscript(code)

   .. role:: ts(typoscript)
      :class: typoscript

   .. highlight:: php
   .. default-role:: code


Check the following to see if we have give those an individual styling:

- This is how ``:php:`$result = $a + 23;``` looks like: :php:`$result = $a + 23;`

- This is how ``:typoscript:`lib.hello.value = Hello World!``` looks like: :typoscript:`lib.hello.value = Hello World!`

- This is how ``:ts:`lib.hello.value = Hello World!``` looks like: :ts:`lib.hello.value = Hello World!`


align (as a styling example)
----------------------------

:aspect:`Data type:` align

:aspect:`Description:` Decides about alignment, typically in HTML-tags.

:aspect:`Values:` :ts:`left`, :ts:`center`, :ts:`right`

:aspect:`Default:` :ts:`left`


boolean (as a styling example)
------------------------------

:aspect:`Data type:`   boolean

:aspect:`Description:`
Possible values for boolean variables are `1` and `0` meaning TRUE and FALSE.
Everything else is `evaluated to one of these values by PHP`__:
Non-empty strings (except `0` [zero]) are treated as TRUE,
empty strings are evaluated to FALSE.

__ http://php.net/manual/en/language.types.boolean.php

:aspect:`Examples:`

.. code-block:: typoscript

   dummy.enable = 0   # false, preferred notation
   dummy.enable = 1   # true,  preferred notation
   dummy.enable =     # false, because the value is empty

.. code-block:: typoscript

   # are backslashes recognized?

   dummy.enable = 1
   \abc\bcd\cde

