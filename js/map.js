
var map,
	
	
	options = {
	
	zoom:17,
	center: { }

	};

origin = null;


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

//start listening for changes in acceleration
navigator.accelerometer.watchAcceleration( handleAcceleration,
accelerationError );


}

function handleAcceleration( acceleration ) {

origin = origin ||  acceleration;

if(acceleration.x > origin.x){

//Tilted left

 	options.center.lng--;
}

else if(acceleration.x < origin.x){

	options.center.lng++;

}


function accelerationError( error ) {
	
	console.log( 'Accelerometer failed: ' + JSON.stringify( error ) );
}



function geolocationError(error){

	console.log("Failed to get user position" + JSON.stringify(error ));

}
