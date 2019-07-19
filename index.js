$(document).ready(function() {

	$("#fade").animate({ opacity: 0 }, 1000, function() { $("#fade").remove() });
	setTimeout(function() { $("nav, .quote, .banner").animate({ opacity: 1 }, 1000); setTimeout(slideshow, 5000) }, 1000);

});

var counter = 1;
var data = [["37.5%", "Hong Kong<br>Technology Challenge", "rgb(115, 11, 189)", "View Event >"], ["37.5%"], ["37.5%", "ASIJ Robotics<br>Challenge", "rgb(179, 245, 66)", "View Event >"], ["37.5%", "VEX Team 936A<br>\"Actinium\"", "rgb(31, 68, 255)", "Meet the Team >"] , ["37.5%", "VEX Team 936B<br>\"Boonkgang\"", "rgb(204, 50, 33)", "Meet the Team >"]];
for (var i = 0; i < data.length; i++) {

	if (i == 1) { continue }
	$(".container-fluid").prepend("<div class = 'banner p-4' id = 'slideshow_" + (i + 1) + "' style = 'background-color: " + data[i][2] + " !important'><h5 class = 'head mb-3'>" + data[i][1] + "</h5><p class = 'mb-0'><button class = 'btn btn-primary btn-sm head' style = 'border-radius: 0'>" + data[i][3] + "</button></p></div>");
	if (i != 0) {

		$("#slideshow_" + (i + 1)).hide();

	}

}
$("#slideshow_1").addClass("active");
function slideshow() {

	counter = (counter == 5) ? 1 : counter + 1;
	if (counter == 2) { counter++ }
	$("body").css("background-image", "url(img/" + counter + ".jpg)");
	$("body").css("background-position", "center " + data[counter - 1][0]);
	$(".banner.active").fadeOut(1000);
	$(".banner.active").removeClass("active");
	$(".banner#slideshow_" + counter).addClass("active");
	$(".banner#slideshow_" + counter).fadeIn(1000);
	setTimeout(slideshow, 5000);

}