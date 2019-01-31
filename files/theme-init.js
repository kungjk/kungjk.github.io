jQuery(document).ready(function () {

    


    theme.init();
    theme.initMainSlider();
    theme.initCountDown();
    theme.initPartnerSlider();
    theme.initTestimonials();
    theme.testimonials2();
    theme.initGoogleMap();

    

});



jQuery(window).load(function () { jQuery('body').scrollspy({offset: 100, target: '.navigation'}); });
jQuery(window).load(function () { jQuery('body').scrollspy('refresh'); });
jQuery(window).resize(function () { jQuery('body').scrollspy('refresh'); });

jQuery(document).ready(function () { theme.onResize(); });
jQuery(window).load(function(){ theme.onResize(); });
jQuery(window).resize(function(){ theme.onResize(); });

jQuery(window).load(function() {

    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            $('html,body').delay(0).animate({
                scrollTop: jQuery(hash).offset().top - 44 + 'px'
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }
});

jQuery(window).load(function () {
    theme.initAnimation();
    new WOW().init();
});


    
   
/*
     FILE ARCHIVED ON 20:19:17 Jun 06, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:47:43 Jan 25, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 221.573 (3)
  esindex: 0.007
  captures_list: 252.634
  CDXLines.iter: 15.545 (3)
  PetaboxLoader3.datanode: 209.728 (4)
  exclusion.robots: 0.197
  exclusion.robots.policy: 0.186
  RedisCDXSource: 11.327
  PetaboxLoader3.resolve: 73.886
  load_resource: 128.984
*/