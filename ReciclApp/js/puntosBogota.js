window.onload=function(){
    //alert("hasta aqui! bien.");
	var bounds = new google.maps.LatLngBounds();
	var mapOptions={
		mapTypeId: 'roadmap',
        center: new google.maps.LatLng(4.667961, -74.073755)
        //title: "Ecopuntos"
	};

	//display a map on the web page
	var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);
	map.setTilt(50);
	//multiple markers location, latitude, and longitude
	var markers=[
        ['Fallabella de Colombia S.A.', 4.749814,-74.094985],
        ['Alcaldia Local de Suba', 4.740665, -74.084197],
        //['Centro Comercial Plaza de las Americas' 4.618673, -74.135199]
        ['Centro Comercial Ciudad Tunal', 4.578027,-74.130534],
        //['Centro Comercial Altavista', 4.53452,-74.118470],
        //['Parque Comercial La Colina 138', 4.726426, -74.060741],
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Fallabella de Colombia S.A.</h3>'+ '<p>Av Ciudad de Cali con Av Carrera 104 # 148 - 07</p>'+
        '</div>'],
        /*['<div class="info_content">' +
        '<h3>Centro Comercial Altavista</h3>' +
        '</div>'],*/
        ['<div class="info_content">' +
        '<h3>Alcaldia Local de Suba</h3>' + '<p>Calle 146 c Bis # 90 - 57</p>'+
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Centro Comercial Ciudad Tunal</h3>' +'<p>Calle 47B sur # 24B - 33</p>'+
        '</div>'],
        /*['<div class="info_content">' +
        '<h3>Parque Comercial La Colina 138</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Centro Comercial Plaza de las Americas</h3>' +
        '</div>']*/
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(11);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
//google.maps.event.addDomListener(window, 'load', initMap);