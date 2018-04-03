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
        
        // Spy Navbar links with section
        
        $('header, section').each(function () {
           
            if ($(window).scrollTop() > $(this).offset().top) {
                
                var sectionId = $(this).attr('id');
                
                $('.navbar a').removeClass('active');
                
                $('.navbar li a[data-scroll="' + sectionId + '"]').addClass('active');
                
            }
            
        });

	});
    
    // Back to Top
    
    $('.scroll-top').on('click', function () {
            
        $('html, body').animate({ scrollTop: 0 }, 600);
            
    });
	
	// Smoothly Scroll To Element
	
	$('.navbar li a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
			
		}, 1000);
		
	});
    
    // Add active class on Navbar link and remove from siblings
    
    $('.navbar li a').click(function () {
        
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        
    });
    
});