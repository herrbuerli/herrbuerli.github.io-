//Smooth scrolling anchor links
$(function() {
      			$('a[href*=#]:not([href=#])').click(function() {
        			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          			var target = $(this.hash);
          			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          			if (target.length) {
            		$('html,body').animate({
              		scrollTop: target.offset().top
            		}, 1000);
            		return false;
          			}
        			}
      			});
    		});

//Flowtype Settings
$('.title').flowtype({
 minimum   : 320,
 maximum   : 1800,
 minFont   : 20,
 maxFont   : 200,
 fontRatio : 6
});