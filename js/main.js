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

  $(".button").click(function (e){
  $('body').animate({scrollTop: $('.section-2').position().top}, 1500);
    e.preventDefault();
  });

});
