(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");
        ///
        var showSponsor = true;
        var sponsorData = [
            ["Burnout Buddy - App Blocker for iOS", "https://i.imgur.com/OHTdc17.png", "Modern apps like social media hook you at a psychological level. Burnout Buddy helps you break free from addictive apps and heal their impact on your mental health. Try it and see the benefits for yourself; it's free and requires no account.", "https://burnoutbuddy.io"],
            ["Emerge Tools - Build better mobile apps", "https://i.imgur.com/F4ZGrLz.png", "Trusted by top mobile teams like Duolingo, Square & DoorDash to make the best apps possible. Start using Emerge Tools today!", "https://www.emergetools.com/?utm_source=swiftrocks&utm_medium=sponsor&utm_campaign=emerge"],
            ["Emerge Tools Blog - Sharing our journey building the future of mobile development", "https://i.imgur.com/F4ZGrLz.png", "The Emerge blog is dedicated to exploring the latest advancements and trends in mobile app performance. From the newest developments in mobile technology to cutting-edge optimization strategies, we cover it all.", "https://www.emergetools.com/blog?utm_source=swiftrocks&utm_medium=sponsor&utm_campaign=emerge"],
        ]
        const d = new Date();
        let month = d.getMonth();
        var activeSponsors = (month % 2 == 1) ? [0] : [1,2]
        ///

        var pickedIndex = activeSponsors[Math.floor(Math.random() * activeSponsors.length)]
        var sponsor = sponsorData[activeSponsors[Math.floor(Math.random() * activeSponsors.length)]]

        var sponsorTitle = sponsor[0]
        var sponsorIcon = sponsor[1]
        var sponsorText = sponsor[2]
        var sponsorLink = sponsor[3]

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