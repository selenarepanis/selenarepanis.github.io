$(document).ready(function() {

//* pop ups action *//

  setTimeout(function() {
    $(".p-sub").addClass("show");
  }, 3000);

  setTimeout(function() {
    $(".p-bye").addClass("show");
  }, 5000);

  setTimeout(function() {
    $(".p-congrats").addClass("show");
  }, 8000);

  $(".pop .close").click(function() {
    $(this).parent().removeClass("show");
  });

  //* border upon click for pop ups *//

  $('.pop').click(function() {
    $('.pop').removeClass('border');
    $(this).toggleClass('border');
  });

//*hover*//





  });
