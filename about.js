$(document).ready(function() {

	$("#fade").animate({ opacity: 0 }, 1000, function() { $("#fade").remove() });
	setTimeout(function() { $("nav, .panel, .card, .panel-heading").animate({ opacity: 1 }, 1000) }, 1000);

});