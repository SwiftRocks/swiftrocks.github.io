(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");
        ///
        var showSponsor = false;
        ///
        var sponsorTitle = "Emerge Tools - Monitor and reduce app size"
        var sponsorIcon = "https://i.imgur.com/F4ZGrLz.png"
        var sponsorText = "Why are Swift reference types bad for app startup time, and what’s the performance cost of protocol conformances? That’s just a couple of the topics you can learn about on the Emerge blog — written by the app performance experts behind Emerge’s advanced app optimization and monitoring tools, based on their experience of working at companies like Apple, Airbnb, Snap, and Spotify."
        var sponsorLink = "https://www.emergetools.com/blog?utm_source=swiftrocks&utm_medium=sponsor&utm_campaign=emerge"

        const sponsorDivId = "sponsor-article-ad-auto"
        const sponsorDivs = document.getElementsByClassName(sponsorDivId)

        for (var i = 0; i<sponsorDivs.length; i++) {
            if (showSponsor && sponsorDivs[i].classList.contains("hidden")) {
                sponsorDivs[i].innerHTML = "<a href=\""+sponsorLink+"\" target=\"_blank\"><span></span></a><div class=\"sponsor-article-ad-auto-header\">SPONSOR</div><text><b>"+sponsorTitle+"</b></text><div class=\"sponsor-article-ad-auto-inner\"><img src=\""+sponsorIcon+"\" alt=\"Sponsor icon\"><div class=\"sponsor-article-ad-auto-text\"><p>"+sponsorText+"</p></div></div>"
                sponsorDivs[i].classList.remove("hidden");
            }
        }
    });
})(jQuery);