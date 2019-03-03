$(document).ready(function() {


// Add jQuery here


//*smooth scroll*//

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  });

//*smooth scroll end*//


// JavaScript Document

const redCircle = document.querySelector("#redcircle")
const blueCircle = document.querySelector("#bluecircle")
const greenCircle = document.querySelector("#greencircle")
const mainColor = document.querySelector("body")


// give buttons functions on click
blueCircle.addEventListener("click", function () {
	mainColor.style.setProperty('--main-color', "#121113")
	redCircle.style.opacity = 0.3
	blueCircle.style.opacity = 1
	greenCircle.style.opacity = 0.3
})

redCircle.addEventListener("click", function () {
	mainColor.style.setProperty('--main-color', "#f56c6c")
	redCircle.style.opacity = 1
	blueCircle.style.opacity = 0.3
	greenCircle.style.opacity = 0.3
})

greenCircle.addEventListener("click", function () {
	mainColor.style.setProperty('--main-color', "#503f33")
	redCircle.style.opacity = 0.3
	blueCircle.style.opacity = 0.3
	greenCircle.style.opacity = 1
})


//* Popup on scroll *//

//* Define the elements *//
const popup = document.querySelector(".popup")


//* Do this on scroll to point *//
window.addEventListener("scroll", function() {
	if(this.pageYOffset > 750) {
		popup.style.animation = "popup 1s forwards"
	}
})


//* Define the elements *//
const circle1 = document.querySelector("#circle1")
const circle2 = document.querySelector("#circle2")

function dissapear (){
	popup.style.display = "none"
}

//* Click on 'yes' circle *//
circle1.addEventListener("click", function () {
	window.location.href = "mailto:ciao@amici.studio";
	popup.style.animation = "fadepopup 0.3s reverse forwards"
	setTimeout(dissapear, 300)
})

//* Click on 'no' circle *//
circle2.addEventListener("click", function () {
	popup.style.animation = "fadepopup 0.3s reverse forwards"
	setTimeout(dissapear, 300)
})

//* popups for six *//

$('.r-car').mouseenter(function() {
    $('.p-car').addClass('p-show');
  });

$('.r-car').mouseleave(function() {
    $('.p-car').removeClass('p-show');
  });

 $('.r-bike').mouseenter(function() {
    $('.p-bike').addClass('p-show');
  });

$('.r-bike').mouseleave(function() {
    $('.p-bike').removeClass('p-show');
  });

  //* slideshow for six popup*//
  $("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow');
},  500);
