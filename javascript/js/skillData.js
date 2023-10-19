


// function setPlot(data){


//     data = [{
//         x: ,
//         y: counts,
//         type: 'radialBar'}];
//     layout = {
//         xaxis: {
//             automargin: true
//           },
//         title: 'Top Roles (Up to 10)',
//         height: 500,

//     };

//     : [76, 67, 61, 90],
//     chart: {
//     // height: 390,
//     // type: 'radialBar',
//     },
//     plotOptions: {
//     radialBar: {
//         offsetY: 0,
//         startAngle: 0,
//         endAngle: 270,
//         hollow: {
//         margin: 5,
//         size: '30%',
//         background: 'transparent',
//         image: undefined,
//         },
//         dataLabels: {
//         name: {
//             show: false,
//         },
//         value: {
//             show: false,
//         }
//         }
//     }
//     },
//     colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
//     labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
//     legend: {
//     show: true,
//     floating: true,
//     fontSize: '16px',
//     position: 'left',
//     offsetX: 160,
//     offsetY: 15,
//     labels: {
//         usecountsColors: true,
//     },
//     markers: {
//         size: 0
//     },
//     formatter: function(countsName, opts) {
//         return countsName + ":  " + opts.w.globals.counts[opts.countsIndex]
//     },
//     itemMargin: {
//         vertical: 3
//     }
//     },
//     responsive: [{
//     breakpoint: 480,
//     options: {
//         legend: {
//             show: false
//         }
//     }
//     }]
// };


function setSkillDropDown(data) {
    // let path = '../../python/resources/json_datasets/locations.json'
    // fetch(path).then((response) => response.json()).then(function (data) {
    // Populate dropdown with json names data
        // let stateName = ''
    // console.log('here')//data)
    let dMenu = d3.select("#selPlatform")

    let newEle = dMenu.append('option')
    newEle.text('All Platforms')
    newEle.property('value','ALL')
    let used = []
    for (i=0;i<data.length;i++) {
        if (!(used).includes(data[i].PLATFORM)) {
            newEle = dMenu.append('option')
            newEle.text(data[i].PLATFORM)
            newEle.property('value',data[i].PLATFORM)
            used.push(data[i].PLATFORM)
        } 
        };
    };
    // };

function setSkillPlots(dataFull,platform = 'ALL') {

    let x
    let y
    [x,y] = getSkillInfo(dataFull)

    data = [{
        x: x,
        y: y,
        type: 'bar'}];
    layout = {
        xaxis: {
            automargin: true
          },
        title: 'Top Skills (Up to 5)',
        height: 500,

    };
    Plotly.newPlot("skillBar", data,layout);


    };


function resetSkillPlots(dataFull,platform='ALL') {

    // Reset bar chart
    let x
    let y
    [x,y] = getSkillInfo(dataFull,platform)
    Plotly.restyle("skillBar", 'x', [x]);
    Plotly.restyle("skillBar", 'y',[y]);

};


function platformChanged() {
    let path = '../../python/resources/json_datasets/gsearch.json'
    fetch(path).then((response) => response.json()).then(function (data) {

        let dropdownMenu = d3.select("#selPlatform");
        let platform = dropdownMenu.property("value");
        console.log(platform)
        resetSkillPlots(data,platform)


    });
};

    // Start of initializing
function init() {
    let path = '../../python/resources/json_datasets/gsearch.json'
    fetch(path).then((response) => response.json()).then(function (data) {



        setSkillDropDown(data);
        // console.log('dd')
        setSkillPlots(data,'ALL')
          });

};

function getSkillInfo(dataFull,platform = 'ALL') {

    let skillCnt = {}
    for (i=0;i<dataFull.length;i++) {
        if (platform === 'ALL') {
            // console.log(dataFull.SKILLS)
            for (j=0;j<dataFull[i].SKILLS.length;j++) {
                if (!(dataFull[i].SKILLS[j] in skillCnt)) {
                    skillCnt[dataFull[i].SKILLS[j]] = 0
                };
                skillCnt[dataFull[i].SKILLS[j]]++
            }; 
        } else if (dataFull[i].PLATFORM === platform){
            for (j=0;j<dataFull[i].SKILLS.length;j++) {

                    if (!(dataFull[i].SKILLS[j] in skillCnt)) {
                            skillCnt[dataFull[i].SKILLS[j]] = 0
                        };
                        skillCnt[dataFull[i].SKILLS[j]]++
        };
        }

    };

    // Create items array
    skillSort = Object.keys(skillCnt).map(function(key) {
        return [key, skillCnt[key]];
    });
    
    // Sort the array based on the second element
    skillSort.sort(function(first, second) {
        return second[1] - first[1];
    });

    // // Initialize Bar Chart Use 0
    let x = []
    let y = []
    let len = 10
    if (skillSort.length < len) {
        len = skillSort.length
    }
    for (i=0;i<len;i++){
        x.push(skillSort[i][0])
        y.push(skillSort[i][1])
    };
    
    return [x,y]
}


init()