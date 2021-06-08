
//   var winh= $(window).height();
//   $('.allpage , .carousel-item').height(winh)
//   });


// start menu 



(function($){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
})(jQuery)

// (function ($) {
//     $.fn.bootnavbar = function () {
//         $(this).find('.dropdown').click(function () {
//             $(this).addClass('show');
//             $(this).find('.dropdown-menu').first().addClass('show').addClass('animated fadeIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
//                 $(this).removeClass('animated fadeIn');
//             });
//         }, function () {
//             $(this).removeClass('show');
//             $(this).find('.dropdown-menu').first().removeClass('show');
//         });
//     };
// })(jQuery);



$(function () {
    $('#main_navbar').bootnavbar();
})

$('.search').on('click', '.open-search', function () {
    $('[name="search"]').toggleClass('show')
});