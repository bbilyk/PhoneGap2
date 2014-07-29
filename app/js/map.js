
var map,
	
	
	options = {
	
	zoom:17,
	center: { }

	};




if( window.cordova )

document.addEventListener( 'deviceready', onDeviceReady );
else
window.addEventListener( 'load', onDeviceReady );



function onDeviceReady( ) {
	navigator.geolocation.getCurrentPosition( handleUserPosition, geolocationError );

}


function handleUserPosition(position){

	options.center.lat = position.coords.latitude;
	options.center.lng = position.coords.longitude;

	map = new google.maps.Map( document.getElementById("map"), options);


}


function geolocationError(error){

	console.log("Failed to get user position" + JSON.stringify(error ));

}
