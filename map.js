var global_mock_data = {
   start_location: {lat: 40.687864, lng: -73.979497},
   first_station: {lat: 40.682902, lng: -73.975384},
   second_station: {lat: 40.695002, lng: -73.952482},
   end_location: {lat: 40.695002, lng: -73.949081}
};


//     end_location: {lat: 40.695002, lng: -73.949081}
// var api_key = 'AIzaSyDuqyvzgK6olDb-aZw-O4T27FoMOjSZ5ec';

var directionsService = new google.maps.DirectionsService();

var lineSymbol = {
 path: 'M 0,-.2 0,.2',
 strokeOpacity: 1,
 scale: 4,
 fillOpacity: 1
};

function initialize() {
 var mapProp = {
   mapTypeControl:false,
   streetViewControl:false,
   zoom:15,
   center: new google.maps.LatLng(global_mock_data.start_location.lat, global_mock_data.start_location.lng),
   mapTypeId:google.maps.MapTypeId.ROADMAP
 };
   mock_data=global_mock_data;

 var map = new google.maps.Map(document.getElementById("map"),mapProp);
}

function showTrip() {
 var mapProp = {
   mapTypeControl:false,
   streetViewControl:false,
   zoom:15,
   mapTypeId:google.maps.MapTypeId.ROADMAP
 };
   mock_data=global_mock_data;

 var map = new google.maps.Map(document.getElementById("map"),mapProp);

 var start = new google.maps.Marker({
   position: new google.maps.LatLng(mock_data.start_location.lat, mock_data.start_location.lng),
   // icon: 'icons/start_location.png'   ----- to be filled in with a better icon later
 });

 var first_station = new google.maps.Marker({
   position: new google.maps.LatLng(mock_data.first_station.lat, mock_data.first_station.lng),
   icon: 'icons/Untitled-3.png' 
 });

 var second_station = new google.maps.Marker({
   position: new google.maps.LatLng(mock_data.second_station.lat, mock_data.second_station.lng),
   icon: 'icons/Untitled-3.png' 
   // icon: 'icons/station.png' ----- to be filled in with a better icon later
 });

 var end_location = new google.maps.Marker({
   position: new google.maps.LatLng(mock_data.end_location.lat, mock_data.end_location.lng),
   // icon: 'icons/end_location.png' ----- to be filled in with a better icon later
 });

 start.setMap(map);
 first_station.setMap(map);
 second_station.setMap(map);
 end_location.setMap(map);

 var markers = [start, first_station, second_station, end_location];
 var bounds = new google.maps.LatLngBounds();
 for (var i = 0; i < markers.length; i++) {
  bounds.extend(markers[i].getPosition());
 }

 map.fitBounds(bounds);

 function calcRoute(start, end, mode) {
   var request = {
     origin: new google.maps.LatLng(start.lat, start.lng),
     destination: new google.maps.LatLng(end.lat, end.lng),
     travelMode: google.maps.TravelMode[mode]
   };
   directionsService.route(request, function(result, status) {
     if (status == google.maps.DirectionsStatus.OK) {
       console.log(result)
       var path = result.routes[0].overview_path;
       var strokeColor;
       var polyLine;

       if (mode === 'WALKING') {
         polyLine = new google.maps.Polyline({
           path: path,
           strokeColor: '#62656C ',
           fillColor: '#62656C ',
           strokeOpacity: 0,
           icons: [{
             icon: lineSymbol,
             offset: '0',
             repeat: '10px'
           }],
           strokeWeight: 1
         });
       } else if (mode === 'BICYCLING') {
         polyLine = new google.maps.Polyline({
           path: path,
           strokeColor: '#1DB0EC ',
           fillColor: '#1DB0EC ',
           strokeOpacity: 0,
           icons: [{
             icon: lineSymbol,
             offset: '0',
             repeat: '10px'
           }],
           strokeWeight: 1
         });
       }

       polyLine.setMap(map);
     }
   });
 }

 calcRoute(mock_data.start_location, mock_data.first_station, 'WALKING');
 calcRoute(mock_data.first_station, mock_data.second_station, 'BICYCLING');
 calcRoute(mock_data.second_station, mock_data.end_location, 'WALKING');
}

google.maps.event.addDomListener(window, 'load', initialize);

