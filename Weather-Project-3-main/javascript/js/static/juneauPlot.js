let juneauYear = [2013,2014,2015,2016,2017,
    2018,2019,2020,2021,2022];
let juneauDailyAvgTemp = [
    44.4248366013,
    43.4054794521,
    44.7616438356,
    45.0710382514,
    41.6739726027,
    43.2191780822,
    44.5452054795,
    42.6393442623,
    42.0191780822,
    43.3369863014
];
let juneauDailyMaxTemp = [
    50.6568627451,
    49.4054794521,
    50.504109589,
    51.1448087432,
    47.6301369863,
    49.8356164384,
    51.1123287671,
    48.0819672131,
    47.6054794521,
    49.1945205479
];
let juneauDailyMinTemp = [
    37.6960784314,
    36.8712328767,
    38.501369863,
    38.5245901639,
    35.2,
    36.0712328767,
    37.4739726027,
    36.6775956284,
    35.9369863014,
    36.9808219178
];

// Display the default plot
function init() {
let juneauTrace1 = {
x: juneauYear,
y: juneauDailyAvgTemp,
type: "line",
line: {color: 'green', width: 4}
};

let layout = {
title: 'Juneau, Alaska Average Yearly Temperature (\u00B0F)',
plot_bgcolor: '#e0e0eb',
paper_bgcolor: '#ffff99',
xaxis: {
title: 'Year'
},
yaxis: {
title: 'Temperature'
}
};

let data = [juneauTrace1];

Plotly.newPlot("juneauLine", data, layout);
};

let juneauTrace1 = {
x: juneauYear,
y: juneauDailyAvgTemp,
type: "line",
line: {color: 'green', width: 4},
name: 'Average Daily Average Temp'
};
let juneauTrace2 = {
x: juneauYear,
y: juneauDailyMaxTemp,
type: "line",
line: {color: 'firebrick', width: 4},
name: 'Average Daily Max Temp'
};
let juneauTrace3 = {
x: juneauYear,
y: juneauDailyMinTemp,
type: "line",
line: {color: 'darkblue', width: 4},
name: 'Average Daily Min Temp'
};


// On change to the DOM, call getData()
d3.selectAll("#selJuneauDataset").on("change", getData);

// Function called by DOM changes
function getData() {
let dropdownMenu = d3.select("#selJuneauDataset");
// Assign the value of the dropdown menu option to a letiable
let dataset = dropdownMenu.property("value");
let layout = {
title: 'Juneau, Alaska Average Yearly Temperature (\u00B0F)',
plot_bgcolor: '#e0e0eb',
paper_bgcolor: '#ffff99',
xaxis: {
title: 'Year'
},
yaxis: {
title: 'Temperature'
}
};
if (dataset == 'avgDailyMaxTemp') {
data = [juneauTrace2];
}
else if (dataset == 'avgDailyMinTemp') {
data = [juneauTrace3];
}
else if (dataset == 'avgDailyAvgTemp') {
data = [juneauTrace1];
}
else if (dataset == 'allAvg') {
data = [juneauTrace1,juneauTrace2,juneauTrace3];
}
// Call function to update the chart
Plotly.newPlot("juneauLine", data, layout);
}

init();
