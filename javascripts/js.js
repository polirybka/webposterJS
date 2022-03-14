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
// $(document).ready(function(){
//   $('#show').click(function(){
//     event.preventDefault();
//
//     $('#img1').toggle();
//     if($("#img1").is(':visible'))
//       $("#img2").hide();
//     else
//       $("#img2").show();
//   });
// });
// $(document).ready(function(){
//   $('#show2').click(function(){
//     event.preventDefault();
//
//     $('#img1').toggle();
//     if($("#img1").is(':visible'))
//       $("#img2").hide();
//     else
//       $("#img2").show();
//   });
// });
// $(document).ready(function(){
//   $('#show3').click(function(){
//     event.preventDefault();
//
//     $('#img1').toggle();
//     if($("#img1").is(':visible'))
//       $("#img3").hide();
//     else
//       $("#img3").show();
//
//   });
// });
$(document).ready(function(){
	$('.butt_1').click(function(){
	$('.big_fuck').attr('src', './img/big_window.svg');
	})
	$('.butt_2').click(function(){
	$('.big_fuck').attr('src', './img/big_window_2.svg');
	})
	$('.butt_3').click(function(){
	$('.big_fuck').attr('src', './img/big_window_3.svg');
});
});
const cards = document.querySelectorAll('.imp');
function flipCard() {
this.classList.toggle('.flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));
