$(function() {
   	$('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
        }
    });
}); // End of Scrolling

// Sticky Header
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#navigation-bar').fadeIn(500);
            } else {
                $('#navigation-bar').fadeOut(500);
            }
        });
    });
})(jQuery); // End of header


//Responsive navigation

$(document).ready(function(){
    var n='#nav', no='nav-open';
    // no is for nav-open class

    $('#nav-menu').click(function(){
        if ($(n).hasClass(no)) {
            
            $(n).removeClass(no);
        }
        else {
            $(n).addClass(no);
        }
    });

    $('.nav-links').click(function() {
        if ($(n).hasClass(no)) {
            
            $(n).removeClass(no);
        }
    });


});

//meters on scroll 

(function($) {          
    $(document).ready(function(){ 
        var width = $(window).width();
        if (width>450) {

            // meters 
            $('.my-skills').click(function() {

                $('.skill-html').animate({width:'90%'}, 3000, 'swing');
                $('.skill-js').animate({width:'70%'}, 3000, 'swing');
                $('.skill-php').animate({width:'60%'}, 3000, 'swing');
                $('.skill-c').animate({width:'50%'}, 3000, 'swing');
                $('.skill-java').animate({width:'65%'}, 3000, 'swing');
            });

            $(window).scroll(function(){                          
                if ($(this).scrollTop() > 1450) {
                    $('.skill-html').animate({width:'90%'}, 3000, 'swing');
                    $('.skill-js').animate({width:'70%'}, 3000, 'swing');
                    $('.skill-php').animate({width:'60%'}, 3000, 'swing');
                    $('.skill-c').animate({width:'50%'}, 3000, 'swing');
                    $('.skill-java').animate({width:'65%'}, 3000, 'swing');
                }
            });
        }                   

    });
})(jQuery);

// Display Scroll height in mobile
/*
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            var scroll = $(this).scrollTop();

        $('.nav-menu-text').text('Menu '+ scroll);
        });
    });
})(jQuery);
*/
// Small View