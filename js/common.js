$(function () {

	// masks
	$(".phone").mask("+99 999 99 99");

	// mobile menu
	if ($(window).width() <= 768) {
		// Mobile Menu
		var burger = $('#burgerBtn');
		var mobileMenuBlock = $('.header-nav');

		burger.on('change', function () {
			mobileMenuBlock.toggleClass('show');
		});

		$(document).on('click', function (e) {
			var target = e.target;
			if (!target.closest('.burger') && !$(target).closest(".header-nav").length) {
				burger.prop('checked', false);
				mobileMenuBlock.removeClass('show');
			}
		});
	}
	
	$("body").mCustomScrollbar({
		axis: "y",
		theme: "dark",
		scrollInertia: 50
	});
	
	
});