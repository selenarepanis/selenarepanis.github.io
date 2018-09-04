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

$(".b-fella").click(function() {
    $(".item").addClass("hide");
    $(".item").removeClass("show");

    $(".item.fella").addClass("show");
    $(".item.fella").removeClass("hide");
  });

  $(".b-wife").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.wife").addClass("show");
      $(".item.wife").removeClass("hide");
    });

    $(".b-double").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.double").addClass("show");
      $(".item.double").removeClass("hide");
    });

    $(".b-huge").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.huge").addClass("show");
      $(".item.huge").removeClass("hide");
    });

    $(".b-advertisements").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.advertisements").addClass("show");
      $(".item.advertisements").removeClass("hide");
    });

    $(".b-indoors").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.indoors").addClass("show");
      $(".item.indoors").removeClass("hide");
    });

    $(".b-young").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.young").addClass("show");
      $(".item.young").removeClass("hide");
    });

    $(".b-boat").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.boat").addClass("show");
      $(".item.boat").removeClass("hide");
    });

    $(".b-keyword").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.keyword").addClass("show");
      $(".item.keyword").removeClass("hide");
    });

    $(".b-lures").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.lures").addClass("show");
      $(".item.lures").removeClass("hide");
    });

    $(".b-map").click(function() {
      $(".item").addClass("hide");
      $(".item").removeClass("show");

      $(".item.map").addClass("show");
      $(".item.map").removeClass("hide");
    });


//*do not get rid of this line*//

});
