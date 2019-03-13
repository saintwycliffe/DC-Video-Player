$(document).ready(function() {

  $('body').fadeIn(2000);

	const socket = io();
	$('.yolo').click(function(){
		event.preventDefault();
		$('.b-container').fadeOut(1000, function(){
			socket.emit('create');
		});
	})
	socket.on('gohome', function(){
		$('.b-container').fadeIn();
	})

});
