$(document).ready(function(){


	$('.bottom-slider-wrap').slick({
		dots: true,
	 prevArrow: `<span class="arrow-left arrows"></span>`,
nextArrow: `<span class="arrow-right arrows"></span>`
	});

// 		$(".menu__right-col a").on("click", function(event) {
// 			event.preventDefault();
// 			var block = event.target.hash;

// 			var blockOffset = $(block).offset().top;

// 			$("html, body").animate({
// 				scrollTop: blockOffset
// 			}, 1000);
// 		});
// 		$(".go-form").on("click", function(event) {
// 			event.preventDefault();
// 			var block = event.target.hash;

// 			var blockOffset = $(block).offset().top;

// 			$("html, body").animate({
// 				scrollTop: blockOffset
// 			}, 1000);
// 		});

// function showMore(items, stepED, buttonClass) {
// 	let data = Array.from(document.querySelectorAll(`${items}`)),
//     step = stepED,
//     item = 0;
// 	data.slice(step).forEach(e => e.style.display = 'none');
// 	item += step;

// 	document.querySelector(`${buttonClass}`).addEventListener('click', function(e){
// 	let tmp = data.slice(item, item + step);

// 	tmp.forEach(e => e.style.display = 'block');

// 	item += step;
// 		if(tmp.length < stepED)
// 	    this.remove();
// 	});
// }

// showMore('.vb__item', 3, '.more-video');
// showMore('.oc__item', 6, '.more-case');
});

