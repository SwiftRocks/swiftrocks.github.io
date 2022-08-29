(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");
        ///
        var showSponsor = true;
        ///
        var sponsorTitle = "BurnoutBuddy - Anti-burnout & self-control tool for Workaholics"
        var sponsorIcon = "https://i.imgur.com/xhEWrj7.png"
        var sponsorText = "Working late hours and weekends for no good reason? BurnoutBuddy actively blocks you from using work-related apps outside working hours to help you to overcome bad habits and improve your work-life balance."
        var sponsorLink = "https://burnoutbuddy.rockbruno.com/"

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