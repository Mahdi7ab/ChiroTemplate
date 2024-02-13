/* ------------------------------------------------

  Project:   Vaidy - Chiropratic Therapy WordPess Theme
  Author:    ThemeHt

------------------------------------------------ */

/* ------------------------

    Table of Contents



  1. Predefined Variables

  2. Preloader  

  3. Menu  

  4. Counter

  5. Magnific Popup

  6. Scroll to top

  7. Fixed Header

  8. ProgressBar

  9. Search

  10. Accordion

  11. HT Window load and functions   



------------------------ */



(function($) {



"use strict";



/*------------------------------------

  HT Predefined Variables

--------------------------------------*/

var jQuerywindow = jQuery(window),

    jQuerydocument = jQuery(document),

    jQuerybody = jQuery('body');



//Check if function exists

jQuery.fn.exists = function () {

  return this.length > 0;

};





/*------------------------------------

  HT PreLoader

--------------------------------------*/

function preloader() {

   jQuery('#ht-preloader').fadeOut();

};





/*------------------------------------

  HT Menu

--------------------------------------*/

function dropdown() {

    jQuery('.dropdown-menu a.dropdown-toggle').on('click', function (e) {

    return false;

  });  

};





/*------------------------------------

  HT Counter

--------------------------------------*/

function counter() {  

  var elementSelector = jQuery('.count-number');

    elementSelector.each(function(){

        elementSelector.appear(function(e) {

            var el = this;

            var updateData = jQuery(el).attr("data-count");

            var od = new Odometer({

                el: el,

                format: 'd',

                duration: 2000

            });

            od.update(updateData);

        });

    });

};





/*------------------------------------

  HT Magnific Popup

--------------------------------------*/

function magnificpopup() {

jQuery('.popup-gallery').magnificPopup({

    delegate: 'a.popup-img',

    type: 'image',

    tLoading: 'Loading image #%curr%...',

    mainClass: 'mfp-img-mobile',

    gallery: {

      enabled: true,

      navigateByImgClick: true,

      preload: [0,1] // Will preload 0 - before current, and 1 after the current image

    },

    image: {

      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

      titleSrc: function(item) {

        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';

      }

    }

  });

if (jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {

     jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

          disableOn: 700,

          type: 'iframe',

          mainClass: 'mfp-fade',

          removalDelay: 160,

          preloader: false,

          fixedContentPos: false

    });

  }



};     





/*------------------------------------

  HT Scroll to top

--------------------------------------*/

function scrolltop() {

  var pxShow = 300,

    goTopButton = jQuery(".scroll-top")

    // Show or hide the button

  if (jQuery(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');

  jQuery(window).on('scroll', function () {

    if (jQuery(window).scrollTop() >= pxShow) {

      if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')

    } else {

      goTopButton.removeClass('scroll-visible')

    }

  });

  jQuery('.smoothscroll').on('click', function (e) {

    jQuery('body,html').animate({

      scrollTop: 0

    }, 0);

    return false;

  });

};





/*------------------------------------

  HT Fixed Header

--------------------------------------*/

function fxheader() {

    

    jQuery(window).on('scroll', function () {

  var sticky = jQuery('.sticky-header'),

    scroll = jQuery(window).scrollTop();



  if (scroll >= 300) sticky.addClass('fixed-header');

  else sticky.removeClass('fixed-header');

});

};





/*------------------------------------

  HT ProgressBar

--------------------------------------*/

  function progressbar () {

    var progressBar = jQuery('.progress');

    if(progressBar.length) {

      progressBar.each(function () {

        var Self = jQuery(this);

        Self.appear(function () {

          var progressValue = Self.data('value');



          Self.find('.progress-bar').animate({

            width:progressValue+'%'           

          }, 1000);

        });

      })

    }

};





/*------------------------------------

  HT Search

--------------------------------------*/

function search() { 

  // Search Toggle

  jQuery("#search-input-box").hide();

  jQuery("#search, #search-sticky").on("click", function () {

    jQuery("#search-input-box").slideToggle();

    jQuery("#search-input").focus();

  });

  jQuery("#close-search").on("click", function () {

    jQuery('#search-input-box').slideUp(500);

  });

};





/*------------------------------------

  HT Active Class

--------------------------------------*/

function accordion() {

  jQuery( document ).on( 'click', '.elementor-accordion .elementor-accordion-item', function ( jQuerythis) {			

	jQuery( '.elementor-accordion').find( '.elementor-tab-content' ).removeAttr( "hidden" );		 

 });

};


/*------------------------------------------
  HT Text Color, Background Color And Image
---------------------------------------------*/
function databgcolor() {
    jQuery('[data-bg-color]').each(function(index, el) {
     jQuery(el).css('background-color', jQuery(el).data('bg-color'));  
    });
    jQuery('[data-text-color]').each(function(index, el) {
     jQuery(el).css('color', jQuery(el).data('text-color'));  
    });
    jQuery('[data-bg-img]').each(function() {
     jQuery(this).css('background-image', 'url(' + jQuery(this).data("bg-img") + ')');
    });
};



/*------------------------------------

  HT Window load and functions

--------------------------------------*/

jQuery(document).ready(function() {    

    dropdown(),

    counter(),

    magnificpopup(),

    scrolltop(),

    fxheader(),  

    progressbar(),

    search(),

    accordion(),
    
    databgcolor();

});



jQuery(window).on('load', function() {

    preloader();

});



})(jQuery);