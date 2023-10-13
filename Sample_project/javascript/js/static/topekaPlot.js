let topekaYear = [2013,2014,2015,2016,2017,
                  2018,2019,2020,2021,2022];
let topekaDailyAvgTemp = [
  58.9607843137,
  55.0328767123,
  56.9698630137,
  58.3989071038,
  57.4821917808,
  56.2547945205,
  55.3890410959,
  56.6666666667,
  57.5150684932,
  56.7768595041
];
let topekaDailyMaxTemp = [
  69.9967320261,
  66.1808219178,
  67.9753424658,
  69.3169398907,
  68.6438356164,
  67.4794520548,
  65.5835616438,
  67.5054644809,
  68.4191780822,
  68.8595041322
];
let topekaDailyMinTemp = [
  47.4509803922,
  43.4547945205,
  45.4547945205,
  46.9754098361,
  45.9945205479,
  44.5780821918,
  44.7369863014,
  45.3387978142,
  46.098630137,
  44.2258953168
];

// Display the default plot
function init() {
  let topekaTrace1 = {
    x: topekaYear,
    y: topekaDailyAvgTemp,
    type: "line",
    line: {color: 'green', width: 4}
  };
  
  let layout = {
    title: 'Topeka, Kansas Average Yearly Temperature (\u00B0F)',
    plot_bgcolor: '#e0e0eb',
    paper_bgcolor: '#ffff99',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Temperature'
    }
  };
  
  let data = [topekaTrace1];
  
  Plotly.newPlot("topekaLine", data, layout);
};

let topekaTrace1 = {
  x: topekaYear,
  y: topekaDailyAvgTemp,
  type: "line",
  line: {color: 'green', width: 4},
  name: 'Average Daily Average Temp'
};
let topekaTrace2 = {
  x: topekaYear,
  y: topekaDailyMaxTemp,
  type: "line",
  line: {color: 'firebrick', width: 4},
  name: 'Average Daily Max Temp'
};
let topekaTrace3 = {
  x: topekaYear,
  y: topekaDailyMinTemp,
  type: "line",
  line: {color: 'darkblue', width: 4},
  name: 'Average Daily Min Temp'
};


// On change to the DOM, call getData()
d3.selectAll("#selTopekaDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selTopekaDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  let layout = {
    title: 'Topeka, Kansas Average Yearly Temperature (\u00B0F)',
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
      data = [topekaTrace2];
  }
  else if (dataset == 'avgDailyMinTemp') {
      data = [topekaTrace3];
  }
  else if (dataset == 'avgDailyAvgTemp') {
    data = [topekaTrace1];
  }
  else if (dataset == 'allAvg') {
    data = [topekaTrace1,topekaTrace2,topekaTrace3];
  }
// Call function to update the chart
  Plotly.newPlot("topekaLine", data, layout);
}

init();
