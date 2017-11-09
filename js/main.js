const showNames = function (data) {
  // console.log( data );


  _(data.comingSoon).each(function (p) {
    console.log( p );
    const html = `<p>${ p.name } raised $${ p.raisedAmount }</p>`;

    $('body').append( html );
  })
};

//
// $.ajax("https://api.equitise.exchange/offer").done( function (data) {
// console.log( data );
//
// for (let i = 0; i < data.comingSoon.length; i++) {
//   let item = data.comingSoon[i].name;
// }
//
// _(data.comingSoon.name).each(function (p) {
//   console.log( p );
// })
// });

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
