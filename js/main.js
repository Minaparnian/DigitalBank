$(document).ready(function(){
// add class and remove the class to have animated without refreshing the page
  $('.left').mouseover(function(e) {

    e.preventDefault();
    $(this).addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (){
      $(this).removeClass('animated bounce');
    });
  });

  $( window ).scroll(function(e) {

    e.preventDefault();
    $("h1").addClass('animated slideInLeft');

  });

  $.ajax("https://api.equitise.exchange/offer").done( function (data) {
  console.log( data );
  for (let i = 0; i < data.comingSoon.length; i++) {
    let item = data.comingSoon[i];

}


});


});
