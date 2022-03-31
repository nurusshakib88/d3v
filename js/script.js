$(document).ready(function () {

// header

$(window).on('scroll',function() {
    if($(window).scrollTop()){
      $('header').addClass('t_header');
    }
    else{
      $('header').removeClass('t_header');
    }
    
  });



});