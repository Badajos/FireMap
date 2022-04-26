//------------Create the map--------------------------//
function createMap(){
    var map = L.map('map', {
        zoom: 9,
        fullscreenControl: true,
        timeDimension: true,
        timeDimensionOptions: {
            /*timeInterval: "2019-06-01/2019-09-16",*///start&stop for slider
            period: "P1D",//time for slider to move forward
        },
        timeDimensionControl: true,//puts slider on map
        timeDimensionControlOptions: {
            position:      'bottomleft',
            autoPlay:      true,
            minSpeed:      1,
            speedStep:     0.5,
            maxSpeed:      15,
            timeSliderDragUpdate: true,
            loopButton:    true, 
            playerOptions: {
                transitionTime: 100, //speed of animation
                loop: false,
                startOver:true,
            },   
        }, 
        center: [60.67, -150.57],
    });
    
    //------------add base maps-------------------------//
    
    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; 

    var osm = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: mbAttr}).addTo(map);

    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoiYmFkYWpvcyIsImEiOiJjamQyNW5pcmsybjNrMnhvMXQxb2hlNHI3In0.6_NSwAZooCl3XoCmbAUoeA' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */

    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';

    //For Custom basemaps - Replace your username and StyleID
    var customBasemap = new L.tileLayer(mbStyleUrl, {id: 'badajos/ck0ohmxns078c1cmjd7r0as5l', token: apitoken,  attribution: mbAttr});
    
    /*var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, ' +
        'AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });*/
        
    var baseMaps = {
        "Open Street Map": osm,
        /*"ESRI Satellite": Esri_WorldImagery,*/
        "Grayscale": customBasemap,
    };

    //------------add mini map plugin------------------//
    var osm2 = new L.tileLayer(mbStyleUrl, {id: 'badajos/ck0ohmxns078c1cmjd7r0as5l', token: apitoken,  attribution: mbAttr});

    var miniMap = new L.Control.MiniMap(osm2, {centerFixed: [63.0, -151.0], zoomLevelFixed: 2, position: 'topleft', /*zoomLevelOffset: -7,*/ autoToggleDisplay: true}).addTo(map);
    
    //------------add home ranges (overlay)-----------//
    
    var hr_A32 = L.geoJson.ajax("data/poly_GPS_A_32.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#708691',  
                    opacity:0.5
                    }
         }
    });
    var hr_A35 = L.geoJson.ajax("data/poly_GPS_A_35.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#598296',  
                    opacity:0.5
                    }
         }
    });
    var hr_A51 = L.geoJson.ajax("data/poly_GPS_A_51.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#579c7a',  
                    opacity:0.5
                    }
         }
    });
    var hr_A59 = L.geoJson.ajax("data/poly_GPS_A_59.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#a67275',  
                    opacity:0.5
                    }
         }
    });
    var hr_A61 = L.geoJson.ajax("data/poly_GPS_A_61.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#a64b50',  
                    opacity:0.5
                    }
         }
    });
    var hr_A73 = L.geoJson.ajax("data/poly_GPS_A_73.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#3d7b99',  
                    opacity:0.5
                    }
         }
    });
    var hr_A82 = L.geoJson.ajax("data/poly_GPS_A_82.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#73569c',  
                    opacity:0.5
                    }
         }
    });
    var hr_A86 = L.geoJson.ajax("data/poly_GPS_A_86.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#787bad',  
                    opacity:0.5
                    }
         }
    });
    var hr_A89 = L.geoJson.ajax("data/poly_GPS_A_89.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#4b50ad',  
                    opacity:0.5
                    }
         }
    });
    var hr_A96 = L.geoJson.ajax("data/poly_GPS_A_96.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#515157',  
                    opacity:0.5
                    }
         }
    });
    var hr_A97 = L.geoJson.ajax("data/poly_GPS_A_97.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#787887',  
                    opacity:0.5
                    }
         }
    });
    var hr_A100 = L.geoJson.ajax("data/poly_GPS_A_100.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#7f7094',  
                    opacity:0.5
                    }
         }
    });
    var hr_A103 = L.geoJson.ajax("data/poly_GPS_A_103.geojson", {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#739c88',  
                    opacity:0.5
                    }
         }
    });
    
    var groupedOverlays = {
      "Pre-fire Home Range": {
        "A_32": hr_A32,
        "A_35": hr_A35,
        "A_51": hr_A51,
        "A_59": hr_A59,
        "A_61": hr_A61,
        "A_73": hr_A73,
        "A_82": hr_A82,
        "A_86": hr_A86,
        "A_89": hr_A89,
        "A_96": hr_A96,
        "A_97": hr_A97,
        "A_100": hr_A100,
        "A_103": hr_A103
      }
      };

    //----add leaflet menu (grouplayer plugin)---------//
    L.control.groupedLayers(baseMaps, groupedOverlays).addTo(map);

    getFire(map);
    getMoose(map);
};

