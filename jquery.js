$(document).ready(function(){

  // $("#nav a").click(function(e){
  //   e.preventDefault();
  //   $('html,body').scrollTo(this.hash,this.hash);
  // });

  // $('a.menu').click(function(){
  //     // $('a.menu').css('color', '#818181');
  //     // console.log(this);
  //     // $(this).css('color', 'white');
  //     $('a.menu').removeClass('selected');
  //     $(this).toggleClass('selected');
  // })

  // $('a.menu').click(function(){
  //     $('a.menu').removeClass('selected');
  //     $(this).toggleClass('selected');
  // })

  $(document).bind('scroll',function(e){
      $('section').each(function(){
          if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
              window.location.hash = $(this).attr('id');

              if($(this).attr('id') == "home"){
                $('a.menu').removeClass('selected');
                $("#nav1").toggleClass('selected')
                // $("#nav1").css('color', '#4286f4');
                // $("#nav2").css('color', '#818181');
                // $("#nav3").css('color', '#818181');
                // $("#nav4").css('color', '#818181');
              }else if($(this).attr('id') == "projects"){
                $('a.menu').removeClass('selected');
                $("#nav2").toggleClass('selected')
                // $("#nav1").css('color', '#818181');
                // $("#nav3").css('color', '#818181');
                // $("#nav4").css('color', '#818181');
                // $("#nav2").css('color', '#4286f4');
              }else if($(this).attr('id') == "resume"){
                $('a.menu').removeClass('selected');
                $("#nav3").toggleClass('selected')
                // $("#nav1").css('color', '#818181');
                // $("#nav2").css('color', '#818181');
                // $("#nav4").css('color', '#818181');
                // $("#nav3").css('color', '#4286f4');
              }else if($(this).attr('id') == "contact"){
                $('a.menu').removeClass('selected');
                $("#nav4").toggleClass('selected')
                // $("#nav1").css('color', '#818181');
                // $("#nav2").css('color', '#818181');
                // $("#nav3").css('color', '#818181');
                // $("#nav4").css('color', '#4286f4');
              }
          }
      });
  });

});
