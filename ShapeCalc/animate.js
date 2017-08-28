var initialHeight = 50,
	 expandedHeight,
	 tl = new TimelineMax(),
	 icons = [".labelIcon.blog", ".labelIcon.portfolio", ".labelIcon.about", ".labelIcon.contact"],
	 labels = [".icon.blog", ".icon.portfolio", ".icon.about", ".icon.contact"];

$(document).ready(function(){
	expandedHeight = $(".dropdown").outerHeight();
	$(".dropdown").css("height", initialHeight);
});

$("ul.dropdown").hover(
	function(){
		$("button.hamburger").addClass("is-active");
		tl.to($(".dropdown"), 1.5, {"height": expandedHeight, ease: Power4.easeInOut})
			.add(TweenMax.staggerTo(icons, 1, {opacity: 1, scale: 1, ease:Power4.easeInOut}, 0.2), 0)
			.add(TweenMax.staggerTo(labels, 1, {opacity: 1, scale: 1, ease:Power4.easeInOut}, 0.2), 0);
			tl.play();
	}, function(){
		tl.reverse();
		$("button.hamburger").removeClass("is-active");
});

$("span.icon:not(.hamburger)").hover(
	function(){TweenMax.to($(this), 0.2, {scale: 2, ease:Power4.easeInOut});},
	function(){TweenMax.to($(this), 0.2, {scale: 1, ease:Power4.easeInOut});}
);