// This chunk of code enable smooth scrolling
// It depends on full jQuery and works with Bootstrap nav items
// jQuery uses $ to leverage jQuery functionality
// jQuery uses $("[element]") to find / select stuff
// jQuery has actions you can perform on selected element(s): .[action]()

$(document).ready( // this is how we ensure jQuery waits for the doc to fully load
  function(){
    // select all elements we want to smooth scroll (having added 'sscroll' as a class to them)
    // then add a click handler for them
    $('.sscroll').click(
      function(element){
        element.preventDefault();
        // determine the distance (in pixels) from the top of the page to the section we're navigating to
        let distanceToHtmlDest = $('body').find($(this).attr('href')).offset().top;
        // using jQuery's animate action to scroll the page by changing the value of the body's scrollTop over 800ms
        $('html, body').animate({ scrollTop : distanceToHtmlDest },800);
        // set the clicked element's item as active (so bootstrap updates style)
        $(this).parent().addClass('active');
        // set sibling items as inactive (so bootstrap updates style)
        $(this).parent().siblings().removeClass('active');
      }
    );
  }
);