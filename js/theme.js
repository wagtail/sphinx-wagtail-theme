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
document.addEventListener('DOMContentLoaded', function() {
  autocomplete({
    input: document.getElementById("searchinput"),
    fetch: function(text, update) {
      if (typeof window.T3Docs.autocomplete === 'undefined') {
        window.T3Docs.autocomplete = new Array();
        Object.keys(Search._index.terms).forEach(function (item, index) {
          window.T3Docs.autocomplete[index] = { label: item };
        });
      }
      var suggestions = window.T3Docs.autocomplete.filter(function(entry){
        return entry.label.toLowerCase().startsWith(text.toLowerCase());
      });
      update(suggestions);
    },
    minLength: 4,
    emptyMsg: 'No elements found',
    render: function(item) {
      var div = document.createElement("div");
      div.textContent = item.label;
      return div;
    },
    onSelect: function(item) {
      document.getElementById("searchinput").value = item.label;
      document.getElementById("search-form").submit();
    }
  });
});


$(document).ready(function() {

    var fillInRelatedLinks = function () {
        $("#relatedLinksFaSpan").attr('class', 'fa fa-spinner fa-spin');
        $('#ajaxversions').load(
            'https://docs.typo3.org/services/ajaxversions.php?url=' + encodeURI(document.URL),
            false,
            function (responseText, textStatus, jqXHR) {
                $("#relatedLinksFaSpan").attr('class', 'fa fa-book');
                window.T3Docs['fillInRelatedLinks'] = {'dest':'ajaxversions.php', 'responseText':responseText, 'textStatus':textStatus};
            }
        );
        $('#ajaxdownloads').load(
            'https://docs.typo3.org/services/ajaxdownloads.php?url=' + encodeURI(document.URL),
            false,
            function (responseText, textStatus, jqXHR) {
                window.T3Docs['fillInRelatedLinks'] = {'dest':'ajaxdownloads.php', 'responseText':responseText, 'textStatus':textStatus};
            }
        );
    }

    // Shift nav in mobile when clicking the menu.
    $(document).on('click', "[data-toggle='wy-nav-top']", function() {
        $("[data-toggle='wy-nav-shift']").toggleClass("shift");
        $("[data-toggle='rst-versions']").toggleClass("shift");
    });
    // Nav menu link click operations
    $(document).on('click', ".wy-menu-vertical .current ul li a", function() {
        var target = $(this);
        // Close menu when you click a link.
        $("[data-toggle='wy-nav-shift']").removeClass("shift");
        $("[data-toggle='rst-versions']").toggleClass("shift");
        // Handle dynamic display of l3 and l4 nav lists
        toggleCurrent(target);
        if (typeof(window.SphinxRtdTheme) != 'undefined') {
            window.SphinxRtdTheme.StickyNav.hashChange();
        }
    });
    $(document).on('click', "[data-toggle='rst-current-version']", function() {
        if (typeof window.T3Docs['fillInRelatedLinks'] === 'undefined') {
            fillInRelatedLinks();
        }
        $("[data-toggle='rst-versions']").toggleClass("shift-up");
    });
});
