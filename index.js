function showNav() {
$(document).scroll(function() {
  let y = $(this).scrollTop();
  let height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  if (y > height) {
    $('nav').slideDown('fast').removeClass('hidden');
  } else {
    $('nav').slideUp('fast').addClass('hidden');
  }
  });
}

$(showNav());

//Courtesy of Christopher Jarvis :)
//This will not work on newer versions of jQuery...go figure!