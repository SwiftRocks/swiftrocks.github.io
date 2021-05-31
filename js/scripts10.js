(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");
        var readHTMLFile = function(url){
            var toReturn;
            $.ajax({
                url: url,
                async: false
            }).done(function(data){
                toReturn = data;
            });
            return toReturn;
        };

       	function getRandomInt(min, max) {
    		min = Math.ceil(min);
    		max = Math.floor(max);
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		}

        var rss = readHTMLFile("https://swiftrocks.com/rss.xml");
		var channel = rss.getElementsByTagName("channel")[0];

		var item = channel.getElementsByTagName("item");
		var rand = getRandomInt(0, item.length);

		var title = item[rand].getElementsByTagName("title")[0].childNodes[0].nodeValue;
		var link = item[rand].getElementsByTagName("link")[0].childNodes[0].nodeValue;

		document.getElementById("next-article-title").innerHTML = "<a href=\"" + link + "\">" + title + " ‎<i class=\"fa fa-external-link\"></i>‏‏‎</a>"

		const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

		if (prefersDarkScheme.matches) {
  			document.body.classList.add("dark-theme");
            document.getElementById("logo").src = "images/bg/swiftrockswithtextdarkmode.png"
		} else {
  			document.body.classList.remove("dark-theme");
            document.getElementById("logo").src = "images/bg/swiftrockswithtext.png"
		} 

        ///
        var showSponsor = false;
        /// missing link
        ///
        var sponsorIcon = "https://i.imgur.com/tw7D4YJ.jpg"
        var sponsorText = "example"
        var sponsorLink = "https://swiftrocks.com"

        const sponsorDivId = "sponsor-article-ad-auto"
        const sponsorDivs = document.getElementsByClassName(sponsorDivId)

        for (var i = 0; i<sponsorDivs.length; i++) {
            if (showSponsor) {
                sponsorDivs[i].innerHTML = "<a href=\""+sponsorLink+"\"><span></span></a><div class=\"sponsor-article-ad-auto-header\">SPONSOR</div><text><b>Essential Developer</b></text><div class=\"sponsor-article-ad-auto-inner\"><img src=\""+sponsorIcon+"\" alt=\"Sponsor icon\"><div class=\"sponsor-article-ad-auto-text\"><p>"+sponsorText+"</p></div></div>"
                sponsorDivs[i].classList.remove("hidden");
            }
        }

        document.body.classList.remove("hidden");
    });
})(jQuery);