$( document ).ready(function() {
	$(".banner-list").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
	arrows:true,
	autoplay:true,
	speed:800,
	autoplaySpeed: 3000
  });

	$('.sldr-list').slick({
	  dots: false,
	  infinite: true,
	  speed: 600,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows:true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
  
  $('.acc-list li.acc-item h4').click(function() {
		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.acc-list li.acc-item h4').removeClass('active');
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.acc-content').slideUp('normal');
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('active');
			//OPEN THE SLIDE
			$(this).next().slideToggle('normal');
	 }
	 });
  
  $("#nav-icon").click(function (e) {
	$(this).toggleClass("open"), 
	$("div.nav-wrap").toggleClass("active")
	});
	
  $(".next-page").click(function(){
		var currentScreen = $(this).closest(".page");
		currentScreen.removeClass("coming-in");
		currentScreen.addClass("going-out");
		$(currentScreen).next(".page").addClass("coming-in");
		setTimeout(function()
			{ 
				currentScreen.addClass("hide");
			}, 1000);
		return false;
	});

	$(".next-step").click(function(){
		var currentStep = $(this).closest(".step");
		currentStep.removeClass("step-in");
		$(currentStep).removeClass("step-back");
		$(currentStep).prev(".step").removeClass("step-back");
		currentStep.addClass("step-out");
		$(currentStep).next(".step").addClass("step-in");
		setTimeout(function()
			{ 
				currentStep.addClass("hide");
			}, 1000);
		return false;
	});

	$(".prev-step").click(function(){
		var currentStep = $(this).closest(".step");
		$(currentStep).prev(".step").removeClass("hide");
		$(currentStep).prev(".step").removeClass("step-out");
		$(currentStep).prev(".step").addClass("step-back");
		$(currentStep).removeClass("step-back");
		$(currentStep).removeClass("step-in");
		setTimeout(function()
			{ 
				currentStep.removeClass("hide");
			}, 1000);
		return false;
	});
  
  $(".jumper").on("click", function( e ) {
		e.preventDefault();
		$("body, html").animate({ 
			scrollTop: $( $(this).attr('href')).offset().top - 124
		}, 600); 
	});
  
  	$('.lft-drawer').click(function(){
		$(".lft-drawer").toggleClass('active');
		$(".left-panel .faq-list").toggleClass('active');
	});

	$(".navbar").click(function(e){
		e.preventDefault();
		$(this).toggleClass("open");
	    $(".nav-wrap").toggleClass("active");
	});
	
	resizeContent();
    $(window).resize(function() {
        resizeContent();
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 0){
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
            if (st <= 0){
                $(".header").removeClass("active");
            } else {
                $(".header").addClass("active");
            }

        }
    lastScrollTop = st;
    });
});

function resizeContent() {
    $height = $(window).height()-0;
    $('body div.home-slider').height($height);
}