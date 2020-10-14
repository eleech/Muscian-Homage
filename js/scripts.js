$( document ).ready(function() {




	//
	// Set columns of equal height
	//
	function equalHeight(el) {
		var tallestDiv = 0;
		var divHeight = 0;
		el.each( function() {
			$(this).removeAttr("style");
			divHeight = $(this).height(); 
			if( divHeight > tallestDiv ) {
				tallestDiv = divHeight;
			}
		});
		el.height(tallestDiv);
	}


	//
	// When document is ready, run these functions
	//
	function resizeElements() {
		if( $( window ).width() > 740) {
			equalHeight($('.feature'));
			equalHeight($('.feature-text'));
		} else {
			$('.feature').removeAttr("style");
			('.feature-text').removeAttr("style");
		}
	}
	resizeElements();





	//
	// When the window is resized, run these functions
	//
	//$( window ).resize( function() {
		//resizeElements();
		//setTimeout( function() { 
		//}, 500 );
	//});
});