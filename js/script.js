$(document).ready(function(){
	//animate anchors
    $(".aMenu").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
	
         var   top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top}, 1500);
			$('#header_menu').removeClass("in");			
    });
	
	//up to home
	$('#home').click(function(){
        $('body,html').animate({scrollTop: 0}, 2000);	
		$('#header_menu').removeClass("in");
	});
	
	//animate view glyphicon	
	function loop() {
    $('#view').animate({'top': '20'}, {
        duration: 1000, 
        complete: function() {
            $('#view').animate({top: 0}, {
                duration: 1000, 
                complete: loop});
        }}); 
   
	}	
	loop();		
	
	// change background in top menu
	var headerHeight = $('#header').height() - 900;
			
 	if_max_width = false;

	$(window).scroll(function() {
			
		var top_scroll = $(this).scrollTop();

		if(top_scroll > headerHeight && !if_max_width) {
			if_max_width = true;  
			$('nav').addClass("classScroll");	
		} else if(top_scroll == 0) {
			if_max_width = false;
			$('nav').removeClass("classScroll");			
		}
	});		
});
	
	
              
  