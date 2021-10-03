(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");
        ///
        var showSponsor = true;
        ///
        var sponsorTitle = "Essential Developer"
        var sponsorIcon = "https://i.imgur.com/9AaIWZC.png"
        var sponsorText = "If you want to become a complete senior iOS developer, join this free online crash course starting on October 18th. Learn how to apply truly scalable iOS app architecture patterns through a series of lectures and practical coding sessions. Click to learn more."
        var sponsorLink = "https://iosacademy.essentialdeveloper.com/p/ios-architect-crash-course-srse34a/"

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