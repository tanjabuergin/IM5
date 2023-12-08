

$(document).ready(function(){

//nav background when scrolling
  function scrollAnimation() {
    var attribute = 'data-scroll-animation';
    var selector = '[' + attribute + ']';  //ergibt '[data-scroll-animation]'

    $(selector).each(function(){
      var offset = $(this).attr(attribute);

      if ($(window).scrollTop() > offset ){
          $('nav').addClass('scoll-animate-in');
      } else {
        $('nav').removeClass('scoll-animate-in');
      }
    });
  }

  $(window).on('scroll', function(){
    scrollAnimation();
  });

//  nav scroll up
  $(window).bind('scroll', function() {
    var navHeight = $( window ).height();
      if ($(window).scrollTop() > navHeight) {
        $('nav').addClass('fixed');
      }
      else {
        $('nav').removeClass('fixed');
      }
   });

// nav mobile
$('#mobile-nav-button').click(function(){
  $('nav').toggleClass('open');
});

 // nav mobile schließen beim Klicken auf einen Link
 $('nav ul li a').on('click', function() {
  $('nav').removeClass('open');
});



//count numbers 
$("#startCounterButton").on("click", startCounter);

function startCounter() {
    $('.js_count').each(function () {
        var $this = $(this);
        var suffix = $this.data('suffix') || '';

        $this.css('opacity', 0);

        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter) + suffix).css('opacity', 1);
            }
        });
    });

    // animate hintergrund-2 Section (erscheinen)
    $(".hintergrund-2").fadeIn(1000);

    // Deckkraft Button auf 0 
    $("#startCounterButton").animate({ opacity: 0 }, 100);

    // mehrfaches Klicken verhindern
    $("#startCounterButton").prop("disabled", true);
}
  
  
// back to top
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#backToTopBtn').fadeIn();
      } else {
          $('#backToTopBtn').fadeOut();
      }
  });

 // Scroll to the top when button is clicked
  $('#backToTopBtn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
  });



// Slider-Container > Bilder slibden on active option > mit click
  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
  });


});

// Change css file (dark mode)
function changeStyle() {
  console.log('Button geklickt');
  var style = document.getElementById('styleLink');
  
  // check, ob Element existiert 
  if (!style) {
    console.error('Element mit ID "styleLink" nicht gefunden.');
    return;
  }

  console.log('Aktueller href:', style.href);

  if (style.href.endsWith('style-dark.css')) {
    style.href = 'scss/style.css';
  } else {
    style.href = 'scss/style-dark.css';
  }

  console.log('Neuer href:', style.href);
}

