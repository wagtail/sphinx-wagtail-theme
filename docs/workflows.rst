==========================
Workflows
==========================

About workflows (GitHub Actions).

Continous Integration (CI) workflow
===================================

`.github/workflows/CI.yml`

The "Continous Integration" (CI) workflow does all the work. It is triggered by
these events:

*  push
*  pull_request
*  publishing a release
*  repository_dispatch.

A repository_dispatch event can be created like this::

   curl -X POST \
      https://api.github.com/repos/typo3-documentation/sphinx_typo3_theme/dispatches \
      -H 'Accept: application/vnd.github.everest-preview+json' \
      -H 'Authorization: token 08abthis9is6notdafreal3token02030a75675e' \
      --data '{"event_type": "CI.yml-webhook"}

You need to get your personal access token from Github and insert it in the
command above. When requesting the token you only need to apply for "repo
access".

.. important::

   Make sure to only merge pull-requests when job **passed-all-tests**
   succeeds.


Jobs in the workflow
--------------------

some-context-vars
   A quick display of some context variables.

on-pull_request-job
   Identifies a pull_request event and shows how to filter for that.

on-push-job
   Identifies a push event and shows how to filter for that.

on-release-job
   Identifies a release event and shows how to filter for that.

on-repository_dispatch-job:
   Identifies a pull_request and shows how to filter for that.

yarn-frontend
   Makes sure the frontend run succeeds.

lint
   Does Python code checking.

build
   Needs [yarn-frontend, lint]. Creates the Python distribution package
   of the Sphinx extension and provides it as artifact. All further steps
   are done with that package. It has the form of a Python wheel package.

make-docs
   Needs: [build]. Render the documentation and provide as artifact.

make-test
   Needs: [build]. Runs the unit tests of the package.

sphinx-quickstart
   Needs [build].
   Garantees that the theme package is importable and can be used for Sphinx
   rendering. Artifacts are produced.

passed-all-tests
   Needs: [make-docs, make-test, sphinx-quickstart].

   This is a sentinal job to indicate whether the build is good for usage or
   not. A pull-request may only be merged if this job succeeds.

assert-good-release-version
   Needs: [passed-all-tests]. Only run for release events.

   This job verifies that we have a "pure and clean" release number in the form
   of '1.2.3' (three numbers).

upload-to-pypi
   Needs [assert-good-release-version]. Only run for release events.

   Upload a new release to PyPi, the Python packet index.

upload-to-cdn
   Needs: [upload-to-pypi].

   After uploading to PyPi the asset folder 'static' is uploaded to the content
   delivery network.

use-docker-container
   Needs: [passed-all-tests].

   This is a convenience task that uses the docker container with the theme
   and provides the rendering of some TYPO3 manuals for download.


Uploads to the CDN
==================

The static theme data of each release on PyPi will automatically be uploaded to
the TYPO3 content delivery network (CDN). The general url is::

   https://typo3.azureedge.net/typo3documentation/theme/<NAME>/<BRANCH|MAJOR.MINOR.PATCH>/css/theme.css

For example, to access `4.3.2` data, write::

   https://typo3.azureedge.net/typo3documentation/theme/sphinx_typo3_theme/4.3.2/css/theme.css


To access the latest version of branch 'master' write::

   https://typo3.azureedge.net/typo3documentation/theme/sphinx_typo3_theme/master/css/theme.css

