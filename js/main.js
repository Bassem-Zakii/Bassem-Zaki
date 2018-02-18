/*global $, window*/

$(function () {
    
    'use strict';
    
    $(window).scroll(function () {
        
        var sT  = $(this).scrollTop();
        
        // Scroll Navbar
        if (sT >= 100) {
            
            $('nav').addClass('nav-fixed-top');
            
        } else {
            
            $('nav').removeClass('nav-fixed-top');
            
        }
		
        // Scroll Button Top
        if (sT >= 600) {
            
            $('.scroll-top').fadeIn('.scroll-top');
            
        } else {
            
            $('.scroll-top').fadeOut('.scroll-top');
            
        }

	});
    
    // Back to Top
    $('.scroll-top').on('click', function () {
            
        $('html, body').animate({ scrollTop: 0 }, 600);
            
    });
	
	// Smoothly Scroll To Element
	
	$('.navbar li a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top
			
		}, 1000);
		
	});
    
});