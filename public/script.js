$(document).ready(function() {

  $('body').fadeIn(2000);

  $('.yolo').click(function() {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(1000, newpage);
  });

  function newpage() {
    window.location.href = "/playvid";
  }

});
