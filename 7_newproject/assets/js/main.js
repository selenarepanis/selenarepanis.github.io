$(document).ready(function() {


// Hover in
$('.menu').mouseenter(function(){
  $('body').addClass('body-khaki');
  $('body').removeClass('body-blue');
  $('.nav').addClass('active');

});

// Hover out
$('.nav').mouseleave(function(){
  $('body').removeClass('body-khaki');
  $('body').addClass('body-blue');
  $('.nav').removeClass('active');

});

$('.item').click(function() {
  $('.item').removeClass('border');
  $(this).toggleClass('border');
});




//*the button actions are below... *//

$(".b-cultivore").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.cultivore").addClass("show");
    $(".item.cultivore").removeClass("hide");
  });

  $(".b-vfq").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.vfq").addClass("show");
      $(".item.vfq").removeClass("hide");
    });

    $(".b-sweetdreams").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.sweetdreams").addClass("show");
      $(".item.sweetdreams").removeClass("hide");
    });

    

//*do not get rid of this line*//

});
