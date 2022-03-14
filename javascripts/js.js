// Вылетает менюшка
$(document).ready(function() {
$('a.button').click( function(event){
event.preventDefault();
$('#myOverlay').fadeIn(297,function(){
      $('#myModal')
      .css('display', 'block')
      .animate({opacity: 1}, 198);
});
});

$('#myModal__close').click( function(){
$('#myModal').animate({opacity: 0}, 198,
      function(){
        $(this).css('display', 'none');
        $('#myOverlay').fadeOut(297);
});
});
});
// кнопки в менюшке
$(document).ready(function(){
  $('#show').click(function(){
    event.preventDefault();

    $('#img1').toggle();
    if($("#img1").is(':visible'))
      $("#img2").hide();
    else
      $("#img2").show();
  });
});
$(document).ready(function(){
  $('#show2').click(function(){
    event.preventDefault();

    $('#img1').toggle();
    if($("#img1").is(':visible'))
      $("#img2").hide();
    else
      $("#img2").show();
  });
});
$(document).ready(function(){
  $('#show3').click(function(){
    event.preventDefault();

    $('#img1').toggle();
    if($("#img1").is(':visible'))
      $("#img2").hide();
    else
      $("#img2").show();
      
  });
});
