function init() {
    let path = '../../python/resources/json_datasets/test.json'
    fetch(path).then((response) => response.json()).then(function (data) {
        console.log(data)

        // let x1 = []
        // let x2 = []
        let y1 = []
        let y2 = []

        let titles = ['EN','MI','SE','EX']
        let x = ['Entry Level','Intermediate','Middle-level','Senior']
        for (i=0;i<4;i++){
            
            // x1.push(`('Engineer/Architect', ${fulltitle[i]})`)
            // x2.push()

            y1.push(data[`('Engineer/Architect', '${titles[i]}')`])
            y2.push(data[`('Science/Analyst', '${titles[i]}')`])

        };
        // setPlots(data,'AK')
        var trace1 = {

            x: x,
          
            y: y1,
          
            type: 'lines+markers',

            name: 'Engineer/Architect'
          
          };
          
          
          var trace2 = {
          
            x: x,
          
            y: y2,
          
            type: 'lines+markers',
          
            name: 'Science/Analyst'
          };
          
          
          var data = [trace1, trace2];
          
          
          Plotly.newPlot('linePlot', data);
          });

};

init()