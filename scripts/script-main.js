$(document).ready(function() {
  var $box = $('#box');
  var totalHeight = 700;
  create(10);
  $('#enter').on('click', function() {
    clean();
    pixels = $(this).parent().find('#pixel-input').val();
    create(pixels);

  });



  function create(pixels) {
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

    $('.pixel').on('mouseenter', function() {
      $(this).addClass('touched');
      var value = parseFloat($(this).css("opacity"));
        if(value<1){
          value += 0.2;
          $(this).css("opacity", value);
        }
    });

    $('#clear').on('click', function() {
      $pixel.removeClass('touched');
    });


  }

  function clean() {
    var $parent = $('.pixel').parent();

    $('.pixel').removeClass('pixel').removeClass('touched');
    $('.pixel').removeClass('touched');
    $parent.empty();
  }


});
