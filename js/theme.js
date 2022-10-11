// T3Docs
import "../sass/theme.scss";
import autocomplete from "autocompleter";
import "bootstrap";

// Ensure our own namespace
if (typeof window.T3Docs === "undefined") {
  window.T3Docs = {};
}

/**
 * Inject collapsible menu
 */
function makeMenuExpandable() {
  function toggleCurrent(event) {
    const expandButton = event.currentTarget;
    const element = expandButton.parentElement;
    const siblings =
      element.parentElement.parentElement.querySelectorAll("li.current");

    siblings.forEach((sibling) => {
      if (sibling !== element) {
        sibling.classList.remove("current");
      }
    });

    element.classList.toggle("current");
  }

  const toc = document.querySelector(".toc");
  const links = Array.from(toc.getElementsByTagName("a"));
  const template = document.querySelector("[data-toggle-item-template]");
  const templateChild = template.content.firstElementChild;

  links.forEach((link) => {
    if (link.nextSibling) {
      const expandButton = templateChild.cloneNode(true);
      expandButton.addEventListener("click", toggleCurrent, true);
      link.before(expandButton);
    }
  });
}

makeMenuExpandable();

// Wrap tables to make them responsive
function makeTablesResponsive() {
  var tables = document.querySelectorAll(".rst-content table.docutils");
  for (var i = 0; i < tables.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("table-responsive");
    tables[i].parentNode.insertBefore(wrapper, tables[i]);
    wrapper.appendChild(tables[i]);
  }
}

makeTablesResponsive();

document.addEventListener("DOMContentLoaded", () => {
  // Wire up light/dark mode button.
  document
    .getElementById("wagtail-theme")
    .addEventListener("click", (event) => {
      document.dispatchEvent(new CustomEvent("theme:toggle-theme-mode", event));
    });

  // Search.
  var searchform = document.getElementById("search-form");
  var searchinput = document.getElementById("searchinput");
  if (searchform && searchinput) {
    autocomplete({
      input: searchinput,
      fetch: (text, update) => {
        // Populate autocomplete suggestions from the Sphinx `Search` object.
        if (typeof window.T3Docs.autocomplete === "undefined") {
          window.T3Docs.autocomplete = [];
          // Add page titles first.
          Object.keys(Search._index.titles).forEach((item) => {
            window.T3Docs.autocomplete.push({
              label: Search._index.titles[item],
              docname: Search._index.docnames[item],
              group: "Pages",
            });
          });
          // Add autodoc/code terms second.
          Object.keys(Search._index.objects).forEach((item) => {
            Object.keys(Search._index.objects[item]).forEach((subitem) => {
              window.T3Docs.autocomplete.push({
                label: `${item}.${subitem}`,
                group: "Code reference",
              });
            });
          });
        }
        var suggestions = window.T3Docs.autocomplete.filter((entry) =>
          entry.label.toLowerCase().includes(text.toLowerCase())
        );
        update(suggestions);
      },
      minLength: 3,
      render: (item) => {
        var div = document.createElement("div");
        div.textContent = item.label;
        return div;
      },
      customize: (input, inputRect, container) => {
        // Do not force same width as input box - allow it to go wider.
        // eslint-disable-next-line no-param-reassign
        container.style.minWidth = inputRect.width + "px";
        // eslint-disable-next-line no-param-reassign
        container.style.width = "auto";
      },
      onSelect: (item) => {
        // If they selected a page, disable search form and go straight to it.
        if (item.docname !== undefined) {
          searchform.onsubmit = function onsubmit() {
            return false;
          };
          // Figure out the URL from the docname.
          // Mostly taken from Sphinx's searchtools.js
          var linkUrl;
          if (DOCUMENTATION_OPTIONS.BUILDER === "dirhtml") {
            var dirname = item.docname + "/";
            if (dirname.match(/\/index\/$/)) {
              dirname = dirname.substring(0, dirname.length - 6);
            } else if (dirname === "index/") {
              dirname = "";
            }
            linkUrl = DOCUMENTATION_OPTIONS.URL_ROOT + dirname;
          } else {
            // normal html builders
            linkUrl =
              DOCUMENTATION_OPTIONS.URL_ROOT +
              item.docname +
              DOCUMENTATION_OPTIONS.FILE_SUFFIX;
          }
          // Go to the URL.
          window.location.href = linkUrl;
        }
        // Otherwise submit the query.
        else {
          searchinput.value = item.label;
          searchform.submit();
        }
      },
    });
  }
});
