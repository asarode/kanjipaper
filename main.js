$(document).ready( function() {

	$(".card-action").hover( function() {
		var dayColor = $(this).css("background-color")
		$("body").css("background-color", dayColor)
		$("footer a").css("color", dayColor)
		console.log(dayColor)
	})

	$(".card-wallpaper").hide()
})

$(window).load(function() {
    $(".card-wallpaper").each(function(i) {
       $(this).delay((i + 1) * 50).fadeIn();
    });
});