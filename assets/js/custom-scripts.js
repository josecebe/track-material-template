/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    // Initializing ///

    var sideNavToggle = false;
    const MOBILE_MAX_WIDTH = 767;

    $(document).ready(function () {
		$(".dropdown-button").dropdown();
        $("#sideNav, #sideNavMob").click(function(){
            var isMobile = false;
            if (window.innerWidth <= MOBILE_MAX_WIDTH) {
                isMobile = true;
            }
            if (!sideNavToggle) {
                sideNavToggle = true;
                if (!isMobile) {
                    if (!$("body").hasClass("menuOpen")) {
                        $("body").addClass("menuOpen");
                    } else {
                        $("body").removeClass("menuOpen");
                    }
                } else {
                    if (!$("body").hasClass("menuOpenMobile")) {
                        $("body").addClass("menuOpenMobile");
                    } else {
                        $("body").removeClass("menuOpenMobile");
                    }
                }
                setTimeout(function() {
                    sideNavToggle = false;
                }, 300);
            }
        });
    });

	$(".dropdown-button").dropdown();
}(jQuery));
