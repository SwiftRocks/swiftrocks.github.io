(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");

        ///
        var showSponsor = true;
        ///
        var sponsorTitle = "Essential Developer"
        var sponsorIcon = "https://i.imgur.com/FsUmJHv.png"
        var sponsorText = "If you’re a mid/senior iOS developer who’s looking to improve both your skills and your salary level, then join this 100% free online crash course, starting on August 2nd. Learn how to apply truly scalable iOS app architecture patterns through a series of lectures and practical coding sessions."
        var sponsorLink = "https://iosacademy.essentialdeveloper.com/p/ios-architect-crash-course-srs4cce/"

        const sponsorDivId = "sponsor-article-ad-auto"
        const sponsorDivs = document.getElementsByClassName(sponsorDivId)

        for (var i = 0; i<sponsorDivs.length; i++) {
            if (showSponsor && sponsorDivs[i].contains("hidden")) {
                sponsorDivs[i].innerHTML = "<a href=\""+sponsorLink+"\" target=\"_blank\"><span></span></a><div class=\"sponsor-article-ad-auto-header\">SPONSOR</div><text><b>"+sponsorTitle+"</b></text><div class=\"sponsor-article-ad-auto-inner\"><img src=\""+sponsorIcon+"\" alt=\"Sponsor icon\"><div class=\"sponsor-article-ad-auto-text\"><p>"+sponsorText+"</p></div></div>"
                sponsorDivs[i].classList.remove("hidden");
            }
        }
    });
})(jQuery);