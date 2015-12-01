$(document).ready(function(){

	$("#center-image-overlay").hover(function() {
		if ($("#center-image1").hasClass("active")) {
			$("#right-arrow-container").removeClass("inactive");
			$("#right-arrow-container").addClass("active");
		} else if ($("center-image2").hasClass("active")) {
			$("#left-arrow-container").removeClass("inactive");
			$("#right-arrow-container").removeClass("inactive");
			$("#left-arrow-container").addClass("active");
			$("#right-arrow-container").addClass("active");
		} else {
			$("#left-arrow-container").removeClass("inactive");
			$("#left-arrow-container").addClass("active");
		}
	});

	/* Hide arrows when not in center container */
	$("#navbar-container").hover(function() {
		$("#left-arrow-container").removeClass("active");
		$("#right-arrow-container").removeClass("active");
		$("#left-arrow-container").addClass("inactive");
		$("#right-arrow-container").addClass("inactive");
	});

	$("#main-container").hover(function() {
		$("#left-arrow-container").removeClass("active");
		$("#right-arrow-container").removeClass("active");
		$("#left-arrow-container").addClass("inactive");
		$("#right-arrow-container").addClass("inactive");
	});

	$("#footer-container").hover(function() {
		$("#left-arrow-container").removeClass("active");
		$("#right-arrow-container").removeClass("active");
		$("#left-arrow-container").addClass("inactive");
		$("#right-arrow-container").addClass("inactive");
	});

	$("#right-arrow-container").click(function() {
		if ($("#center-image1").hasClass("active")) {

			$("#center-image2").removeClass("inactive");
			$("#center-image2").addClass("active");
			$("#center-caption2").addClass("active");
			$("#center-caption2").removeClass("inactive");
			$("#main-text-header2").removeClass("inactive");
			$("#main-text-header2").addClass("active");
			$("#main-text2").removeClass("inactive");
			$("#main-text2").addClass("active");

			$("#center-image1").removeClass("active");
			$("#center-image1").addClass("inactive");
			$("#center-caption1").removeClass("active");
			$("#center-caption1").addClass("inactive");
			$("#main-text-header1").addClass("inactive");
			$("#main-text-header1").removeClass("active");
			$("#main-text1").addClass("inactive");
			$("#main-text1").removeClass("active");
		} else {
			$("#center-image3").removeClass("inactive");
			$("#center-image3").addClass("active");
			$("#center-caption3").addClass("active");
			$("#center-caption3").removeClass("inactive");
			$("#main-text-header3").removeClass("inactive");
			$("#main-text-header3").addClass("active");
			$("#main-text3").removeClass("inactive");
			$("#main-text3").addClass("active");

			$("#center-image2").removeClass("active");
			$("#center-image2").addClass("inactive");
			$("#center-caption2").removeClass("active");
			$("#center-caption2").addClass("inactive");
			$("#main-text-header2").addClass("inactive");
			$("#main-text-header2").removeClass("active");
			$("#main-text2").addClass("inactive");
			$("#main-text2").removeClass("active");
		}
	});

	$("left-arrow-container").click(function() {
		if ($("#center-image2").hasClass("active")) {
			$("#center-image2").addClass("inactive");
			$("#center-image2").removeClass("active");
			$("#center-caption2").removeClass("active");
			$("#center-caption2").addClass("inactive");
			$("#main-text-header2").addClass("inactive");
			$("#main-text-header2").removeClass("active");
			$("#main-text2").addClass("inactive");
			$("#main-text2").removeClass("active");

			$("#center-image1").addClass("active");
			$("#center-image1").removeClass("inactive");
			$("#center-caption1").addClass("active");
			$("#center-caption1").removeClass("inactive");
			$("#main-text-header1").addClass("active");
			$("#main-text-header1").removeClass("inactive");
			$("#main-text1").addClass("active");
			$("#main-text1").removeClass("inactive");
		} else {
			$("#center-image3").addClass("inactive");
			$("#center-image3").removeClass("active");
			$("#center-caption3").removeClass("active");
			$("#center-caption3").addClass("inactive");
			$("#main-text-header3").addClass("inactive");
			$("#main-text-header3").removeClass("active");
			$("#main-text3").removeClass("active");
			$("#main-text3").addClass("inactive");

			$("#center-image2").addClass("active");
			$("#center-image2").removeClass("inactive");
			$("#center-caption2").addClass("active");
			$("#center-caption2").removeClass("inactive");
			$("#main-text-header2").addClass("active");
			$("#main-text-header2").removeClass("inactive");
			$("#main-text2").addClass("active");
			$("#main-text2").removeClass("inactive");
		}
	});

});


// $(document).ready(function() {

//   // QUESTION 6
//   $("#sidebar-button").click(function() {
//     if ($(".sidebar-container").hasClass("sidebar-active")) {
//       $("body").removeClass("no-scroll");
//       $("#sidebar-button").removeClass("button-active");
//       $(".sidebar-container").removeClass("sidebar-active");
//       $(".page-wrapper").removeClass("wrapper-active");
//     } else {
//       $("#sidebar-button").addClass("button-active");
//       $(".sidebar-container").addClass("sidebar-active");
//       $(".page-wrapper").addClass("wrapper-active");
//       setTimeout(function() {
//         $("body").addClass("no-scroll");
//       }, 300);
//     }
//   });

//   //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

//   // QUESTION 7
//   $(".page-wrapper").click(function(){
//     if ($(".sidebar-container").hasClass("sidebar-active")) {
//       $("body").removeClass("no-scroll");
//       $("#sidebar-button").removeClass("button-active");
//       $(".sidebar-container").removeClass("sidebar-active");
//       $(".page-wrapper").removeClass("wrapper-active");
//     }
//   });

//   //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

//   // QUESTION 8

//   //Implement the "slide to left" when the user clicks on #carousel-next here
//   $("#carousel-next").click(function(){
//     var curr_margin_left = parseInt($('#carousel').css('margin-left').replace("px", ""));
//     if (curr_margin_left == -3840) {
//       return false;
//     } else {
//       $("#carousel").css("margin-left", curr_margin_left - 960);
//     }
//   });

  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function(){
    var curr_margin_left = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (curr_margin_left == 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", curr_margin_left + 960);
    }
  });


//   //THIS IS NOT A REQUIRED QUESTION 
//   // EXTRA FOR EXPERTS 

//   // Implement a "smooth scroll" when the user clicks on the sidebar links here

// });