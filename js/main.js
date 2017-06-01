$(document).ready(function($) {
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	});	

	// Navbar fixed top on top when roll
    var nav = $('.navbar-default');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            nav.addClass("navbar-fixed-top");
            $('.navbar-collapse').css('margin-top',0);
            //responsive screen < 565
            if($(window).width() > 565)
            	$('.company-caption').css('padding-top',231);
            else
            	$('.company-caption').css('padding-top',71);
        } else {
            nav.removeClass("navbar-fixed-top");
            $('.navbar-collapse').css('margin-top',40);
            //responsive screen < 565
            if($(window).width() > 565)
            	$('.company-caption').css('padding-top',125);
            else
            	$('.company-caption').css('padding-top',65);
        }
    });

    $( window ).resize(function() {
      $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
    });

    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });

});