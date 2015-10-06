$(function() {

	$('.login-test').click(function() {
		window.location="exams.html";
	});

	$(document).on('keydown', function(e) {
		//console.log(e.which); //left:37, right:39
		switch (e.which) {
			case 37:
				$('#slideshow').carousel('prev');
				break;
			case 39:
				$('#slideshow').carousel('next');
				break;
		}
	});

});