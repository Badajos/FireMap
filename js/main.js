//------------Create the map--------------------------//
function createMap(){
    var map = L.map('map', {
        zoom: 10,
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
        center: [60.63, -150.46],
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
    
    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, ' +
        'AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
        
    var baseMaps = {
        "Open Street Map": osm,
        "Grayscale": customBasemap,
    };
    
     //------------add panel layers-------------------------//
    
    //------------new-------------------------//
var conf = {
    base: {
        title: 'Others Layers',
        layers: [
            {
                group: "Base Maps",
                collapsed: true,
                layers: [
                	{
                		name: "Open Street Map",
                		active: true,
                		layer: osm
                	},
                    {
                        name: "Grayscale",
                        layer: customBasemap
                    }
                ]
            },
            {  
		group: "Pre-fire Home Ranges",
		layers: [      
        {
                        
            active: false,
            name: "A_32",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_32.geojson", {
                style: function(feature){
                    d = feature.properties.colorByAttr;
                    return {color: '#708691',  
                            opacity:0.5
                            }
                }
            })   
        },
        {
            active: false,
            name: "A_35",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_35.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                return {color: '#598296',  
                    opacity:0.7
                }
            }
            }) 
        },  
        {
            active: false,
            name: "A_51",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_51.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#579c7a',  
                        //opacity:0.5
                    }
                }
            })
        },
        {
            active: false,
            name: "A_59",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_59.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#a67275',  
                        //opacity:0.5
                    }
                }
            })
        },  
        {
            active: false,
            name: "A_61",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_61.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#a64b50',  
                        //opacity:0.5
                    }
                }
            })
        },  
        {
            active: false,
            name: "A_73",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_73.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#3d7b99',  
                        //opacity:0.5
                    }
                }
            })
        },  
        {
            active: false,
            name: "A_82",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_82.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#73569c',  
                        //opacity:0.5
                    }
                }
            })
        },
        {
            active: false,
            name: "A_86",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_86.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#787bad',  
                        //opacity:0.5
                    }
                }
            })
        },   
        {
            active: false,
            name: "A_89",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_89.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#4b50ad',  
                        //opacity:0.5
                    }
                }
            })
        },   
        {
            active: false,
            name: "A_96",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_96.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#515157',  
                        //opacity:0.5
                    }
                }
            })
        },  
        {
            active: false,
            name: "A_97",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_97.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#787887',  
                        //opacity:0.5
                    }
                }
            })
        },  
        {
            active: false,
            name: "A_100 (offspring of A_82)",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_100.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#7f7094',  
                        //opacity:0.5
                    }
                }
            })
        }, 
        {
            active: false,
            name: "A_103 (offspring of A_51)",
            //icon: '<i class="icon icon-drinking_water"></i>',
            layer: L.geoJson.ajax("data/poly_GPS_A_103.geojson", {
                style: function(feature){
                d = feature.properties.colorByAttr;
                    return {color: '#739c88',  
                        //opacity:0.5
                    }
                }
            })
        },  
		]
        },
        ]
    },
}
    
    var base1 = L.control.panelLayers(conf.base.layers, null,  {
        title: conf.base.title,
        position: 'topright',
        compact: true,
        collapsibleGroups: true,
        collapseToStart: false,
    }).addTo(map);
    
    //------------add mini map plugin------------------//
    var osm2 = new L.tileLayer(mbStyleUrl, {id: 'badajos/ck0ohmxns078c1cmjd7r0as5l', token: apitoken,  attribution: mbAttr});

    var miniMap = new L.Control.MiniMap(osm2, {centerFixed: [63.0, -151.0], zoomLevelFixed: 2, position: 'bottomleft', /*zoomLevelOffset: -7,*/ autoToggleDisplay: true}).addTo(map);

    //----add leaflet menu (grouplayer plugin)---------//
    //L.control.groupedLayers(baseMaps, groupedOverlays).addTo(map);

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
    var legend = L.control({position: 'bottomleft'});
    
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
                
                var popupContent = "<b>Moose:</b> " + name + "<br>"
                                 
                    if (age == 0){
                        popupContent += "<b>Age:</b> " + "</b> Unknown <br>"+"<b>Sex:</b> Female "; 
                    }
                    else if (age >= 0){
                        popupContent += "<b>Age:</b> " + age + "<br>"+"<b>Sex:</b> Female ";
                    }
                
                var popupContent2 = popupContent += 
                    "<br><b>#Calves Born:</b> " + born + "<br>"
                    + "<b>#Calves Survive:</b> " + Survive + "<br>"
                
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
    //----------original data-------------------------------//
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
    //myData.addTo(map); //add to map
    
    //FilterSelect(myData, map);//send myData layer to filter
    
    //----------A32-------------------------------//
    var A32layer = new L.GeoJSON.AJAX(A32, 
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
        
    var A32layerTD = L.timeDimension.layer.geoJson(A32layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A32Data =  L.layerGroup([]);//empty layer group
    A32Data.addLayer(A32layerTD);//add line data to empty group
    A32Data.addTo(map); //add to map
    
    //----------A35-------------------------------//
    var A35layer = new L.GeoJSON.AJAX(A35, 
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
        
    var A35layerTD = L.timeDimension.layer.geoJson(A35layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A35Data =  L.layerGroup([]);//empty layer group
    A35Data.addLayer(A35layerTD);//add line data to empty group
    A35Data.addTo(map); //add to map
    
    //----------A51-------------------------------//
    var A51layer = new L.GeoJSON.AJAX(A51, 
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
        
    var A51layerTD = L.timeDimension.layer.geoJson(A51layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A51Data =  L.layerGroup([]);//empty layer group
    A51Data.addLayer(A51layerTD);//add line data to empty group
    A51Data.addTo(map); //add to map
    
    //----------A59-------------------------------//
    var A59layer = new L.GeoJSON.AJAX(A59, 
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
        
    var A59layerTD = L.timeDimension.layer.geoJson(A59layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A59Data =  L.layerGroup([]);//empty layer group
    A59Data.addLayer(A59layerTD);//add line data to empty group
    A59Data.addTo(map); //add to map
    
    //----------A61-------------------------------//
    var A61layer = new L.GeoJSON.AJAX(A61, 
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
        
    var A61layerTD = L.timeDimension.layer.geoJson(A61layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A61Data =  L.layerGroup([]);//empty layer group
    A61Data.addLayer(A61layerTD);//add line data to empty group
    A61Data.addTo(map); //add to map
    
    //----------A73-------------------------------//
    var A73layer = new L.GeoJSON.AJAX(A73, 
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
        
    var A73layerTD = L.timeDimension.layer.geoJson(A73layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A73Data =  L.layerGroup([]);//empty layer group
    A73Data.addLayer(A73layerTD);//add line data to empty group
    A73Data.addTo(map); //add to map
    
    //----------A82-------------------------------//
    var A82layer = new L.GeoJSON.AJAX(A82, 
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
        
    var A82layerTD = L.timeDimension.layer.geoJson(A82layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A82Data =  L.layerGroup([]);//empty layer group
    A82Data.addLayer(A82layerTD);//add line data to empty group
    A82Data.addTo(map); //add to map
    
     //----------A86-------------------------------//
    var A86layer = new L.GeoJSON.AJAX(A86, 
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
        
    var A86layerTD = L.timeDimension.layer.geoJson(A86layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A86Data =  L.layerGroup([]);//empty layer group
    A86Data.addLayer(A86layerTD);//add line data to empty group
    A86Data.addTo(map); //add to map
    
     //----------A89-------------------------------//
    var A89layer = new L.GeoJSON.AJAX(A89, 
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
        
    var A89layerTD = L.timeDimension.layer.geoJson(A89layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A89Data =  L.layerGroup([]);//empty layer group
    A89Data.addLayer(A89layerTD);//add line data to empty group
    A89Data.addTo(map); //add to map
    
    //----------A96-------------------------------//
    var A96layer = new L.GeoJSON.AJAX(A96, 
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
        
    var A96layerTD = L.timeDimension.layer.geoJson(A96layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A96Data =  L.layerGroup([]);//empty layer group
    A96Data.addLayer(A96layerTD);//add line data to empty group
    A96Data.addTo(map); //add to map
    
    //----------A97-------------------------------//
    var A97layer = new L.GeoJSON.AJAX(A97, 
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
        
    var A97layerTD = L.timeDimension.layer.geoJson(A97layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A97Data =  L.layerGroup([]);//empty layer group
    A97Data.addLayer(A97layerTD);//add line data to empty group
    A97Data.addTo(map); //add to map
    
    //----------A100-------------------------------//
    var A100layer = new L.GeoJSON.AJAX(A100, 
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
        
    var A100layerTD = L.timeDimension.layer.geoJson(A100layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A100Data =  L.layerGroup([]);//empty layer group
    A100Data.addLayer(A100layerTD);//add line data to empty group
    A100Data.addTo(map); //add to map
    
    //----------A103-------------------------------//
    var A103layer = new L.GeoJSON.AJAX(A103, 
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
        
    var A103layerTD = L.timeDimension.layer.geoJson(A103layer, {
        updateTimeDimension: true,
        addlastPoint: true,
        duration:"P7D",//this cuts off the line to show the last 7 days
    });
        
    var A103Data =  L.layerGroup([]);//empty layer group
    A103Data.addLayer(A103layerTD);//add line data to empty group
    A103Data.addTo(map); //add to map

    //----------filter data-------------------------------//
            
var conf = {
    tree: {
        title: "Filter by animal",
        layers: [
            {
                active: true,
                name: "A_32",
                layer: A32Data
            },
            {
                active: true,
                name: "A_35",
                layer: A35Data
            },
            {
                active: true,
                name: "A_51",
                layer: A51Data
            },
            {
                active: true,
                name: "A_59",
                layer: A59Data
            },
            {
                active: true,
                name: "A_61",
                layer: A61Data
            },
            {
                active: true,
                name: "A_73",
                layer: A73Data
            },
            {
                active: true,
                name: "A_82",
                layer: A82Data
            },
            {
                active: true,
                name: "A_86",
                layer: A86Data
            },
            {
                active: true,
                name: "A_89",
                layer: A89Data
            },
            {
                active: true,
                name: "A_96",
                layer: A96Data
            },
            {
                active: true,
                name: "A_97",
                layer: A97Data
            },
            {
                active: true,
                name: "A_100",
                layer: A100Data
            },
            {
                active: true,
                name: "A_103",
                layer: A103Data
            },
            
]}}
       
var over1 = L.control.panelLayers(null, conf.tree.layers, {
    title: conf.tree.title,
    position: 'topright',
    compact: true,
	collapsibleGroups: true,
}).addTo(map); 
    
    //---------- end filter data-------------------------------//
    
};

//------------global variables------------------------//
var polydata = "data/SwanLakeEachDay.geojson"
var linedata = "data/mooseline.geojson"
var A32 = "data/A_32.geojson"
var A35 = "data/A_35.geojson"
var A51 = "data/A_51.geojson"
var A59 = "data/A_59.geojson"
var A61 = "data/A_61.geojson"
var A73 = "data/A_73.geojson"
var A82 = "data/A_82.geojson"
var A86 = "data/A_86.geojson"
var A89 = "data/A_89.geojson"
var A96 = "data/A_96.geojson"
var A97 = "data/A_97.geojson"
var A100 = "data/A_100.geojson"
var A103 = "data/A_103.geojson"
 
//------------jquery method loads page----------------//
$(document).ready(createMap);

