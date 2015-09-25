


============
Highlighting
============

Examples taken from https://highlightjs.org/static/demo/


Navigate this page:

.. contents::
   :local:
   :depth: 3
   :backlinks: top


.. attention::

   If highlighting is missing it may be due to the fact
   that the pygments lexer has detected a syntax error.
   Code needs to be syntactically correct.


Active Scheme
=============

Here's a screenshot of the color scheme used for highlighting.
Development of that scheme started with the 'Prism higher lightness' scheme.

.. figure:: images/scheme-prism-higher-lightness.png
   :alt: colors and values of the scheme
   :target: https://github.com/chriskempson/base16-builder/blob/master/schemes/

.. comment:
   Here's a screenshot of the color scheme of a dark version
   of `Summerfruit <https://github.com/chriskempson/base16-builder/blob/master/schemes/summerfruit.yml>`__.
   Meanwhile something else is active though. The colors are not final yet.
   We can easily change colors by switching to another list of 16 colors
   as available from the `Base16 Builder <https://github.com/chriskempson/base16-builder>`__.

   .. figure:: images/scheme-summerfruit.png
      :alt: colors of the 'summerfruit' scheme
      :target: https://github.com/chriskempson/base16-builder/blob/master/schemes/summerfruit.yml

.. note::

   We could easily change colors by switching to another list of 16 colors
   as available from the `Base16 Builder <https://github.com/chriskempson/base16-builder>`__.
   As it turned out however some color tweaking usually seems necessary.


Apache
======

.. highlight:: apache

::

   # rewrite`s rules for wordpress pretty url
   LoadModule rewrite_module  modules/mod_rewrite.so
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . index.php [NC,L]

   ExpiresActive On
   ExpiresByType application/x-javascript  "access plus 1 days"

   Order Deny,Allow
   Allow from All

   <Location /maps/>
     RewriteMap map txt:map.txt
     RewriteMap lower int:tolower
     RewriteCond %{REQUEST_URI} ^/([^/.]+)\.html$ [NC]
     RewriteCond ${map:${lower:%1}|NOT_FOUND} !NOT_FOUND
     RewriteRule .? /index.php?q=${map:${lower:%1}} [NC,L]
   </Location>


Bash
====

.. highlight:: bash

::

   #!/bin/bash

   ###### BEGIN CONFIG
   ACCEPTED_HOSTS="/root/.hag_accepted.conf"
   BE_VERBOSE=false
   ###### END CONFIG

   if [ "$UID" -ne 0 ]
   then
    echo "Superuser rights is required"
    echo 'Printing the # sign'
    exit 2
   fi

   if test $# -eq 0
   then
   elif test [ $1 == 'start' ]
   else
   fi

   genApacheConf(){
    if [[ "$2" = "www" ]]
    then
     full_domain=$1
    else
     full_domain=$2.$1
    fi
    host_root="${APACHE_HOME_DIR}$1/$2/$(title)"
    echo -e "# Host $1/$2 :"
   }


CoffeeScript
============

.. highlight:: coffeescript

::

   grade = (student, period=(if b? then 7 else 6), messages={"A": "Excellent"}) ->
     if student.excellentWork
       "A+"
     else if student.okayStuff
       if student.triedHard then "B" else "B-"
     else
       "C"

::

   square = (x) -> x * x

   two = -> 2

   math =
     root:   Math.sqrt
     square: square
     cube:   (x) -> x * square x

   race = (winner, runners...) ->
     print winner, runners

::

   class Animal extends Being
     constructor: (@name) ->

     move: (meters) ->
       alert @name + " moved #{meters}m."

   hi = `function() {
     return [document.title, "Hello JavaScript"].join(": ");
   }`

   heredoc = """
   CoffeeScript subst test #{ 010 + 0xf / 0b10 + "nested string #{ /\n/ }"}
   """

::

   ###
   CoffeeScript Compiler v1.2.0
   Released under the MIT License
   ###

   OPERATOR = /// ^ (
   ?: [-=]>             # function
   ) ///




C++
===

.. highlight:: c++

::

   #include <iostream>
   #define IABS(x) ((x) < 0 ? -(x) : (x))

   int main(int argc, char *argv[]) {

     /* An annoying "Hello World" example */
     for (auto i = 0; i < 0xFFFF; i++)
       cout << "Hello, World!" << endl;

     char c = '\n';
     unordered_map <string, vector<string> > m;
     m["key"] = "\\\\"; // this is an error

     return -2e3 + 12l;
   }


