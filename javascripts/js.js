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

// изменение картинок большого окна
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
// const cards = document.querySelectorAll('.imp');
// function flipCard() {
// this.classList.toggle('.flip');
// }
// cards.forEach(card => card.addEventListener('click', flipCard));

// изменение цвета прямоугольников
// var colours=['#C32E2E','#5CA191','#F4D175','#F0BDA7',
// '#BAC9FF','#A5D1A7','#4B644B','#CD6D6D',
// '#A4AC9D','#CEAADF','#FFE3E3','#E5D3A1','#829CAE','#D7A784'];  // List of colors
// var tempID= 1;
// var changeInterval=2000;    // Change interval in miliseconds
// var objectID='#rectengal';
//       // Object to change colours.
//
// $(document).ready(function(){
//     setInterval(function(){
//             $('#rectengal').animate({backgroundColor: colours[tempID]},500);
//             tempID=tempID+1;
//             if (tempID>colours.length-1) tempID=0;
//         },changeInterval);
// });
//
//
// var colours=['#5CA191','#F4D175','#F0BDA7',
// '#BAC9FF','#A5D1A7','#4B644B','#CD6D6D',
// '#A4AC9D','#CEAADF','#FFE3E3','#E5D3A1','#829CAE','#D7A784','#C32E2E'];  // List of colors
// var tempID= 1;
// var changeInterval=2000;    // Change interval in miliseconds
// var objectID='#rectengal1';
//       // Object to change colours.
//
// $(document).ready(function(){
//     setInterval(function(){
//             $('#rectengal1').animate({backgroundColor: colours[tempID]},500);
//             tempID=tempID+1;
//             if (tempID>colours.length-1) tempID=0;
//         },changeInterval);
// });
