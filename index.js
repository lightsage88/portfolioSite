function showNav() {
$(document).scroll(function() {
  let y = $(this).scrollTop();
  console.log(y);
  y += (y/2.7);
  let height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  if (y > height) {
    $('nav').slideDown('fast').removeClass('hidden');
  } else {
    $('nav').slideUp('fast').addClass('hidden');
  }
  });
}

function fadeInTitle(){
    $(document).ready(()=>{
            $('div#title').fadeIn(1500);
    });
}

function smoothJazz(){
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
}

function showTime(){
    showNav();
    fadeInTitle();
    smoothJazz();
}

$(showTime());

//Courtesy of Christopher Jarvis :)
//This will not work on newer versions of jQuery...go figure!