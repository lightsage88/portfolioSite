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

function showTime(){
    showNav();
    fadeInTitle();
}

$(showTime());

//Courtesy of Christopher Jarvis :)
//This will not work on newer versions of jQuery...go figure!