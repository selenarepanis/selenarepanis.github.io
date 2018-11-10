$(document).ready(function() {


// Add jQuery here

//* pop ups action *//

setTimeout(function() {
  $(".p-bye").addClass("show");
}, 5000);

  setTimeout(function() {
    $(".p-congrats").addClass("show");
  }, 8000);

  $(".pop .close").click(function() {
    $(this).parent().removeClass("show");
  });




















  });
