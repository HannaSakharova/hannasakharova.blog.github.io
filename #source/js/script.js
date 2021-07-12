$(document).ready(function () {
	//Function to detect WEBP support
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	//Check the devise
	var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	if (isMobile.any()) {
		document.body.classList.add('_touch');

		let menuArrows = document.querySelectorAll('.arrow-down');
		if (menuArrows.length > 0) {
			for (let index = 0; index < menuArrows.length; index++) {
				const menuArrow = menuArrows[index];
				menuArrow.addEventListener('click', function () {
					menuArrow.parentElement.classList.toggle('_active-menu');
				});
			}
		}

	} else {
		document.body.classList.add('_pc');
	}

	if (location.hash) {
		var hsh = location.hash.replace('#', '');
		if ($('.popup-' + hsh).length > 0) {
			popupOpen(hsh);
		} else if ($('div.' + hsh).length > 0) {
			$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
		}
	}
	$('.wrapper').addClass('loaded');

	//Menu burger
	let iconMenu = document.querySelector(".icon-menu");
	let body = document.querySelector("body");
	let menuBody = document.querySelector(".menu__body");
	if (iconMenu) {
		iconMenu.addEventListener("click", function () {
			iconMenu.classList.toggle("active");
			body.classList.toggle("lock");
			menuBody.classList.toggle("active");
		});
	}

	//Show input-search
	let btnSearch = document.querySelector('.search-btn');
	let inputSearch = document.querySelector('.search-input');
	let arrowInput = document.querySelector('.triangle-search');
	btnSearch.addEventListener('click', () => {
		btnSearch.classList.toggle('search-btn__active');
		inputSearch.classList.toggle('search-input__active');
		arrowInput.classList.toggle('triangle-search__active');
	});

	//Sliders
	$('.home__slider').slick({
		dots: true,
		easing: 'ease',
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		draggable: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					autoplay: false
				}
			}
		]
	});
	$('.home__clients-body').slick({
		dots: false,
		easing: 'ease',
		draggable: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1184,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 558,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 370,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});
	$('.project__slider-content').slick({
		dots: true,
		easing: 'ease',
		draggable: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	});
	$('.projects__slider-body').slick({
		dots: false,
		easing: 'ease',
		draggable: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
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
		]
	});
	$('.blog-single__slider').slick({
		dots: true,
		easing: 'ease',
		draggable: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}
		]
	});

	//For svg image
	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			var $svg = $(data).find('svg');
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

	//Charts
	let circleOne = Circles.create({
		id: 'circles-suspendisse',
		radius: 60,
		value: 50,
		maxValue: 100,
		width: 15,
		text: function (value) { return value; },
		colors: ['#76c7c0', '#e2534b'],
		duration: 600,
		wrpClass: 'circles-wrp',
		textClass: 'circles-text',
		valueStrokeClass: 'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper: true,
		styleText: true
	});
	let circleTwo = Circles.create({
		id: 'circles-maecenas',
		radius: 60,
		value: 70,
		maxValue: 100,
		width: 15,
		text: function (value) { return value; },
		colors: ['#76c7c0', '#e2534b'],
		duration: 600,
		wrpClass: 'circles-wrp',
		textClass: 'circles-text',
		valueStrokeClass: 'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper: true,
		styleText: true
	});
	let circleThree = Circles.create({
		id: 'circles-aliquam',
		radius: 60,
		value: 80,
		maxValue: 100,
		width: 15,
		text: function (value) { return value; },
		colors: ['#76c7c0', '#e2534b'],
		duration: 600,
		wrpClass: 'circles-wrp',
		textClass: 'circles-text',
		valueStrokeClass: 'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper: true,
		styleText: true
	});
	let circleFour = Circles.create({
		id: 'circles-habitasse',
		radius: 60,
		value: 100,
		maxValue: 100,
		width: 15,
		text: function (value) { return value; },
		colors: ['#76c7c0', '#e2534b'],
		duration: 600,
		wrpClass: 'circles-wrp',
		textClass: 'circles-text',
		valueStrokeClass: 'circles-valueStroke',
		maxValueStrokeClass: 'circles-maxValueStroke',
		styleWrapper: true,
		styleText: true
	});

	//Change the color of the active menu-link
	$('ul.menu__list a').each(function () {
		if (this.href == location.href) $(this).parent().addClass('active-link');
	});

	//Tabs
	$('.tabs-triggers__link').click(function (e) {
		e.preventDefault();

		$('.tabs-triggers__link').removeClass('tabs-triggers__link--active');
		$('.tabs-content__items').removeClass('tabs-content__items--active');

		$(this).addClass('tabs-triggers__link--active');
		$($(this).attr('href')).addClass('tabs-content__items--active');
	});
	$('.tabs-triggers__link:first').click();
});