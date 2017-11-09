const showNames = function (data) {

  _(data.comingSoon).each(function (p) {
    console.log( p );
    const html = `<div class="offer">${ p.name } raised $${ p.raisedAmount }</div>`;

    $('.section-3').append( html );
  })
};


const xinjaURL = "https://api.equitise.exchange/offer";

$.ajax(xinjaURL, {
  format: 'json'
}).done(showNames);





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

});
