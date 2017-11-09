const showNames = function (data) {

  _(data.comingSoon).each(function (p) {
    console.log( p );
    const html = `<div class="offer"><div class="center"><h3>${ p.name }</h3><h5>raised :$${ p.raisedAmount }</h5><h5
    >Private:${ p.private }</h5></div></div>`;

    $('.offers-all').append( html ).hide();

  })
};


const xinjaURL = "https://api.equitise.exchange/offer";

$.ajax(xinjaURL, {
  format: 'json',

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

  $(".live").on('click', function(e){
    e.preventDefault;
    $('.offer-dumy-coming').hide();
    $('.offer-dumy-live').show();
  });

  $(".coming").on('click', function(e){
    e.preventDefault;
    $('.offer-dumy-live').hide();
    $('.offer-dumy-coming').show();
  });

  $(".coming").on('click', function(e) {
    e.preventDefault;
      $('.offers-all').show();
  });

  $(".live").on('click', function(e) {
    e.preventDefault;
      $('.offers-all').hide();
  });



});
