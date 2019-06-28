$(document).ready(function(){

  // $("#a.menu").click(function(e){
  //   e.preventDefault();
  //   $('html,body').scrollTo(this.hash,this.hash);
  // });

  // $('a.menu').click(function(e){
  //     $('a.menu').removeClass('selected');
  //     $(this).toggleClass('selected');
  //     e.preventDefault();
  // })

  // $("a.menu").click(function(e) {
  //   $('a.menu').removeClass('selected');
  //   $(this).toggleClass('selected');
  //   // $('html,body').animate({
  //   //   scrollTop: $("#nav4").offset().top }, // Tell it to scroll to the top #bottom
  //   //   1000 // How long scroll will take in milliseconds
  //   // );
  // });

  // Add smooth scrolling to all links
  $("a.menu").on('click', function(e) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash
      var hash = this.hash;

      $('a.menu').removeClass('selected');
      $(this).toggleClass('selected');

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(document).bind('scroll',function(e){
      $('section').each(function(){
          if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
            window.location.hash = $(this).attr('id');

            if($(this).attr('id') == "home"){
              $('a.menu').removeClass('selected');
              $("#nav1").toggleClass('selected')
            } else if($(this).attr('id') == "projects"){
              $('a.menu').removeClass('selected');
              $("#nav2").toggleClass('selected')
            } else if($(this).attr('id') == "resume"){
              $('a.menu').removeClass('selected');
              $("#nav3").toggleClass('selected')
            } else if($(this).attr('id') == "contact"){
              $('a.menu').removeClass('selected');
              $("#nav4").toggleClass('selected')
            }
          }
      });
  });

  function wheel(event) {
      var delta = 0;
      if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
      else if (event.detail) {(delta = -event.detail / 3);}

      handle(delta);
      if (event.preventDefault) {(event.preventDefault());}
      event.returnValue = false;
  }

  function handle(delta) {
      var time = 1000;
      var distance = 300;

      $('html, body').stop().animate({
          scrollTop: $(window).scrollTop() - (distance * delta)
      }, time );
  }

  if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
    window.onmousewheel = document.onmousewheel = wheel;

});
