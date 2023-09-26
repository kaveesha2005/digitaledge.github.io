(function($) {
	
	"use strict";
	
	
 	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	
 	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	
	
	
 	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa-solid fa-chevron-down fa-fw"></span></div>');
		
 		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
 		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		$('.xs-sidebar-group .close-button').on('click', function(e) {
			$('.xs-sidebar-group.info-group').removeClass('isActive');
		});
		
	}
	
	
 	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
 		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
 		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}
	
	
	
	
 	if($('.mobile-menu').length){
		
 		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
 		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');
			
			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

 		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');
			
			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

 		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});

 		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });
		
	}
	
	
	
	
 	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,             
			  factorLg: 0.4,           
			  type: 'foreground',      
			  direction: 'horizontal' 
		});
	}
	
	
	
	
 
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
 
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	
	
	 
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	
	
	 
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			 
			loop:true,
			margin:0,
			nav:true,
			 
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}
	
	
	 
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			 
			loop:true,
			margin:30,
			nav:true,
			 
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				650:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	
	
	 
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			 
			loop:true,
			margin:0,
			nav:true,
			 
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	
	 
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			 
			loop:true,
			margin:30,
			nav:true,
			 
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}
	
	
	
	 
	if ($('.case-carousel').length) {
		$('.case-carousel').owlCarousel({
			 
			loop:true,
			margin:30,
			nav:true,
			 
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});
	}
	
	
	
	
	 
	if ($('.case-carousel-two').length) {
		$('.case-carousel-two').owlCarousel({
			 
			loop:true,
			margin:30,
			nav:true,
			 
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}
	
	
	
	
	 
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			 
			loop:true,
			margin:0,
			nav:true,
			 
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	
	
	
 	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:2
				},
				480:{
					items:3
				},
				600:{
					items:3
				},
				800:{
					items:5
				},
				1024:{
					items:5
				}
			}
		});    		
	}
	
	
 	if ($('.sponsors-carousel-two').length) {
		$('.sponsors-carousel-two').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:2
				},
				480:{
					items:3
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:4
				}
			}
		});    		
	}
	
	
	
	
	
 	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function(){
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}
	
	
	
 	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	
	 
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	
	
	
 	if($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	}
	
	
	
 	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
 	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}
	
	
	
 	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				phone: {
					required: true
				},
				services: {
					required: true
				},
				email: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	
 	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
 		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
 	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',       
			animateClass: 'animated',  
			offset:       0,           
			mobile:       true,        
			live:         true        
		  }
		);
		wow.init();
	}
	

 
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
 
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);