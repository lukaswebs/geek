window.marker = null;

function initMap() {
        var map;

	    var london = new google.maps.LatLng(51.524241, -0.072495);
	
	    var style = [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ];
	
	    var mapOptions = {
	        // SET THE CENTER
	        center: london,
	
	        // SET THE MAP STYLE & ZOOM LEVEL
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        zoom: 16,
	
	        // SET THE BACKGROUND COLOUR
	        backgroundColor: "#eeeeee",
	
	        // REMOVE ALL THE CONTROLS EXCEPT ZOOM
	        panControl: false,
	        zoomControl: true,
	        mapTypeControl: false,
	        scaleControl: false,
	        scrollwheel: false,
	        streetViewControl: false,
	        overviewMapControl: false,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.SMALL
	        }
	
	    }
	    
	    var contentString = '<div id="content" style="text-align:left;">'+
	      '<div id="bodyContent">'+
	      '<p>Geek Label<br/> ' +
	      '4th Floor<br/> '+
	      '27 - 33 Bethnal Green Road <br/> '+
	      'Shoreditch <br/> '+
	      'London </br> '+
	      'E1 6LA '+
	      '</p>'+
	      '</div>';
	
	  var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });
	    map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	    // SET THE MAP TYPE
	    var mapType = new google.maps.StyledMapType(style, {
	        name: "Grayscale"
	    });
	    map.mapTypes.set('grey', mapType);
	    map.setMapTypeId('grey');
	
	    //CREATE A CUSTOM PIN ICON
	    var marker_image = 'images/marker.png';
	    var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(21, 34));
	
	    marker = new google.maps.Marker({
	        position: london,
	        map: map,
	        icon: 'themes/bootstrap/images/marker.png',
	        title: 'London'
	    });
	    marker.addListener('click', function() {
		    infowindow.open(map, marker);
	});
}

google.maps.event.addDomListener(window, 'load', initMap);