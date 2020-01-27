// T3Docs

// Ensure our own namespace
if (typeof window.T3Docs === 'undefined') {
  window.T3Docs = {};
}


// Inject collapsible menu
function toggleCurrent(event) {
  event.preventDefault();
  var link = event.currentTarget.parentElement;
  var element = link.parentElement;
  var siblings = element.parentElement.parentElement.querySelectorAll('li.current');
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] !== element) {
      siblings[i].classList.remove('current');
    }
  }
  element.classList.toggle('current');
}
function makeMenuExpandable() {
  var toc = document.querySelector('.toc');
  var links = toc.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].nextSibling) {
      var expand = document.createElement('span');
      expand.classList.add('toctree-expand');
      expand.addEventListener('click', toggleCurrent, true);
      links[i].prepend(expand);
    }
  }
}
makeMenuExpandable();


// Wrap tables to make them responsive
function makeTablesResponsive() {
  var tables = document.querySelectorAll('.rst-content table.docutils');
  for (var i = 0; i < tables.length; i++) {
    wrapper = document.createElement('div');
    wrapper.classList.add('table-responsive');
    tables[i].parentNode.insertBefore(wrapper, tables[i]);
    wrapper.appendChild(tables[i]);
  }
}
makeTablesResponsive();


// Search
document.addEventListener('DOMContentLoaded', function () {
  var searchform = document.getElementById("search-form");
  var searchinput = document.getElementById("searchinput");
  if (searchform && searchinput) {
    autocomplete({
      input: searchinput,
      fetch: function (text, update) {
        if (typeof window.T3Docs.autocomplete === 'undefined') {
          window.T3Docs.autocomplete = new Array();
          Object.keys(Search._index.terms).forEach(function (item, index) {
            window.T3Docs.autocomplete[index] = { label: item };
          });
        }
        var suggestions = window.T3Docs.autocomplete.filter(function (entry) {
          return entry.label.toLowerCase().startsWith(text.toLowerCase());
        });
        update(suggestions);
      },
      minLength: 4,
      emptyMsg: 'No elements found',
      render: function (item) {
        var div = document.createElement("div");
        div.textContent = item.label;
        return div;
      },
      onSelect: function (item) {
        searchinput.value = item.label;
        searchform.submit();
      }
    });
  }
});


// Version Selector
$(document).ready(function () {
  function setVersionContent(content) {
    options = document.createElement('dl');
    options.innerHTML = content;
    versionOptions = document.getElementById("toc-version-options");
    versionOptions.innerHTML = '';
    versionOptions.appendChild(options);
  }
  versionNode = document.getElementById("toc-version");
  if (versionNode) {
    versionNode.addEventListener('click', function () {
      versionWrapper = document.getElementById("toc-version-wrapper");
      versionWrapper.classList.toggle('toc-version-wrapper-active');
      versionOptions = document.getElementById("toc-version-options");
      if (!versionOptions.dataset.ready) {
        versionsUri = 'https://docs.typo3.org/services/ajaxversions.php?url=' + encodeURI(document.URL);
        $.ajax({
          url: versionsUri,
          success: function (result) {
            setVersionContent(result);
            versionOptions = document.getElementById("toc-version-options");
            versionOptions.dataset.ready = true;
          },
          error: function () {
            setVersionContent('<p>No data available.</p>');
            versionOptions = document.getElementById("toc-version-options");
            versionOptions.dataset.ready = true;
          }
        });
      }
    });
  }
});
