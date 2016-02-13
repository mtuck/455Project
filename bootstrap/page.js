

$( document ).ready(function() {
	$( "#listgroup" ).hide();

	if($( "#toggle-collapse" ).css("display") == 'none'){

		$( "#listgroup" ).show();
	}

	$( window ).resize(function() {
  		$( "#listgroup" ).show();
	});

  	$("#toggle-collapse").click(function(){
	 	

	$( "#listgroup" ).slideToggle( "slow", function() {
   		 // Animation complete.
  	});
	});
});