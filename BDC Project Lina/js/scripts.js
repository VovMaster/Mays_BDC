$(document).ready(function() {

	try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	new ScrollMagic.Scene({triggerElement: "#parallax1"}).setTween(".parallax-bg", {y: "100%", ease: Linear.easeNone}).addTo(controller);








	if ($('.vertical-slider').length) {
		var clearVerticalAnimate;	

		$('.vertical-slider').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			loop:true,
			dots: false,
			items:1,
			autoplay: true,
			margin:0,
			stagePadding:0,
			mouseDrag: false,
			touchDrag: false,
			smartSpeed:450,
			navText: '',

		});
		$('.vertical-slider').on('changed.owl.carousel', function(event) {
    			$('.top-slide').removeClass('zoomInLeft');
    			$('.bottom-slide').removeClass('zoomInRight');
    		// $('.vertical-slider .owl-controls').hide();
    		setTimeout(function(){
	    		$('.top-slide').addClass('zoomInLeft animated');
	    		$('.bottom-slide').addClass('zoomInRight animated');
    			// $('.vertical-slider .owl-controls').show();
    		}, 100);
		});
	}

	if ($('.horizontal-slider').length) {

		$('.horizontal-slider').owlCarousel({
			nav: true,
			loop:true,
			dots: false,
			items:4,
			margin:0,
			stagePadding:0,
			smartSpeed:450,
			navText: '',
			responsive:{
				0:{
					items:2
				},
				768:{
					items:4
				}
			}
		});

	}

	var wow = null;
	// Elements Animation
	if($('.wow').length){
		wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       50,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();

	}



	$('.button-top').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 500);
	});

	$('.nav-style a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  // e.target // newly activated tab
	  // e.relatedTarget // previous active tab
		grid();
		setTimeout(function(){
			var scrollTop = $(window).scrollTop();
			$(window).scrollTop(scrollTop + 1);
			$(window).scrollTop(scrollTop);
		}, 600);

	});

	$(".fancybox").fancybox();;
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	dropdownHover();


	$('.nav-related-links > ul > li > a').click(function(){
		 if($(this).next().length) {
		 	if($(this).hasClass('active')){
		 		$('.nav-related-links > ul > li > a + ul').parent().removeClass('active');
		 	}else {
		 		$('.nav-related-links > ul > li > a + ul').parent().removeClass('active');
		 		$(this).parent().addClass('active');
		 	}
		 	return false
		 }else {

		 }
	});




});

$(window).load(function(){

	grid();
	if ($('.wrap-block-style .wrap-circle').length) {
		circle();
	}

});

$(window).resize(function(){

	if ($('.wrap-block-style .wrap-circle').length) {
		circle();
	}

});



function circle() {

	$('.wrap-block-style .wrap-circle').each(function(){
		var prevCircle = $(this).prev('.wrap-block-style-info');
		var nextCircle = $(this).next('.wrap-block-style-info');
		if (nextCircle.length && prevCircle.length ) {
			var prevCirclePosition = prevCircle.position().top;
			var nextCirclePosition = nextCircle.position().top;
			console.log(prevCirclePosition);
			var prevCircleHeight = prevCircle.outerHeight() / 2;
			var nextCircleHeight = nextCircle.outerHeight() / 2;


			var topCircle = 10 + ( ( nextCircleHeight + nextCirclePosition + prevCircleHeight + prevCirclePosition) / 2 );
			$(this).css('top', topCircle);
		}
	});
}

function grid(){
	$('.grid').isotope({
		// set itemSelector so .grid-sizer is not used in layout
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		// use element for option
		columnWidth: '.grid-item'
		}
	});
}


function dropdownHover() { 

	var bodyWidth = $(window).width();
	if(bodyWidth > 1050){
		 $(".main-nav .dropdown").hover(
		    function() { $('.dropdown-menu', this).fadeIn("fast");
		    },
		    function() { $('.dropdown-menu', this).fadeOut("fast");
		});
	}

}