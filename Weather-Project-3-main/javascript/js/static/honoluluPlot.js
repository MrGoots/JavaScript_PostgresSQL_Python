let honoluluYear = [2013,2014,2015,2016,2017,
    2018,2019,2020,2021,2022];
let honoluluDailyAvgTemp = [
    77.98692810457516,
    78.44931506849315,
    78.72054794520548,
    78.08196721311475,
    78.25479452054795,
    79.06027397260274,
    79.58630136986301,
    79.17213114754098,
    78.33972602739726,
    78.37569060773481
];
let honoluluDailyMaxTemp = [
    84.2843137254902,
    84.45753424657535,
    85.02739726027397,
    84.09016393442623,
    84.68493150684931,
    84.75068493150685,
    86.15616438356165,
    85.4672131147541,
    84.81095890410958,
    84.73480662983425
];
let honoluluDailyMinTemp = [
    71.22222222222223,
    71.98904109589041,
    72.15890410958905,
    71.61475409836065,
    71.5013698630137,
    72.9041095890411,
    72.4958904109589,
    72.39344262295081,
    71.59726027397261,
    71.51104972375691
];

// Display the default plot
function init() {
let honoluluTrace1 = {
x: honoluluYear,
y: honoluluDailyAvgTemp,
type: "line",
line: {color: 'green', width: 4}
};

let layout = {
title: 'Honolulu, Hawaii Average Yearly Temperature (\u00B0F)',
plot_bgcolor: '#e0e0eb',
paper_bgcolor: '#ffff99',
xaxis: {
title: 'Year'
},
yaxis: {
title: 'Temperature'
}
};

let data = [honoluluTrace1];

Plotly.newPlot("honoluluLine", data, layout);
};

let honoluluTrace1 = {
x: honoluluYear,
y: honoluluDailyAvgTemp,
type: "line",
line: {color: 'green', width: 4},
name: 'Average Daily Average Temp'
};
let honoluluTrace2 = {
x: honoluluYear,
y: honoluluDailyMaxTemp,
type: "line",
line: {color: 'firebrick', width: 4},
name: 'Average Daily Max Temp'
};
let honoluluTrace3 = {
x: honoluluYear,
y: honoluluDailyMinTemp,
type: "line",
line: {color: 'darkblue', width: 4},
name: 'Average Daily Min Temp'
};


// On change to the DOM, call getData()
d3.selectAll("#selHonoluluDataset").on("change", getData);

// Function called by DOM changes
function getData() {
let dropdownMenu = d3.select("#selHonoluluDataset");
// Assign the value of the dropdown menu option to a letiable
let dataset = dropdownMenu.property("value");
let layout = {
title: 'Honolulu, Hawaii Average Yearly Temperature (\u00B0F)',
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
data = [honoluluTrace2];
}
else if (dataset == 'avgDailyMinTemp') {
data = [honoluluTrace3];
}
else if (dataset == 'avgDailyAvgTemp') {
data = [honoluluTrace1];
}
else if (dataset == 'allAvg') {
data = [honoluluTrace1,honoluluTrace2,honoluluTrace3];
}
// Call function to update the chart
Plotly.newPlot("honoluluLine", data, layout);
}

init();
