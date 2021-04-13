
$( document ).ready(function() {
	
		$("#nav-icon").click(function (e) {
		$(this).toggleClass("open");
		$("div.menu-wrap").toggleClass("active");
	});

	var lastScrollTop=0;
	$(window).scroll(function(event) {
		var st=$(this).scrollTop();
		if(st>lastScrollTop&&st>0) {
			$(".header").addClass("fixed");
		}
		else {
		$(".header").removeClass("fixed");
		if(st<=0) {
			$(".header").removeClass("fixed");
		}
		else {
			$(".header").addClass("fixed");
		}
		}
	lastScrollTop=st;
	}
	);

	new WOW().init();
});


 