/* Common JS */
$(document).ready(function () {

	//for IE9
	svg4everybody();

	// Clear placeholder
	(function () {
		var el = $('input, textarea');
		el.focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');
		});
		el.blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	})();

	(function () {
		var mainSlider = $('.js-main-slider');

		mainSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 10000,
			prevArrow: '<button type="button" class="main-slider__prev slick-prev"><svg class="icon icon-main-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-left"></use></svg></button>',
			nextArrow: '<button type="button" class="main-slider__next slick-next"><svg class="icon icon-main-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-right"></use></svg></button>'
		});
	}());

	(function () {
		var sponsorSlider = $('.js-sponsor-slider');

		sponsorSlider.slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			prevArrow: '<button type="button" class="sponsor-slider__prev slick-prev"><svg class="icon icon-main-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-left"></use></svg></button>',
			nextArrow: '<button type="button" class="sponsor-slider__next slick-next"><svg class="icon icon-main-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-right"></use></svg></button>',
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}());

	(function () {
		var menu = $('.js-menu'),
			menuItem = menu.children('li'),
			menuLink = menuItem.children('span, a'),
			subMenu = menuLink.siblings('ul'),
			subMenuItem = subMenu.children('li');

		menuItem.filter('.is-active').children(menuLink).siblings(subMenu).show();

		menuLink.on('click', function (e) {
			e.preventDefault();
			var _this = $(this);
			if (!_this.parent().find(subMenuItem).hasClass('is-active')) {
				_this.parent().toggleClass('is-active');
				_this.siblings().filter(subMenu).slideToggle();
			}
		});
	}());

	(function () {
		var sliderFor = $('.js-card-for-slider'),
			sliderNav = $('.js-card-nav-slider');

		sliderFor.slick({
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			infinite: false,
			fade: true,
			asNavFor: sliderNav,
			prevArrow: '<button type="button" class="card-slider__for-prev slick-prev"><svg class="icon icon-main-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-left"></use></svg></button>',
			nextArrow: '<button type="button" class="card-slider__for-next slick-next"><svg class="icon icon-main-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-right"></use></svg></button>'
		});

		sliderNav.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: sliderFor,
			dots: false,
			infinite: false,
			arrows: false,
			focusOnSelect: true
		});
	}());

	(function () {
		var numberControlEl = $('.js-number-control'),
			nav = $('.js-nav'),
			hamburger = $('.js-hamburger'),
			menu = $('.js-menu'),
			menuToggle = $('.js-menu-toggle');

		numberControlEl.bootstrapNumber();

		hamburger.on('click', function () {
			$(this).toggleClass('is-active');
			nav.toggleClass('is-active');
			$('body').toggleClass('is-locked');
		});

		$(window).resize(function () {
			hamburger.removeClass('is-active');
			nav.removeClass('is-active');
			$('body').removeClass('is-locked');
		});

		if (menu.length) {
			initMobileAside();
			menuToggle.on('click', function () {
				$(this).toggleClass('is-fixed');
				menu.slideToggle();
			});
			$(window).resize(function () {
				initMobileAside();
			});
			function initMobileAside() {
				if ($(window).width() < 1024) {
					if (!menu.hasClass('is-fixed')) {
						menu.css('display', 'none');
					}
					menu.addClass('is-fixed');
				} else {
					if (menu.hasClass('is-fixed')) {
						menu.css('display', 'block');
					}
					menu.removeClass('is-fixed');
				}
			}
		}

	}());

	(function () {
		var cardSlider = $('.js-card-slider');

		initSlider(cardSlider);

		function initSlider(slider) {
			initSlickSlider(slider);
			toggleSlider(1080, slider);
			$(window).resize(function () {
				toggleSlider(1080, slider);
			});

			function toggleSlider(breakpoint, slider) {
				if ($(window).width() < breakpoint) {
					if (!slider.hasClass('slick-initialized')) {
						initSlickSlider(slider);
					}
				} else {
					slider.slick('unslick');
				}
			}

			function initSlickSlider(slider) {
				slider.slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow: '<button type="button" class="card-list__prev slick-prev"><svg class="icon icon-main-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-left"></use></svg></button>',
					nextArrow: '<button type="button" class="card-list__next slick-next"><svg class="icon icon-main-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-main-arrow-right"></use></svg></button>',
					responsive: [
						{
							breakpoint: 1080,
							settings: {
								slidesToShow: 2
							}
						},
						{
							breakpoint: 639,
							settings: {
								slidesToShow: 1
							}
						}
					]
				});
			}
		}
	}());

});