//------------load fire polygon-----------------------//
function getFire(map,data){
    var firePoly = new L.GeoJSON.AJAX(polydata, {
        style: function(feature){
            d = feature.properties.colorByAttr;
            return {color: '#FF4500',  
                    opacity:0.5
                    }
         }
    });
    var fireLayer = L.timeDimension.layer.geoJson(firePoly,{
        duration:"PT23H",  //needs to be at 23 hours to show individ polygons      
    });
    fireLayer.addTo(map);
    
    //----------create the legend----------
    function getColor(d) {
        return d > 5000000 ? '#7a0177' :
            '#FF4500'
    }
            
    /*console.log(fireLayer);*/
    var legend = L.control({position: 'bottomright'});
    
    legend.onAdd = function (map) {
    var acres = 0;
    var div = L.DomUtil.create('div', 'info legend');
    labels = [],
    categories = ['Swan Lake Fire'];
    
    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
                '<i class="circle" style="background:' + getColor(categories[i])+"; opacity: 0.5; stroke: #FF4500" + '"></i> ' +
            (categories[i] ? categories[i] : '+'));
        }
        /*console.log(labels)*/
        div.innerHTML = labels.join('<br>');
    return div;
    };
    legend.addTo(map);

    /*updateLegend(map, attributes[0]);*/ 
};

//----------Import GeoJSON data; call functions-------//
function getMoose(map){
    //load the data
    
    var moosePts = $.ajax(linedata, {
        dataType: "json",
        success: function(response){
            //create an attributes array
            var attributes = processData(response);
            /*console.log(attributes)*/
            addGeoJSONLayer(map, attributes);
        } 
    });
};

//----------build attribute arrays--------------------//
function processData(data){
    
    //empty array to hold attributes
    var attributes = [];
    var properties = data.features[0].properties;
    
    //properties of the first feature in the dataset (0=first row)
    /*console.log(properties);*/
   
    //push each attribute name into attributes array
    for (var attribute in properties){
        attributes.push(attribute)
    };
    
    return attributes, properties, data;    
};

