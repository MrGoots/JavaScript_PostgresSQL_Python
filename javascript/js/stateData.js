function setDropDown() {
    let path = '../../python/resources/json_datasets/locations.json'
    fetch(path).then((response) => response.json()).then(function (data) {
    // Populate dropdown with json names data
        let stateName = ''
        let dMenu = d3.select("#selDataset")
        for (i=0;i<data.length;i++) {
            stateName = data[i].name
            newEle = dMenu.append('option')
            newEle.text(stateName)
            newEle.property('value',data[i].state)
        };
    });
    
};

function setPlots(dataFull,state='AK') {


    let x
    let y
    [x,y] = getStateInfo(dataFull,state='AK')
    console.log(x)
    data = [{
        x: x,
        y: Array(x.length).fill(0),
        type: 'bar'}];

    layout = {
        xaxis: {
            automargin: true
          },
        title: 'Top Roles (Up to 10)',
        height: 500,

    };
    Plotly.newPlot("stateBar", data,layout);

    data = [{
        x: x,
        y: y,
        type: 'bar'}];
    
    layout = {autosize: true,yaxis: {range:[0,y[0]*1.25]} }

    Plotly.animate("stateBar", { data: data,layout:layout }, { ...animationConfig });

    };


function resetPlots(dataFull,state='AK') {
    // Reset bar chart
    let x
    let y 
    [x,y] = getStateInfo(dataFull,state)
    trace1 = {
        x: x,
        y: y,
        type: "bar"
    };
    console.log(y[0])
    layout = {autosize: true,yaxis: {range:[0,y[0]*1.25]} }

    let finalData = [trace1];
    Plotly.animate("stateBar", { data: finalData,layout:layout }, { ...animationConfig });

};


function optionChanged() {
    let path = '../../python/resources/json_datasets/jobTitle.json'
    fetch(path).then((response) => response.json()).then(function (data) {

        let dropdownMenu = d3.select("#selDataset");
        let state = dropdownMenu.property("value");
        resetPlots(data,state)


    });
};

    // Start of initializing
function init() {
    let path = '../../python/resources/json_datasets/jobTitle.json'
    fetch(path).then((response) => response.json()).then(function (data) {
        // console.log(data)
        setDropDown();
        setPlots(data,'AK')
          });

};

function getStateInfo(dataFull,state) {
    let stateDict = {}
    for (i=0;i<dataFull.length;i++) {
        if (dataFull[i].EMPLOYER_STATE === state) {
            if (!(dataFull[i].SOC_TITLE in stateDict)) {
                stateDict[dataFull[i].SOC_TITLE] = 0
            };
            stateDict[dataFull[i].SOC_TITLE] ++
        };

    };

    // Create items array
    stateSort = Object.keys(stateDict).map(function(key) {
        return [key, stateDict[key]];
    });
    
    // Sort the array based on the second element
    stateSort.sort(function(first, second) {
        return second[1] - first[1];
    });

    // // Initialize Bar Chart Use 0
    let x = []
    let y = []
    let len = 10
    if (stateSort.length < 10) {
        len = stateSort.length
    }
    for (i=0;i<len;i++){
        x.push(stateSort[i][0])
        y.push(stateSort[i][1])
    };
    
    return [x,y]
};
  

let animationConfig = {

    frame: [

      {duration: 1500},

      {duration: 1500},

    ],

    transition: [

      {duration: 800, easing: 'cubic-in'},

      {duration: 800, easing: 'cubic-out'},

    ],

    mode: 'afterall'

  }


init()