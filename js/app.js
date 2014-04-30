(function($){
	$(document).ready(function() {

	var toggleAnything = function(className){
		$(className).toggle();
	};

	$('.ryu').bind('mouseenter mouseleave',function(){
		toggleAnything('.ryu-still,.ryu-ready');
	});

	$('.ryu').bind('mousedown mouseup',function(){
		toggleAnything('.ryu-ready,.ryu-throwing');
	})

	.mousedown(function(){
		playHadouken();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1000px'},
			750,
			function() {
				$(this).hide();
				$(this).css('left', '475px');
		});
	});

	$(document).keydown(function(event) {
		// user presses x
		if(event.which === 88) {
			console.log('test keydown '+ event.which);
			$('.ryu-still,.ryu-ready,.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	});

	$(document).keyup(function(event) {
		// user releases x
		if(event.which === 88) {
			console.log('test up '+ event.which);
			$('.ryu-still').show();
			$('.ryu-cool').hide();
		}
	});

	function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.05;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	});

})(jQuery);

