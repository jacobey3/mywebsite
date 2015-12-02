$(document).ready(function(){

	$("#scrolltop-container").click(function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	// $("#scrolldown-container").click(function() {
	// 	$('html, body').animate({scrollTop: target.offset().top}, 1000);
	// });


	// $("#center-image-overlay").hover(function() {
	// 	if ($("#center-image1").hasClass("active")) {
	// 		$("#right-arrow-container").removeClass("inactive");
	// 		$("#right-arrow-container").addClass("active");
	// 	} else if ($("center-image2").hasClass("active")) {
	// 		$("#left-arrow-container").removeClass("inactive");	
	// 		$("#right-arrow-container").removeClass("inactive");
	// 		$("#left-arrow-container").addClass("active");
	// 		$("#right-arrow-container").addClass("active");
	// 	} else {
	// 		$("#left-arrow-container").removeClass("inactive");
	// 		$("#left-arrow-container").addClass("active");
	// 	}
	// });

	// /* Hide arrows when not in center container */
	// $("#navbar-container").hover(function() {
	// 	$("#left-arrow-container").removeClass("active");
	// 	$("#right-arrow-container").removeClass("active");
	// 	$("#left-arrow-container").addClass("inactive");
	// 	$("#right-arrow-container").addClass("inactive");
	// });

	// $("#main-container").hover(function() {
	// 	$("#left-arrow-container").removeClass("active");
	// 	$("#right-arrow-container").removeClass("active");
	// 	$("#left-arrow-container").addClass("inactive");
	// 	$("#right-arrow-container").addClass("inactive");
	// });

	// $("#footer-container").hover(function() {
	// 	$("#left-arrow-container").removeClass("active");
	// 	$("#right-arrow-container").removeClass("active");
	// 	$("#left-arrow-container").addClass("inactive");
	// 	$("#right-arrow-container").addClass("inactive");
	// });

	// $("#right-arrow-container").click(function() {
	// 	if ($("#center-image1").hasClass("active")) {

	// 		$("#center-image2").removeClass("inactive");
	// 		$("#center-image2").addClass("active");
	// 		$("#center-caption2").addClass("active");
	// 		$("#center-caption2").removeClass("inactive");
	// 		$("#main-text-header2").removeClass("inactive");
	// 		$("#main-text-header2").addClass("active");
	// 		$("#main-text2").removeClass("inactive");
	// 		$("#main-text2").addClass("active");

	// 		$("#center-image1").removeClass("active");
	// 		$("#center-image1").addClass("inactive");
	// 		$("#center-caption1").removeClass("active");
	// 		$("#center-caption1").addClass("inactive");
	// 		$("#main-text-header1").addClass("inactive");
	// 		$("#main-text-header1").removeClass("active");
	// 		$("#main-text1").addClass("inactive");
	// 		$("#main-text1").removeClass("active");
	// 	} else {
	// 		$("#center-image3").removeClass("inactive");
	// 		$("#center-image3").addClass("active");
	// 		$("#center-caption3").addClass("active");
	// 		$("#center-caption3").removeClass("inactive");
	// 		$("#main-text-header3").removeClass("inactive");
	// 		$("#main-text-header3").addClass("active");
	// 		$("#main-text3").removeClass("inactive");
	// 		$("#main-text3").addClass("active");

	// 		$("#center-image2").removeClass("active");
	// 		$("#center-image2").addClass("inactive");
	// 		$("#center-caption2").removeClass("active");
	// 		$("#center-caption2").addClass("inactive");
	// 		$("#main-text-header2").addClass("inactive");
	// 		$("#main-text-header2").removeClass("active");
	// 		$("#main-text2").addClass("inactive");
	// 		$("#main-text2").removeClass("active");
	// 	}
	// });

	// $("left-arrow-container").click(function() {
	// 	if ($("#center-image2").hasClass("active")) {
	// 		$("#center-image2").addClass("inactive");
	// 		$("#center-image2").removeClass("active");
	// 		$("#center-caption2").removeClass("active");
	// 		$("#center-caption2").addClass("inactive");
	// 		$("#main-text-header2").addClass("inactive");
	// 		$("#main-text-header2").removeClass("active");
	// 		$("#main-text2").addClass("inactive");
	// 		$("#main-text2").removeClass("active");

	// 		$("#center-image1").addClass("active");
	// 		$("#center-image1").removeClass("inactive");
	// 		$("#center-caption1").addClass("active");
	// 		$("#center-caption1").removeClass("inactive");
	// 		$("#main-text-header1").addClass("active");
	// 		$("#main-text-header1").removeClass("inactive");
	// 		$("#main-text1").addClass("active");
	// 		$("#main-text1").removeClass("inactive");
	// 	} else {
	// 		$("#center-image3").addClass("inactive");
	// 		$("#center-image3").removeClass("active");
	// 		$("#center-caption3").removeClass("active");
	// 		$("#center-caption3").addClass("inactive");
	// 		$("#main-text-header3").addClass("inactive");
	// 		$("#main-text-header3").removeClass("active");
	// 		$("#main-text3").removeClass("active");
	// 		$("#main-text3").addClass("inactive");

	// 		$("#center-image2").addClass("active");
	// 		$("#center-image2").removeClass("inactive");
	// 		$("#center-caption2").addClass("active");
	// 		$("#center-caption2").removeClass("inactive");
	// 		$("#main-text-header2").addClass("active");
	// 		$("#main-text-header2").removeClass("inactive");
	// 		$("#main-text2").addClass("active");
	// 		$("#main-text2").removeClass("inactive");
	// 	}
	// });

});
