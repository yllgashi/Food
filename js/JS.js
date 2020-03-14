// Blur of Background image


$(function(){
  $(window).scroll(function(){
    var top = $(this).scrollTop();
    $('.bg').css({
      'filter': 'blur('+ top/100 +'px)',
      '-webkit-filter': 'blur('+ top/100 +'px)'
    });
  });  
    
});