C#
==

.. highlight:: csharp

::

   using System;

   #pragma warning disable 414, 3021

   public class Program
   {
       /// <summary>The entry point to the program.</summary>
       public static int Main(string[] args)
       {
           Console.WriteLine("Hello, World!");
           string s = @"This
   ""string""
   spans
   multiple
   lines!";

           dynamic x = new ExpandoObject();
           x.MyProperty = 2;

           return 0;
       }
   }

   async Task<int> AccessTheWebAsync()
   {
       // ...
       string urlContents = await getStringTask;
       return urlContents.Length;
   }

   internal static void ExceptionFilters()
   {
     try
     {
         throw new Exception();
     }
     catch (Exception e) when (e.Message == "My error") { }
   }



CSS
===

.. highlight:: css

::

   @media screen and (-webkit-min-device-pixel-ratio: 0) {
     body:first-of-type pre::after {
       content: 'highlight: ' attr(class);
     }
     body {
       background: linear-gradient(45deg, blue, red);
     }
   }

   @import url('print.css');
   @page:right {
    margin: 1cm 2cm 1.3cm 4cm;
   }

   @font-face {
     font-family: Chunkfive; src: url('Chunkfive.otf');
   }

   div.text,
   #content,
   li[lang=ru] {
     font: Tahoma, Chunkfive, sans-serif;
     background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
     width: 100%;
   }



Diff
====

.. highlight:: diff

