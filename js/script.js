jQuery(function($) {
	$('.menu_toggle').click(function(){
		$('.menu_wrapper .navbar-menu.nav').toggleClass('navmenu-open');
	})

	$('.menu_wrapper .navbar-menu.nav > ul > li.nav-item.has-children a i').click(function() {
		$(this).parent().toggleClass('submenu_show').next().slideToggle();
	})

	$('.menu_wrapper .menu_overlay').click(function(){
		$('.menu_wrapper .navbar-menu.nav').removeClass('navmenu-open');
	})

	// Banner Slider
	$('#bannerSlider').owlCarousel({
	    loop:true,
	    margin:10,
	    dots: false,
	    smartSpeed: 1500,
	    autoplaySpeed: 1000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:1,
	            nav:true,
	            loop:false
	        }
	    }
	})

	// Product Slider
	$('#productSlider').owlCarousel({
	    loop:true,
	    margin:30,
	    stagePadding: 15,
	    dots: false,
	    smartSpeed: 1500,
	    autoplaySpeed: 1000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:2,
	            nav:true
	        },
	        1025:{
	            items:3,
	            nav:true,
	            loop:false
	        }
	    }
	})

	// Testimonial Slider
	$('#testimonialSlider').owlCarousel({
	    loop:true,
	    margin:30,
	    stagePadding: 15,
	    dots: false,
	    smartSpeed: 1500,
	    autoplaySpeed: 1000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:true
	        },
	        880:{
	            items:3,
	            nav:true
	        },
	        1025:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	})

})