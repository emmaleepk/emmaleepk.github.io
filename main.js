
$(document).ready(function(){
	var headerOffSet = $('#header').offset().top;

	$(window).scroll(function(){
		var sticky = $('#header');
		var scroll = $(window).scrollTop();

		if(scroll > headerOffSet) sticky.addClass("sticky");
		else sticky.removeClass("sticky");
	})

	$(".items").click(function(){
		$('.info',this).slideToggle("fast");
	});

});

