$(document).ready(function() {

var stillToggle = function(){
	$('.ryu-still').toggle();
}

var readyToggle = function(){
	$('.ryu-ready').toggle();
}

var throwingToggle = function(){
	$('.ryu-throwing').toggle();
}

var hadoukenThrow = function (){
	hadouken = $('.hadouken');
	hadouken.show();

}

$('.ryu').bind('mouseenter mouseleave',function(){
	stillToggle();
	readyToggle();
});

$('.ryu').bind('mousedown mouseup',function(){
	readyToggle();
	throwingToggle();
});

$('.ryu').mousedown(function(){
	hadoukenThrow();
});


// $('.ryu').mousedown(function(){
// 	console.log('mousedown');
// 	$('.ryu-ready').toggle();
// 	$('.ryu-throwing').toggle();
// 	$('.hadouken').toggle();
// });

// $('.ryu').mouseup(function(){
// 	$('.ryu-ready').toggle();
// 	$('.ryu-throwing').toggle();
// 	$('.hadouken').toggle();
// });

});