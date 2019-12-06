// T3Docs

// Ensure our own namespace
if (typeof window.T3Docs === 'undefined') {
	window.T3Docs = {};
}

function toggleCurrent (elem) {
    var parent_li = elem.closest('li');
    parent_li.siblings('li.current').removeClass('current');
    parent_li.siblings().find('li.current').removeClass('current');
    parent_li.find('> ul li.current').removeClass('current');
    parent_li.toggleClass('current');
}

function makeTablesResponsive() {
  var tables = document.querySelectorAll('.rst-content table.docutils');
  tables.forEach(function (table) {
    wrapper = document.createElement('div');
    wrapper.classList.add("table-responsive");
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}
makeTablesResponsive();

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
