// This chunk of code enable smooth scrolling
// It depends on full jQuery
$(document).ready(function(){
  let smooth_scroll = $('.scroll');
  smooth_scroll.click(function(element){
       element.preventDefault();
       let url = $('body').find($(this).attr('href')).offset().top;
       $('html, body').animate({
         scrollTop : url
       },700);
       $(this).parent().addClass('active');
       $(this).parent().siblings().removeClass('active');
       return false;	
    });
 });