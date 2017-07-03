/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    // Initializing ///

    var sideNavToggle = false;
    $(document).ready(function () {
		$(".dropdown-button").dropdown();
        $("#sideNav, #sideNavMob").click(function(){
        if (!sideNavToggle) {
                sideNavToggle = true;
                if (!$("body").hasClass("menuOpen")) {
                    $("body").addClass("menuOpen");
                } else {
                    $("body").removeClass("menuOpen");
                }
                setTimeout(function() {
                    sideNavToggle = false;
                }, 300);
            }
        });
		
        mainApp.initFunction(); 
    });

	$(".dropdown-button").dropdown();
}(jQuery));
