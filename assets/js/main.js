//
// Main.js
//

/* ------------------------------------------------------------------
 * Name         : Sirin - HTML Template
 * File         : main.js
 * Author       : ScanThemes
 * Author URI   : scanthemes@gmail.com
 *
 * All Rights Reserved.
 * --------------------------------------------------------------------- */
/* ---------------------------------------------------------------------

  [Table of contents]

    - Default options
    - Google Map (Init)
    - Preloader
    - Scroll To Element
    - Plugins load
    - Google Map
    - Off-Canvas
    - Navbar Affix
    - Modal Window Video (Bootstrap)
    - Carousel (Bootstrap)
    - Progress Bar Animate
    - Animate on scroll
    - Carousel + animation
    - Partially collapsing sidebar
    - Collapser

------------------------------------------------------------------------ */
/*---------------------------------------------------------------------- */

//------------------- Default options -------------------
if ( ( options == undefined ) || ( options == false ) ) {
  var options = true,
      preloader = { enabled : false },
      GoogleMapAPI = { 
        key : '',
        language : '',
        region : '',
        disableDefaultUI : false,
        markerIcon: '',
        customMapStyle: ''
      },
      scrollToElement = { scrollSpeed : 700 },
      slider = { interval : 5000 };
}

//----------------------- Init Map ------------------------
function initMap() {
    var map_item = document.querySelectorAll('[data-map]');
    Array.prototype.forEach.call(map_item, function(el) {
        var GM_lat = -34.400,
            GM_lng = 150.9,
            GM_zoom = 8,
            GM_disableDefaultUI = GoogleMapAPI.disableDefaultUI,
            GM_marker_lat = -34.400,
            GM_marker_lng = 150.9,
            GM_marker_title = 'Marker title',
            GM_marker_icon = GoogleMapAPI.markerIcon,
            GM_marker_animation = false,
            GM_marker_label = '',
            GM_marker_content = '',
            GM_style,
            map;

    if ( (el.closest('[data-lat]')) && (el.closest('[data-lng]')) ) {
      GM_lat = Number(el.getAttribute('data-lat'));
      GM_lng = Number(el.getAttribute('data-lng'));
      GM_zoom = Number(el.getAttribute('data-zoom'));
    }
    if ( el.closest('[data-zoom]') ) {
      GM_zoom = Number(el.getAttribute('data-zoom'));
    }
    if ( (el.closest('[data-marker-lat]')) && (el.closest('[data-marker-lng]')) ) {
      GM_marker_lat = Number(el.getAttribute('data-marker-lat'));
      GM_marker_lng = Number(el.getAttribute('data-marker-lng'));
    }
    if ( el.closest('[data-marker-title]') ) {
      GM_marker_title = el.getAttribute('data-marker-title');
    }
    if ( el.closest('[data-marker-animation="drop"]') ) {
      GM_marker_animation = google.maps.Animation.DROP;
    }
    if ( el.closest('[data-marker-animation="bounce"]') ) {
      GM_marker_animation = google.maps.Animation.BOUNCE;
    }
    if ( el.closest('[data-marker-label]') ) {
      GM_marker_label = el.getAttribute('data-marker-label');
    }
    if ( el.closest('[data-marker-icon]') ) {
      GM_marker_icon = el.getAttribute('data-marker-icon');
    }
    if ( el.closest('[data-marker-content]') ) {
      GM_marker_content = el.getAttribute('data-marker-content');
    }
    if ( el.closest('[data-map-style="light"]') ) {
      GM_style = 
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
    } else if ( el.closest('[data-map-style="dark"]') ) {
      GM_style = 
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
    } else if ( el.closest('[data-map-style="custom"]') ) {
      GM_style = GoogleMapAPI.customMapStyle
    }

    map = new google.maps.Map(el, {
      styles: GM_style,
      center: {lat: GM_lat, lng: GM_lng},
      zoom: GM_zoom,
      disableDefaultUI: GM_disableDefaultUI
    });
    var marker = new google.maps.Marker({
        position: {lat: GM_marker_lat, lng: GM_marker_lng},
        map: map,
        animation: GM_marker_animation,
        title: GM_marker_title,
        label: GM_marker_label,
        icon: GM_marker_icon
    });
    if ( GM_marker_content ) {
      var infowindow = new google.maps.InfoWindow({
          content: GM_marker_content
      });
      marker.addListener('click', function() {
          infowindow.open(map, marker);
      });
    }
  });
}

