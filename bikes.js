$(document).ready(function(){

    $("#reservationDetails").hide();

    $("#confirmation").hide();
    
    $("#getBikes").click(function(){
        

      var  global_mock_data = {
		    start_location: {lat: 40.687864, lng: -73.979497},
		    first_station: {lat: 40.682902, lng: -73.975384},
		    second_station: {lat: 40.695002, lng: -73.952482},
		    end_location: {lat: 40.695002, lng: -73.949081}
		};

		showTrip();

    $("#reservationDetails").show();

    $("#bikeForm").hide();


    });


      

      $("#closeConfirm").click(function(){

         $("#bikeForm").show();
         $("#confirmation").hide();
      });

     $("#cancelReservation").click(function(){
        $("#reservationDetails").hide();
        $('#currentPlace').val("");
        $('#destinationPlace').val("");
        $("#bikeForm").show();
      });

     $("#confirmReservation").click(function(){
        $("#reservationDetails").hide();
        $('#currentPlace').val("");
        $('#destinationPlace').val("");
        $("#confirmation").show();

     });


 /*var currentPlaceData=[ 
  {"name": "540 State St", "code": "Brooklyn"}, 
  {"name": "541 State St", "code": "Brooklyn"}, 
  {"name": "576 Marcy Avenue", "code": "Brooklyn"}, 
  {"name": "Leonard", "code": "Brooklyn"}
 ];

var options = {

  url: currentPlaceData,

  getValue: "name",

  list: {	
    match: {
      enabled: true
    }
  },

  theme: "square"
};*/

var options = {
	data: ["540 State st, Brooklyn", "576 Marcy, Brooklyn", "Manhatten NY", "Barclay Center Brooklyn", "Lenord Brookly NY"]
};

var options2 = {
	data: ["540 State st, Brooklyn", "576 Marcy, Brooklyn", "Manhatten NY", "Barclay Center Brooklyn", "Lenord Brookly NY"]
};

$("#currentPlace").easyAutocomplete(options);

$("#destinationPlace").easyAutocomplete(options2);
});


