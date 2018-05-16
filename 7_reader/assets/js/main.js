$(document).ready(function() {


  setTimeout(function() {
    $(".p-sub").addClass("show");
  }, 3000);

  setTimeout(function() {
    $(".p-bye").addClass("show");
  }, 5000);

  $(".pop .close").click(function() {
    $(this).parent().removeClass("show");
  });



  });
