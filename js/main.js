//------------Create the map--------------------------//
function createMap(){
    
    var map = L.map('map', {
        zoom: 9,
        fullscreenControl: true,
        timeDimension: true,
        timeDimensionOptions: {
            timeInterval: "2019-06-01/2019-09-16",//start&stop for slider
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
                startOver:true,
            },   
        }, 
        center: [60.67, -150.57],
    });

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; 

    var osm = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: mbAttr});

    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoiYmFkYWpvcyIsImEiOiJjamQyNW5pcmsybjNrMnhvMXQxb2hlNHI3In0.6_NSwAZooCl3XoCmbAUoeA' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */

    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';

    //For Custom basemaps - Replace your username and StyleID
    var customBasemap = new L.tileLayer(mbStyleUrl, {id: 'badajos/ck0ohmxns078c1cmjd7r0as5l', token: apitoken,  attribution: mbAttr}).addTo(map);

    var baseMaps = {
        "Grayscale": customBasemap,
        "Open Street Map": osm
    };

    //adding mini map plugin
    var osm2 = new L.tileLayer(mbStyleUrl, {id: 'badajos/ck0ohmxns078c1cmjd7r0as5l', token: apitoken,  attribution: mbAttr});

    var miniMap = new L.Control.MiniMap(osm2, {centerFixed: [63.0, -151.0], zoomLevelFixed: 2, position: 'topright', /*zoomLevelOffset: -7,*/ autoToggleDisplay: true}).addTo(map);

    var overlayMaps = {
        /*"moose movements": test_line,*/
        /*"Fire": fireLayer*/
    };
    
    //add leaflet menu
    L.control.layers(baseMaps, overlayMaps).addTo(map);
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
    
    var linelayer = new L.GeoJSON.AJAX(linedata, 
        { style: function(feature){
            d = feature.properties.colorByAttr;
            var line = feature.properties.Individ_ID;
            
            /*console.log(line);*/
            if (line === 'A_32')
                return {color: '#696969',opacity:0.7};
            else if (line === 'A_35')
                return {color: '#556B2F',opacity:0.7};
            else if (line === 'A_51')
                return {color: '#B8860B',opacity:0.7};
            else if (line === 'A_59')
                return {color: '#006400',opacity:0.7};
            else if (line === 'A_61')
                return {color: '#00008B',opacity:0.7};
            else if (line === 'A_73')
                return {color: '#1E90FF',opacity:0.7};
            else if (line === 'A_82')
                return {color: '#483D8B',opacity:0.7};
            else if (line === 'A_86')
                return {color: '#FF1493',opacity:0.7};
            else if (line === 'A_89')
                return {color: '#8B4513',opacity:0.7};
            else if (line === 'A_96')
                return {color: '#4B0082',opacity:0.7};
            else if (line === 'A_97')
                return {color: '#8A2BE2',opacity:0.7};
            else if (line === 'A_100')
                return {color: '#8B0000',opacity:0.7};
            else if (line === 'A_103')
                return {color: '#008B8B',opacity:0.7};
            else return {color: '#5F9EA0',opacity:0.7}
         },
        pointToLayer: function (feature, latLng) {
            if (feature.properties.hasOwnProperty('last')) {
                var mark = new L.Marker(latLng, {
                    icon: icon
                });
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
                return mark;
            }
        },                            
    });
     
    var linelayerTD = L.timeDimension.layer.geoJson(linelayer, {
        updateTimeDimension: true,
        addlastPoint: true
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
                console.log(choice)
                if (choice === "All") {
                    addGeoJSONLayer(map, attributes) 
                }

                myData.clearLayers();
                map.removeLayer(myData);
                /*console.log(myData);*/

                var linelayer = L.geoJson(null, 
                    { style: function(feature) {
                    d = feature.properties.colorByAttr;
                    var line = feature.properties.Individ_ID;

                    /*console.log(line);*/
                    if (line === 'A_32')
                        return {color: '#696969',opacity:0.7};
                    else if (line === 'A_35')
                        return {color: '#556B2F',opacity:0.7};
                    else if (line === 'A_51')
                        return {color: '#B8860B',opacity:0.7};
                    else if (line === 'A_59')
                        return {color: '#006400',opacity:0.7};
                    else if (line === 'A_61')
                        return {color: '#00008B',opacity:0.7};
                    else if (line === 'A_73')
                        return {color: '#1E90FF',opacity:0.7};
                    else if (line === 'A_82')
                        return {color: '#483D8B',opacity:0.7};
                    else if (line === 'A_86')
                        return {color: '#FF1493',opacity:0.7};
                    else if (line === 'A_89')
                        return {color: '#8B4513',opacity:0.7};
                    else if (line === 'A_96')
                        return {color: '#4B0082',opacity:0.7};
                    else if (line === 'A_97')
                        return {color: '#8A2BE2',opacity:0.7};
                    else if (line === 'A_100')
                        return {color: '#8B0000',opacity:0.7};
                    else if (line === 'A_103')
                        return {color: '#008B8B',opacity:0.7};
                    else return {color: '#5F9EA0',opacity:0.7}
                 },
                    pointToLayer: function (feature, latLng) {
                        if (feature.properties.hasOwnProperty('last')) {
                            var mark = new L.Marker(latLng, {
                                icon: icon
                            });
                            var name = feature.properties.Individ_ID;
                            var age = feature.properties.Age;
                            var born = feature.properties.Calf;
                            var Survive = feature.properties.CalfNow;

                            var popupContent = "<p><b>Moose:</b> " + name + "</p>"

                                if (age == 0){
                                    popupContent += "<p><b>Age:</b> " + "</b> Unknown</p>"+"<p><b>Sex:</b> Female ";; 
                                }
                                else if (age >= 0){
                                    popupContent += "<p><b>Age:</b> " + age + "</p>"+"<p><b>Sex:</b> Female ";
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

