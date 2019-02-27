$(document).ready(function() {

  $('body').fadeIn(2000);

  $('.yolo').click(function() {
    event.preventDefault();
    $('body').fadeOut(1000, callVid);
  });

  function callVid() {
    $.ajax({
      type: 'POST',
      url: '/',
      complete: function() {
        $('body').fadeIn();
      }
    }); 
  }

});
