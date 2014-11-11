$(document).ready( function() {

	$(".card-action").hover( function() {
		var dayColor = $(this).css("background-color")
		$("body").css("background-color", dayColor)
		$("footer a").css("color", dayColor)
		console.log(dayColor)
	})

})