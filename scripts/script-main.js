$(document).ready(function() {
  var $box = $('#box');
  var totalHeight = 700;
  var pixels = 100;
  for (var i = 0; i < pixels*pixels; i++) {
    $box.append('<div class="pixel"></div>');
  }

  var $pixel = $('.pixel');
  var height = totalHeight/pixels;
  var margin = height*.01;
  var height = height - (2*margin);
  $pixel.height(height).width(height);
  $pixel.css('margin', margin);
  $pixel.show();
  $pixel.on('mouseenter', function() {
    $(this).addClass('touched');
  });

  $('#clear').on('click', function() {
    $pixel.removeClass('touched');
  });


});
