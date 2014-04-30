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

	function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.05;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	});

})(jQuery);

