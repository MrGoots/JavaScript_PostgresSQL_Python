// Save config information.
let url = "http://api.openweathermap.org/data/2.5/weather?";
let units = "imperial";
let country = 'US';
let layerMarkers = [];

// Build partial query URL
queryUrl = `${url}appid=${apiKey}&units=${units}&`;


// US Capitol Cities:'Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Honolulu', 'Tallahassee', 'Atlanta',
//             'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 
//             'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Raleigh', 
//             'Bismarck', 'Albany', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 
//             'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne']
// Get latitude and temperature for cities

const cities = [[32.377716,-86.300568],[58.301598,-134.420212],[33.448143,-112.096962],[34.746613,-92.288986],[38.576668,-121.493629],[39.739227,-104.984856]
,[41.764046,-72.682198],[39.157307,-75.519722],[21.307442,-157.857376],[30.438118,-84.281296],[33.749027,-84.388229],[43.617775,-116.199722],[39.798363,-89.654961]
,[39.768623,-86.162643],[41.591087,-93.603729],[39.048191,-95.677956],[38.186722,-84.875374],[30.457069,-91.187393],[44.307167,-69.781693]
,[38.978764,-76.490936],[42.358162,-71.063698],[42.733635,-84.555328],[44.955097,-93.102211],[32.303848,-90.182106],[38.579201,-92.172935]
,[46.585709,-112.018417],[40.808075,-96.699654],[39.163914,-119.766121],[43.206898,-71.537994],[40.220596,-74.769913],[35.68224,-105.939728]
,[35.78043,-78.639099],[46.82085,-100.783318],[42.652843,-73.757874],[39.961346,-82.999069],[35.492207,-97.503342],[44.938461,-123.030403],[40.264378,-76.883598]
,[41.830914,-71.414963],[34.000343,-81.033211],[44.367031,-100.346405],[36.16581,-86.784241],[30.27467,-97.740349],[40.777477,-111.888237],[44.262436,-72.580536]
,[37.538857,-77.43364],[47.035805,-122.905014],[38.336246,-81.612328],[43.074684,-89.384445],[41.140259,-104.820236]]



// set up lists to hold response info
lat = []
lon = []
temp = []
descr = []
weatherData = []

// Loop through the list of cities and perform a request for data on each
for (i = 0; i < cities.length; i++) {
  d3.json(queryUrl + 'lat=' + cities[i][0] + '&lon=' + cities[i][1]).then(function (data) {
    lat.push(data['coord']['lat'])
    lon.push(data['coord']['lon'])
    temp.push(data['main']['temp'])
    descr.push(data['weather'][0]['description'])
    console.log(data);
    weatherData.push({
      city: data['name'],
      lat: data['coord']['lat'],
      lon: data['coord']['lon'],
      temp: data['main']['temp'],
      descr: data['weather'][0]['description'],
      
    });

    // console.log the weatherData after all requests have been processed
    if (weatherData.length == cities.length) {
      for (let x = 0; x < weatherData.length; x++) {
        // let layerMarkers = [];
        let cityWeather = weatherData[x];
        let location = [];
        // Create the icon markers with thermometer
        var icons = {
            City_Capitols: L.ExtraMarkers.icon({
            icon: "ion-thermometer",
            iconColor: "white",
            markerColor: "blue-dark",
            shape: "circle"
          })
        };

        let capCode = 'City_Capitols';
        location.push(cityWeather.lat);
        location.push(cityWeather.lon);
        console.log(cityWeather);
        var capitol = L.marker(location, {icon: icons[capCode]})
          .bindPopup(`<h2>${cityWeather.city}</h2> <hr> <h3>Current Temperature: ${cityWeather.temp} (\u00B0F)</h3> <hr> <h3>Current Weather: ${cityWeather.descr}</h3>`).addTo(myMap);
        layerMarkers.push(capitol);
        // console.log(layerMarkers);
      };
      console.log(layerMarkers); 
     // Create a map object.
   
    };

  });

}
// Add all the cityMarkers to a new layer group.
// Now, we can handle them as one group instead of referencing each one individually.
var cityLayer = L.layerGroup(layerMarkers);

// Define variables for our tile layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Only one base layer can be shown at a time.
var baseMaps = {
  Street: street,
  Topography: topo
};

// Overlays that can be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create a map object, and set the default layers.
var myMap = L.map("map-id", {
  center: [39.00, -95.71],
  zoom: 4,
  layers: [street, cityLayer]
});

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps).addTo(myMap);