::

   Index: languages/ini.js
   ===================================================================
   --- languages/ini.js    (revision 199)
   +++ languages/ini.js    (revision 200)
   @@ -1,8 +1,7 @@
    hljs.LANGUAGES.ini =
    {
      case_insensitive: true,
   -  defaultMode:
   -  {
   +  defaultMode: {
        contains: ['comment', 'title', 'setting'],
        illegal: '[^\\s]'
      },

   *** /path/to/original timestamp
   --- /path/to/new      timestamp
   ***************
   *** 1,3 ****
   --- 1,9 ----
   + This is an important
   + notice! It should
   + therefore be located at
   + the beginning of this
   + document!

   ! compress the size of the
   ! changes.

     It is important to spell




Http
====

.. highlight:: http

::

   POST /task?id=1 HTTP/1.1
   Host: example.org
   Content-Type: application/json; charset=utf-8
   Content-Length: 19

   {"status": "ok", "extended": true}


Ini
===

.. highlight:: ini

::

   ;Settings relating to the location and loading of the database
   [Database]
   ProfileDir=.
   ShowProfileMgr=smart
   Profile1_Name[] = "\|/_-=MegaDestoyer=-_\|/"
   DefaultProfile=True
   AutoCreate = no

   [AutoExec]
   use-prompt="prompt"
   Glob=autoexec_*.ini
   AskAboutIgnoredPlugins=0


Java
====

.. highlight:: java

::

   /**
    * @author John Smith <john.smith@example.com>
    * @version 1.0
    */
   package l2f.gameserver.model;

   import java.util.ArrayList;

   public abstract class L2Character extends L2Object {
     public static final Short ABNORMAL_EFFECT_BLEEDING = 0x0_0_0_1; // not sure

     public void moveTo(int x, int y, int z) {
       _ai = null;
       _log.warning("Should not be called");
       if (1 > 5) {
         return;
       }
     }

     /** Task of AI notification */
     @SuppressWarnings( { "nls", "unqualified-field-access", "boxing" })
     public class NotifyAITask implements Runnable {
       private final CtrlEvent _evt;

       List<String> mList = new ArrayList<String>()

       public void run() {
         try {
           getAI().notifyEvent(_evt, _evt.class, null);
         } catch (Throwable t) {
           t.printStackTrace();
         }
       }
     }
   }



Javascript
==========

.. highlight:: javascript

::

   import {x, y} as p from 'point';
   const ANSWER = 42;

   class Car extends Vehicle {
     constructor(speed, cost) {
       super(speed);

       var c = Symbol('cost');
       this[c] = cost;

       this.intro = `This is a car runs at
         ${speed}.`;
     }
   }

   for (let num of [1, 2, 3]) {
     console.log(num + 0b111110111);
   }

   function $initHighlight(block, flags) {
     try {
       if (block.className.search(/\bno\-highlight\b/) != -1)
         return processBlock(block.function, true, 0x0F) + ' class=""';
     } catch (e) {
       /* handle exception */
       var e4x =
           <div>Example
               <p>1234</p></div>;
     }
     for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
       if (checkCondition(classes[i]) === undefined)
         return /\d+[\s/]/g;
     }
     console.log(Array.every(classes, Boolean));
   }

   export  $initHighlight;



JSON
====

.. highlight:: json

::

   [
     {
       "title": "apples",
       "count": [12000, 20000],
       "description": {"text": "...", "sensitive": false}
     },
     {
       "title": "oranges",
       "count": [17500, null],
       "description": {"text": "...", "sensitive": false}
     }
   ]


Makefile
========

.. highlight:: makefile

::

   # Makefile

   BUILDDIR      = _build
   EXTRAS       ?= $(BUILDDIR)/extras

   .PHONY: main clean

   main:
      @echo "Building main facility..."
      build_main $(BUILDDIR)

   clean:
      rm -rf $(BUILDDIR)/*


Markdown
========

.. highlight:: markdown

::

   # hello world

   you can write text [with links](http://example.com) inline or [link references][1].

   * one _thing_ has *em*phasis
   * two __things__ are **bold**

   [1]: http://example.com

   ---

   hello world
   ===========

   <this_is inline="xml"></this_is>

   > markdown is so cool

       so are code segments

   1. one thing (yeah!)
   2. two thing `i can write code`, and `more` wipee!


Nginx
=====

.. highlight:: nginx

::

   user  www www;
   worker_processes  2;
   pid /var/run/nginx.pid;
   error_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;

   events {
       connections   2000;
       use kqueue | rtsig | epoll | /dev/poll | select | poll;
   }

   http {
       log_format main      '$remote_addr - $remote_user [$time_local] '
                            '"$request" $status $bytes_sent '
                            '"$http_referer" "$http_user_agent" '
                            '"$gzip_ratio"';

       send_timeout 3m;
       client_header_buffer_size 1k;

       gzip on;
       gzip_min_length 1100;

       #lingering_time 30;

       server {
           server_name   one.example.com  www.one.example.com;
           access_log   /var/log/nginx.access_log  main;

           rewrite (.*) /index.php?page=$1 break;

           location / {
               proxy_pass         http://127.0.0.1/;
               proxy_redirect     off;
               proxy_set_header   Host             $host;
               proxy_set_header   X-Real-IP        $remote_addr;
               charset            koi8-r;
           }

           location /api/ {
               fastcgi_pass 127.0.0.1:9000;
           }

           location ~* \.(jpg|jpeg|gif)$ {
               root         /spool/www;
           }
       }
   }


Objective C
===========

.. highlight:: objectivec

::

   #import <UIKit/UIKit.h>
   #import "Dependency.h"

   @protocol WorldDataSource
   @optional
   - (NSString*)worldName;
   @required
   - (BOOL)allowsToLive;
   @end

   @interface Test : NSObject <HelloDelegate, WorldDataSource> {
     NSString *_greeting;
   }

   @property (nonatomic, readonly) NSString *greeting;
   - (IBAction) show;
   @end

   @implementation Test

   @synthesize test=_test;

   + (id) test {
     return [self testWithGreeting:@"Hello, world!\nFoo bar!"];
   }

   + (id) testWithGreeting:(NSString*)greeting {
     return [[[self alloc] initWithGreeting:greeting] autorelease];
   }

   - (id) initWithGreeting:(NSString*)greeting {
     if ( (self = [super init]) ) {
       _greeting = [greeting retain];
     }
     return self;
   }

   - (void) dealloc {
     [_greeting release];
     [super dealloc];
   }

   @end


Perl
====

.. highlight:: perl

::

   # loads object
   sub load
   {
     my $flds = $c->db_load($id,@_) || do {
       Carp::carp "Can`t load (class: $c, id: $id): '$!'"; return undef
     };
     my $o = $c->_perl_new();
     $id12 = $id / 24 / 3600;
     $o->{'ID'} = $id12 + 123;
     #$o->{'SHCUT'} = $flds->{'SHCUT'};
     my $p = $o->props;
     my $vt;
     $string =~ m/^sought_text$/;
     $items = split //, 'abc';
     $string //= "bar";
     for my $key (keys %$p)
     {
       if(${$vt.'::property'}) {
         $o->{$key . '_real'} = $flds->{$key};
         tie $o->{$key}, 'CMSBuilder::Property', $o, $key;
       }
     }
     $o->save if delete $o->{'_save_after_load'};

     # GH-117
     my $g = glob("/usr/bin/*");

     return $o;
   }

   =head1 NAME
   POD till the end of file



PHP
===

.. highlight:: php

::

   <?php

   require_once 'Zend/Uri/Http.php';

   namespace Location\Web;

   interface Factory
   {
       static function _factory();
   }

   abstract class URI extends BaseURI implements Factory
   {
       abstract function test();

       public static $st1 = 1;
       const ME = "Yo";
       var $list = NULL;
       private $var;

       /**
        * Returns a URI
        *
        * @return URI
        */
       static public function _factory($stats = array(), $uri = 'http')
       {
           echo __METHOD__;
           $uri = explode(':', $uri, 0b10);
           $schemeSpecific = isset($uri[1]) ? $uri[1] : '';
           $desc = 'Multi
       line description';

           // Security check
           if (!ctype_alnum($scheme)) {
               throw new Zend_Uri_Exception('Illegal scheme');
           }

           $this->var = 0 - self::$st;
           $this->list = list(Array("1"=> 2, 2=>self::ME, 3 => \Location\Web\URI::class));

           return [
               'uri'   => $uri,
               'value' => null,
           ];
       }
   }

