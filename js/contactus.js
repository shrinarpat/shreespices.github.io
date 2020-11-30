
        // Initialize and add the map
        function initMap() {
            // The location of Uluru
            var satyamFurniture = {lat: 26.995990, lng: 75.877896};
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 12, center: satyamFurniture});
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({position: satyamFurniture, map: map});
          }
                  
          
          