(function($) {

    "use strict";

    //--------------------- Preloader ----------------------
    if ( preloader.enabled == true ) {
      window.addEventListener('load',function(){
        $('.preloaderWrapper').delay(300).fadeOut();
        $('body').addClass('animRDY');
      });
    }

    //------------ Scroll To Element ------------
    $('a[data-scroll^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('data-scroll')),
          navbar_height = -1;
      if ($('.fixed-top').length) {
        navbar_height = $('.navbar.fixed-top').outerHeight() - 1;
      }
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - navbar_height
        },  scrollToElement.scrollSpeed);
      }
    });

    //------------------------ Plugins load ----------------------------- 
    var _mainJS = document.querySelector('#_mainJS[data-plugins="load"]');

    if ( _mainJS ) {
        // Lib
        if ( document.querySelector('[data-animeJS]') ) {
            var anime_js = document.createElement("script");
            anime_js.src = 'assets/plugins/lib/anime/anime.min.js';
            document.body.insertBefore(anime_js, _mainJS);
        }

        // Letters Animation
        if ( document.querySelector('[data-wrapper="letters-effect"]') ) {
          var ease_js    = document.createElement("script"),
              letters_js = document.createElement("script"),
              segment_js = document.createElement("script"),
              mo_js      = document.createElement("script"),
              effects    = document.createElement("script");
          ease_js.src    = 'assets/plugins/letters/ease.js';
          letters_js.src = 'assets/plugins/letters/letters.js';
          segment_js.src = 'assets/plugins/letters/segment.min.js';
          mo_js.src      = 'assets/plugins/letters/mo.min.js';
          effects.src    = 'assets/plugins/letters/effects/effects.js';
          document.body.insertBefore(ease_js, _mainJS);
          document.body.insertBefore(letters_js, _mainJS);
          document.body.insertBefore(segment_js, _mainJS);
          document.body.insertBefore(mo_js, _mainJS);
          document.body.insertBefore(effects, _mainJS);
        }

        // Scrollbar
        if ( document.querySelector('[data-scrollbar]') ) {
            var nicescroll_js = document.createElement("script");
            nicescroll_js.src = 'assets/plugins/scrollbar/jquery.nicescroll.min.js';
            document.body.insertBefore(nicescroll_js, _mainJS);
        }

        // Animated Background
        // lib
        if ( document.querySelector('[data-animated-background]') ) {
            var TweenMax_js = document.createElement("script");
            TweenMax_js.src = 'assets/plugins/lib/TweenMax/TweenMax.min.js';
            document.body.insertBefore(TweenMax_js, _mainJS);
            if ( (document.querySelector('[data-animated-background="effect-4"]')) ) {
                var three_js  = document.createElement("script"),
                    perlin_js = document.createElement("script");
                three_js.src  = 'assets/plugins/lib/three/three.min.js';
                perlin_js.src = 'assets/plugins/bg.animated/deco/perlin.js';
                document.body.insertBefore(three_js, _mainJS);
                document.body.insertBefore(perlin_js, _mainJS);
            }
            window.addEventListener('load', function () {
                // deco
                if ( document.querySelector('[data-animated-background="effect-4"]') ) {
                  var bg_effect_4_js = document.createElement("script");
                  bg_effect_4_js.src = 'assets/plugins/bg.animated/deco/effect-4.js';
                  document.body.insertBefore( bg_effect_4_js, _mainJS);
                }
            });
        }

    }

  //----------- Google Map ----------
  if ( document.querySelector('[data-map]') ) { 
    var GM_item = document.querySelector('[data-map]'),
        GM_map  = document.createElement("script"),
        GM_api  = 'https://maps.googleapis.com/maps/api/js?key=',
        GM_key  =  GoogleMapAPI.key,
        GM_init = '&callback=initMap',
        GM_lang = GoogleMapAPI.language,
        GM_reg  = GoogleMapAPI.region,
        GM_src;
    if (GM_lang) {
        GM_lang = '&language=' + GM_lang;
    }
    if (GM_reg) {
        GM_reg = '&region=' + GM_reg;
    }
    GM_src = GM_api + GM_key + GM_init + GM_lang + GM_reg;
    GM_map.src = GM_src;
    document.body.insertBefore( GM_map, _mainJS);
  }

  //------------- Off-Canvas ---------------
  $('[data-toggle="offcanvas"]').on('click', function(e) {
      e.preventDefault();
      var offcanvas_target = $(this).data("target");
      if ($(offcanvas_target).is('.show')) {
          $(offcanvas_target).addClass("showing").delay(300).queue(function(next){
              $(this).removeClass("showing");
              next();
          });
          $(offcanvas_target).removeClass('show');
          $('.overlay-offcanvas').remove();
      } else {
          $(offcanvas_target).addClass("showing").delay(300).queue(function(next){
              $(this).removeClass("showing");
              next();
          });
          $(offcanvas_target).addClass('show');
          $('<div data-offcanvas-overlay="' + offcanvas_target + '-overlay" class="overlay-offcanvas"></div>').insertBefore(offcanvas_target);
      }
  });

  /* offcanvas-close */
  $('[data-toggle="offcanvas-close"]').on('click', function() {
      var offcanvas_close_item = $(this).closest('[class*="offcanvas"]').attr('id'),
          offcanvas_close_overlay = ( '#' + offcanvas_close_item + '-overlay' );
      $( '#' + offcanvas_close_item + '.show' ).addClass("showing").delay(300).queue(function(next){
          $(this).removeClass("showing");
          next();
      });
      $( '#' + offcanvas_close_item + '.show' ).removeClass('show');
      $( '[data-offcanvas-overlay="' + offcanvas_close_overlay + '"]').remove();
  });

  /* offcanvas-overlay */
  $(document).on('click', '[data-offcanvas-overlay]', function() {
    var offcanvas_overlay_item = $(this).next('.offcanvas, .offcanvas-sm, .offcanvas-md, .offcanvas-lg, .offcanvas-xl');
    $( offcanvas_overlay_item ).addClass("showing").delay(300).queue(function(next){
        $(this).removeClass("showing");
        next();
    });
    $(offcanvas_overlay_item).removeClass('show');
    $(this).remove();
  });

  //----------- Navbar Affix -----------------
  $(window).on('scroll load', function (event) {
      var scrollValue = $(window).scrollTop();
      if (scrollValue > 60) {
          $('.navbar-affix').addClass('affix');
      } else{
          $('.navbar-affix').removeClass('affix');
      }
  });

  //----------- Modal Window Video (Bootstrap) ----------- 
  $('[data-modal-video="play"]').on('click', function () {
      var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').on('click', function () {
          $(theModal + ' iframe').attr('src', videoSRC);
      });
  });

  //----------- Carousel (Bootstrap) -----------
  $('#slider_fade').carousel({
      interval: slider.interval // set interval
  });

  //----------- Progress Bar Animate ---------------
  function progressbar_animate() {
      $('.progress .progress-bar').css("width",
          function() {
              return $(this).attr("aria-valuenow") + "%";
          }
      );
  }

  $(window).on('load', function () {
    //---------------- Parallax ----------------
    var images = document.querySelectorAll('.parallax-img');
    new simpleParallax(images, {
      scale: 1.3
    });

    //------------- Animate on scroll --------------
    if ( $('[data-aos]').length ) {
        AOS.init({
            // Global settings
            duration: 1500,
            easing: 'ease',
            once: true,
        });
        $(window).on('scroll', function (event) {
            if ($('[data-aos]').is('.aos-animate')) {
              setTimeout(progressbar_animate, 800);
            }
        });
    }
  });

  //------------ Carousel + animation -------------
  $('.carousel [data-slide]').on('click', function () {
    $('.carousel-inner .carousel-item').find('[data-carousel-animation]').removeClass('active');
    $('.carousel-inner .carousel-item.active').find('[data-carousel-animation]').addClass('active');
  });

  //-------------------- Partially collapsing sidebar -------------------
  $('[data-collapsing="partially"]').on('click', function () {
      var p_collapsing_item = $(this).attr('data-collapsing-target');
      if($(p_collapsing_item).is('.p-collapse')) {
        $(p_collapsing_item).removeClass('p-collapse');
      } else {
        $(p_collapsing_item).addClass('p-collapse');
      }
  });

  //------------------------- Collapser -------------------------
  $('.collapser').on('click', function() {
      if($(this).is('.collapser-active')) {
        $(this).removeClass('collapser-active');
      } else {
        $(this).addClass('collapser-active');
      }
      $(this).next().collapse('toggle');
  });

  //------------------------- Video Preloader -------------------------
  let v_loader_list = document.querySelectorAll('[data-video="progress"]');
  Array.prototype.forEach.call(v_loader_list, function(vll_el) {
    let cv_parent = vll_el.parentElement.querySelector('.progress-bar');
    cv_parent.style.animationDuration = vll_el.duration + "s";
  });

})( jQuery );




