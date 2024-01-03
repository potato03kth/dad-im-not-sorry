var zoomLevel = 1;
function jf_zoomScrin(zoomVal) {
	if( zoomVal == 0 ) {
		zoomLevel = 1;
	} else {
		zoomLevel += zoomVal;	
	}
	
	$( "body" ).css( { "zoom":zoomLevel, "-moz-transform":"scale(" + zoomLevel + ")" } );
}

function jf_quickPrint() {
	window.print();
}