//------------Add icons and lines---------------------//
function addGeoJSONLayer(map, attributes) {
   
    var icon = L.icon({
        iconUrl: 'img/moose_right.png',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        popupAnchor:  [-3, -10]
    });
    
    //---------------Setting Line Styles-------------//
    var styleLine = function(feature){
            d = feature.properties.colorByAttr;
            var line = feature.properties.Individ_ID;
            
            /*console.log(line);*/
            if (line === 'A_32')
                return {color: '#708691', fillOpacity:0.7};
            else if (line === 'A_35')
                return {color: '#598296', opacity:0.7};
            else if (line === 'A_51')
                return {color: '#579c7a',opacity:0.7};
            else if (line === 'A_59')
                return {color: '#a67275',opacity:0.7};
            else if (line === 'A_61')
                return {color: '#a64b50',opacity:0.7};
            else if (line === 'A_73')
                return {color: '#3d7b99',opacity:0.7};
            else if (line === 'A_82')
                return {color: '#73569c',opacity:0.7};
            else if (line === 'A_86')
                return {color: '#787bad',opacity:0.7};
            else if (line === 'A_89')
                return {color: '#4b50ad',opacity:0.9};
            else if (line === 'A_96')
                return {color: '#515157',opacity:0.7};
            else if (line === 'A_97')
                return {color: '#787887',opacity:0.7};
            else if (line === 'A_100')
                return {color: '#7f7094',opacity:0.7};
            else if (line === 'A_103')
                return {color: '#739c88',opacity:0.7};
            else return {color: '#598296',opacity:0.7}
         };
    //---------------Set Pop Up---------------------//
    function popupInfo (mark, feature) {
        var name = feature.properties.Individ_ID;
                var age = feature.properties.Age;
                var born = feature.properties.Calf;
                var Survive = feature.properties.CalfNow;
                
                var popupContent = "<p><b>Moose:</b> " + name + "</p>"
                                 
                    if (age == 0){
                        popupContent += "<p><b>Age:</b> " + "</b> Unknown</p>"+"<p><b>Sex:</b> Female ";; 
                    }
                    else if (age >= 0){
                        popupContent += "<p><b>Age:</b> " + age + "</p>"+"<p><b>Sex:</b> Female ";;
                    }
                
                var popupContent2 = popupContent +=
                    "<p><b>#Calves Born:</b> " + born + "</p>"
                    + "<p><b>#Calves Survive:</b> " + Survive + "</p>"
                
                mark.bindPopup(popupContent2);
                
                mark.on({
                    mouseover: function(){
                        this.openPopup();
                    },
                    mouseout: function(){
                        this.closePopup();
                    }
                });
    };
    
    var linelayer = new L.GeoJSON.AJAX(linedata, 
        { style: styleLine,
        pointToLayer: function (feature, latLng) {
            if (feature.properties.hasOwnProperty('last')) {
                var mark = new L.Marker(latLng, {
                    icon: icon
                });
                popupInfo (mark, feature)
                return mark;
            }
        },                            
    });
     
    var linelayerTD = L.timeDimension.layer.geoJson(linelayer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var myData =  L.layerGroup([]);//empty layer group
    myData.addLayer(linelayerTD);//add line data to empty group
    myData.addTo(map); //add to map
    
    FilterSelect(myData, map);//send myData layer to filter
    
    //----------filter data-------------------------------//
    function FilterSelect(myData, map) {
        /*console.log(attributes)*/
            $("#FilterGroup").change(function() {
             var choice = $("input[name=filter]:checked").val()
                /*console.log(choice)*/
                if (choice === "All") {
                    addGeoJSONLayer(map, attributes) 
                }

                myData.clearLayers();
                map.removeLayer(myData);
                /*console.log(myData);*/

                var linelayer = L.geoJson(null, 
                    { style: styleLine,
                    pointToLayer: function (feature, latLng) {
                        if (feature.properties.hasOwnProperty('last')) {
                            var mark = new L.Marker(latLng, {
                                icon: icon
                            });
                            popupInfo (mark, feature)
                            return mark;
                        }
                    },
                    
                    filter: function(feature, layer) {      
                        return (feature.properties.Individ_ID == choice);
                            }, 
                });

                var linelayerTD = L.timeDimension.layer.geoJson(linelayer, {
                    updateTimeDimension: true,
                    addlastPoint: true
                });

                // Get GeoJSON data and create filtered features.
                $.getJSON(linedata, function(myData) {
                        linelayer.addData(myData);
                });

                myData.addLayer(linelayerTD);
               /* myData.addLayer(layer);*/
                myData.addTo(map);  
            });
    };
};

//------------global variables------------------------//
var polydata = "data/SwanLakeEachDay.geojson"
var linedata = "data/mooseline.geojson"
 
//------------jquery method loads page----------------//
$(document).ready(createMap);

