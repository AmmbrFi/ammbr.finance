//
// Effects
//

"use strict";

// Config
var current_item         = document.querySelectorAll('[data-letters-effect]'),
    letters_color        = '#ffffff',
    letters_size         = 190,
    letters_weight       = 1,
    letters_duration     = 0.5,
    letters_fade         = 0,
    letters_delay        = 0,
    letters_effect_total = 12;
    
(function($) {

	window.addEventListener('load', function () {

        Array.prototype.forEach.call(current_item, function(el) {

            // Selecting the container element
            var el = el,
                current_effect = parseInt(el.getAttribute('data-letters-effect'), 10);

            if ( current_effect > 9 ) {

                current_effect = current_effect - 10;

                el.innerHTML = el.getAttribute('data-letters-word');
                if(el.closest('[data-letters-color]')) {
                    letters_color = (el.getAttribute('data-letters-color')).split(",");
                }
                if(el.closest('[data-letters-size]')) {
                    letters_size = (el.getAttribute('data-letters-size')).split(",").map(Number);
                }
                if(el.closest('[data-letters-weight]')) {
                    letters_weight = (el.getAttribute('data-letters-weight')).split(",").map(Number);
                }
                if(el.closest('[data-letters-duration]')) {
                    letters_duration = (el.getAttribute('data-letters-duration')).split(",").map(Number);
                }
                if(el.closest('[data-letters-fade]')) {
                    letters_fade = (el.getAttribute('data-letters-fade')).split(",").map(Number);
                }
                if(el.closest('[data-letters-delay]')) {
                    letters_delay = (el.getAttribute('data-letters-delay')).split(",").map(Number);
                }

                

                // All the possible options (these are the default values)
                // Remember that every option (except individualDelays) can be defined as single value or array
                var options = [
                    {   // word 1
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        fade: letters_fade,
                        delay: letters_delay,
                        easing: d3_ease.easeSinInOut.ease
                    },
                    {   // word 2
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        fade: letters_fade,
                        delay: letters_delay,
                        easing: d3_ease.easeSinInOut.ease
                    },
                    {   // word 3
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        fade: letters_fade,
                        delay: letters_delay,
                        easing: d3_ease.easePolyOut.ease
                    },
                    {   // word 4
                        size : letters_size,
                        weight : letters_weight,
                        color: [letters_color],
                        duration: letters_duration,
                        fade: letters_fade,
                        delay: letters_delay,
                        individualDelays: true,
                        easing: d3_ease.easeCubicOut.ease
                    },
                    {   // word 5
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        delay: letters_delay,
                        fade: letters_fade,
                        individualDelays: true,
                        easing: d3_ease.easeBounceOut.ease
                    },
                    {   // word 6
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        delay: letters_delay,
                        fade: letters_fade,
                        easing: [d3_ease.easeExpOut.ease,d3_ease.easePolyOut.ease]
                    },
                    {   // word 7
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        delay: letters_delay,
                        fade: letters_fade,
                        individualDelays: true,
                        easing: d3_ease.easePolyOut.ease
                    },
                    {   // word 8
                        size : letters_size,
                        weight : letters_weight,
                        rounded: true,
                        color: letters_color,
                        duration: letters_duration,
                        delay: letters_delay,
                        easing: d3_ease.easePolyOut.ease
                    },
                    {   // word 9
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        delay: 0.05,
                        fade: letters_fade,
                        easing: d3_ease.easeExpInOut.ease
                    },
                    {   // word 10
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        delay: letters_delay,
                        easing: d3_ease.easeBounceOut.ease
                    },
                    {   // word 11
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        fade: letters_fade,
                        delay: letters_delay,
                        easing: d3_ease.easeExpInOut.ease
                    },
                    {   // word 12
                        size : letters_size,
                        weight : letters_weight,
                        color: letters_color,
                        duration: letters_duration,
                        fade: letters_fade,
                        delay: letters_delay,
                        easing: d3_ease.easeExpInOut.ease
                    }
                ];


                // Initializing the text (Letters parameters: container-element, options)
                var svg_letters_effect = new Letters(el, options[current_effect]);

                svg_letters_effect.show(options);
            }

        });
    });

})( jQuery );




