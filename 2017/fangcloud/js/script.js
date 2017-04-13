$(function() {
	$('.slide-box').unslider({
		autoplay: true,
		arrows: false,
		animation: 'fade'
	});
	var jWindow = $(window);
	var lastScrollHeight = 0;
	jWindow.scroll(function() {
		var scrollHeight = jWindow.scrollTop();
		if (scrollHeight - lastScrollHeight <= 0) {
			$('#header').fadeIn(500);
		} else {
			$('#header').fadeOut(500);
		}
		lastScrollHeight = scrollHeight;

	})
})