(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");
        ///
        var showSponsor = true;
        ///
        var sponsorTitle = "The Senior iOS Developer Testing Crash Course"
        var sponsorIcon = "https://i.imgur.com/dtfOYh1.png"
        var sponsorText = "Learn the most up-to-date techniques and strategies for testing new and legacy Swift code in this free practical course for iOS devs who want to become complete Senior iOS Developers."
        var sponsorLink = "https://iosacademy.essentialdeveloper.com/p/ios-testing-crash-course-srs72db/"

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