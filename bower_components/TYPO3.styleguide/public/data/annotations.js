var comments = {
"comments" : [
	{
		"el": "header[role=banner]",
		"title" : "Masthead",
		"comment": "The main header of the site doesn't take up too much screen real estate in order to keep the focus on the core content. It's using a linear CSS gradient instead of a background image to give greater design flexibility and reduce HTTP requests."
	},
	{
		"el": ".logo",
		"title" : "Logo",
		"comment": "The logo image is an SVG file, which ensures that the logo displays crisply even on high resolution displays. A PNG fallback is provided for browsers that don't support SVG images.</p><p>Further reading: <a href=\"http://bradfrostweb.com/blog/mobile/hi-res-optimization/\">Optimizing Web Experiences for High Resolution Screens</a>.</p><p>Please, only use the shown color variations of the TYPO3 Logo.</p>"
	},
	{
		"el": ".logodonts",
		"title" : "Logo Dont's",
		"comment": "Don't use these kind of color variations of the TYPO3 Logo. If you fell unsure about the color variantions you want to use for your website, please contact the TYPO3 Design Team."
	},
	{
		"el": "#nav",
		"title" : "Navigation",
		"comment": "<p>Navigation for adaptive web experiences can be tricky. Top navigations are typical on desktop sites, but mobile screen sizes don't give us the luxury of space. We're dealing with this situation by creating a simple menu anchor that toggles the main navigation on small screens. This is just one method. <a href=\"http://bagcheck.com/\">Bagcheck</a> and <a href=\"http://contentsmagazine.com/\">Contents Magazine</a> add an anchor in the header that jumps users to the navigation which is placed in the footer. This solution works well because it doesn't require any Javascript in order to work. Other methods exist too. For example, <a href=\"http://m.espn.com\">ESPN's mobile navigation</a> overlays the main content of the page.</p><p>The nav is only hidden when a certain level of javascript is supported in order to ensure that users with little/poor javascript support can still access the navigation. Once the screen size is large enough to accommodate the nav, we show the main navigation links and hide the menu anchor.<p><p>See also: <a href=\"http://bradfrostweb.com/blog/web/responsive-nav-patterns/\">Responsive Navigation Patterns</a></p>"
	},
	{
		"el": ".search-form",
		"title" : "Search",
		"comment": "<p>Search is an incredibly important priority, especially for mobile. It is a great idea to give users the ability to jump directly to what they are looking for without forcing them to wade through your site's navigation. Check out the <a href=\"http://burton.com\">Burton</a> and <a href=\"http://yelp.com\">Yelp</a> mobile sites for great examples of experiences that prioritize search.</p><p>We're also using the <a href=\"http://dev.w3.org/html5/markup/input.search.html\">HTML5 search input type</a>, which is great for mobile devices that can <a href=\"http://diveintohtml5.info/forms.html\">bring up the appropriate virtual keyboard</a> for many smartphones. And like the main header navigation, we're hiding the search form on small screens to save space. Clicking the search anchor toggles the form. </p>"
	},
	{
		"el": ".article-header h1",
		"title" : "Article Header",
		"comment": "<p>The article header should be no more than 140 characters. </p>"
	},
	{
		"el": ".block-hero",
		"title" : "Hero",
		"comment": "<p>The hero area highlights one major story using a large image and a captivating headline.</p>"
	},
    {
   		"el": ".typo3-colors",
   		"title" : "TYPO3 Colors",
   		"comment": "<p>Supporting colors should only be used for web projects. For print please keep the key colors, black, white and grey.</p>"
   	},
    {
   		"el": ".message-colors",
   		"title" : "Message Colors",
   		"comment": "<p>Message colors should only be used for information purposes - e.g. as flash messages.</p>"
   	},
    {
   		"el": ".fonts",
   		"title" : "Fonts",
   		"comment": "<p>All existing fonts can be downloaded here as a complete package. The package contains the primary font which should be used for continues text, the share font for headings, a monospaced font for code, snippets and preformatted text and a iconset.</p>"
   	},
    {
   		"el": ".headings",
   		"title" : "Headings",
   		"comment": "<p>Headings from h1 to h5 should be used sematically correct. The bold version of a heading should only be used once in a document. Chapter headings could be used more often. </p>"
   	},
    {
   		"el": ".mark-typo3",
   		"title" : "TYPO3 Marker",
   		"comment": "<p>The TYPO3 marker should only highlight very important parts of your paragraphs and should not be overused.</p>"
   	},
    {
   		"el": "time",
   		"title" : "Date and Time",
   		"comment": "<p>Please respect the look & feel of date and time informations. Feel free to use the date and time format according to your local needs.</p>"
   	},
    {
   		"el": ".pre",
   		"title" : "Preformated Text",
   		"comment": "<p>For preformated text, please use the 'Source Sans Code' font.</p>"
   	},
    {
   		"el": ".unordered",
   		"title" : "Unordered List",
   		"comment": "<p>An unordered list should contain a list-style-icon in TYPO3 orange. Please notice that this icon is for nested elements slightly smaller.</p>"
   	},
    {
   		"el": ".ordered",
   		"title" : "Ordered List",
   		"comment": "<p>An ordered list should contain a decimal numbers. Please respect the leading zero for single character digits. For nested elements, please use lowercase alphabetic characters.</p>"
   	},
    {
   		"el": ".avatar",
   		"title" : "Avatar",
   		"comment": "<p>Using a picture of yourself as an avatar is really appreciated at official TYPO3 websites. Please respect the aspect ratio and portrait as image orientation. Squared or landscape images tend to give an unwanted border if the avatar is used with a background color.</p>"
   	},
    {
   		"el": ".icons",
   		"title" : "Icons",
   		"comment": "<p>If you need additional icons for your website, please use 'Font-Awesome' as font. If you decide to use the negative version of an icon, please make sure that it is squared and the icon itself is centered.</p>"
   	},
    {
   		"el": ".favicon",
   		"title" : "Favicons",
   		"comment": "<p>Feel free to use the TYPO3 Logo for your website as favicon in the shown variations. If you use it, please make sure that your include all available sizes of the favicon.</p>"
   	},
    {
   		"el": ".forms",
   		"title" : "Forms & Input fields",
   		"comment": "<p>Input fields should contain a placeholder text. Labels should be placed outside the input fields.</p>"
   	},
    {
   		"el": ".selects",
   		"title" : "Selects",
   		"comment": "<p>You are allowed to alter selects according to your website's needs. Please respect the TYPO3 Style Guide in total.</p>"
   	},
    {
   		"el": ".checkboxes",
   		"title" : "Checkboxes",
   		"comment": "<p>You are allowed to alter checkboxes according to your website's needs. Please respect the TYPO3 Style Guide in total.</p>"
   	},
    {
   		"el": ".radiobuttons",
   		"title" : "Radio Buttons",
   		"comment": "<p>You are allowed to alter radio buttons according to your website's needs. Please respect the TYPO3 Style Guide in total.</p>"
   	},
    {
   		"el": ".buttons",
   		"title" : "Buttons",
   		"comment": "<p>Please notice that only the dark version of the buttons gets lighter during mouse over. The orange version of the buttons gets darker.</p>"
   	},
    {
   		"el": "table",
   		"title" : "Table",
   		"comment": "<p>A table doesn't have a footer. The background color of the table heading is always 100% white. The table body uses the 'Grey superlight' as shown above. For long tables you are allowed to use odd and even for table rows and also use 'white' and 'Grey superlight'.</p>"
   	},
    {
   		"el": ".vcard",
   		"title" : "Adresses",
   		"comment": "<p>Addresses, even on official local websites, are written in international format.</p>"
   	},
    {
   		"el": ".hgroup",
   		"title" : "Heading Group",
   		"comment": "<p>Combining two headings as a heading group is possible. Using a heading group, please use the first heading as h2 in bold, while using the second heading as h3 in normal.</p>"
   	},
    {
   		"el": ".blockquoted",
   		"title" : "Blockquote with Citations",
   		"comment": "<p>Please make sure, that while using citations within blockquotes, the left border is exactly 5px solid and is using the 'Support Orange light' with 1rem margin towards the text.</p>"
   	},
    {
   		"el": ".intro",
   		"title" : "Intro Text",
   		"comment": "<p>Introductional text, eg. like a summary or TL;DR in detailed view of an news article, shall be used in bold. Ongoing text should use font-weight normal.</p>"
   	},
    {
   		"el": ".figured",
   		"title" : "Figure or Picture with Caption",
   		"comment": "<p>While using a figure or picture with a caption, please make sure that the caption has a text-align right, a border of 5px solid in 'Support Orange light' with 1rem margin towards the text.</p>"
   	},
    {
   		"el": ".alert",
   		"title" : "Alerts",
   		"comment": "<p>Alerts for TYPO3 websites are simply flat, without any borders, using the message colors.</p>"
   	}
]
};