::

   <?php

   echo URI::ME . URI::$st1;

   __halt_compiler () ; datahere
   datahere
   datahere */
   datahere


Python
======

.. highlight:: python

::

   @requires_authorization
   def somefunc(param1='', param2=0):
       r'''A docstring'''
       if param1 > param2: # interesting
           print 'Gre\'ater'
       return (param2 - param1 + 1 + 0b10l) or None

   class SomeClass:
       pass

::

   >>> message = '''interpreter
   ... prompt'''


Ruby
====

.. highlight:: ruby

::

   class A < B; def self.create(object = User) object end end
   class Zebra; def inspect; "X#{2 + self.object_id}" end end

   module ABC::DEF
     include Comparable

     # @param test
     # @return [String] nothing
     def foo(test)
       Thread.new do |blockvar|
         ABC::DEF.reverse(:a_symbol, :'a symbol', :<=>, 'test' + ?\012)
         answer = valid?4 && valid?CONST && ?A && ?A.ord
       end.join
     end

     def [](index) self[index] end
     def ==(other) other == self end
   end

   class Car < ActiveRecord::Base
     has_many :wheels, class_name: 'Wheel', foreign_key: 'car_id'
     scope :available, -> { where(available: true) }
   end

   hash = {1 => 'one', 2 => 'two'}

   2.0.0p0 :001 > ['some']
    => ["some"]



SQL
===

.. highlight:: sql

::

   BEGIN;
   CREATE TABLE "topic" (
       -- This is the greatest table of all time
       "id" serial NOT NULL PRIMARY KEY,
       "forum_id" integer NOT NULL,
       "subject" varchar(255) NOT NULL -- Because nobody likes an empty subject
   );
   ALTER TABLE "topic" ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");

   -- Initials
   insert into "topic" ("forum_id", "subject") values (2, 'D''artagnian');

   select /* comment */ count(*) from cicero_forum;

   -- this line lacks ; at the end to allow people to be sloppy and omit it in one-liners
   /*
   but who cares?
   */
   COMMIT



Html
====

.. highlight:: html

::

   <!DOCTYPE html>
   <title>Title</title>

   <style>body {width: 500px;}</style>

   <script type="application/javascript">
     function $init() {return true;}
   </script>

   <body>
     <p checked class="title" id='title'>Title</p>
     <!-- here goes the rest of the page -->
   </body>


Xml
===

.. highlight:: xml

::

   <?xml version="1.0"?>
   <response value="ok" xml:lang="en">
     <text>Ok</text>
     <comment html_allowed="true"/>
     <ns1:description><![CDATA[
     CDATA is <not> magical.
     ]]></ns1:description>
     <a></a> <a/>
   </response>


pymentize -L
============

.. highlight:: bash

.. literalinclude:: includes/pygmentize-L.txt

