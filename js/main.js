$(document).ready(function(){
// add class and remove the class to have animated without refreshing the page
  $('.left').mouseover(function(e) {

    e.preventDefault();
    $(this).addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (){
      $(this).removeClass('animated bounce');
    });
  });
});
