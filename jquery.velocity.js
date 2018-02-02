jQuery(document).ready(function($) {
	//Click Velocity Control
	var limitClickVelocity = function(e){
		var thisElement = jQuery(this),
			timeframe = 2500;
			
		if( e.data && e.data.timeframe )
			timeframe = Number(e.data.timeframe);
		
		if( thisElement.data('allowedClick') ) {
			if( jQuery.now() < thisElement.data('allowedClick')+timeframe ) {
				if( console ) console.log('blocked click');
				return false;
			}
		}
		thisElement.data('allowedClick', jQuery.now());
	};
	
	//Submit Velocity Control
	var limitSubmitVelocity = function(e){
		var thisElement = jQuery(this),
			timeframe = 40000;
		
		if( !thisElement.is('form') ) {
			//Remove this event if this element is not a form. This allows for hander to be applied to broad groups of elements.
			if( console ) console.log('removed submit velocity event');
			thisElement.off(e);
			return; 
		}
		if( e.data && e.data.timeframe )
			timeframe = Number(e.data.timeframe);
		
		if( thisElement.data('allowedSubmit') ) {
			if( jQuery.now() < thisElement.data('allowedSubmit')+timeframe ) {
				if( console ) console.log('blocked submit');
				return false;
			}
		}
		thisElement.data('allowedSubmit', jQuery.now());
	};
	
	$('.limit-click-velocity').on('click', limitClickVelocity);
	$('.limit-submit-velocity').on('submit', limitSubmitVelocity);
});
