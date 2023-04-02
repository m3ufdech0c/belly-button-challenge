// URL for that contains the sample data.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

function init(){
    //Selecting the html element on the page for the dropdown
    let dropdown = d3.select("#selDataset");
    d3.json(url).then((data) => {
        for (i=0; i < data.names.length; i++){
            // Append a new selection option with its displayed text and value
            dropdown.append("option").text(data.names[i]).property("value",data.names[i])
        };
        //Initializing the chart with the first value of the selection
    charts(data.names[0]);
    samplemetadata(data.names[0]);
    });
    

}

// Writing a function to build the charts (the argument of the function is a name representing ids)
function charts(name){
    // use d3.json to access the data from the url
    d3.json(url).then((data) => {
        // Looking at the 'samples' section of the data and filtering according to 
        // the passed argument to create the variables out of the data to be used in the charts
        let otu_ids = data.samples.filter(obj => obj.id == name)[0].otu_ids;
        let sample_values = data.samples.filter(obj => obj.id == name)[0].sample_values;
        let otu_labels = data.samples.filter(obj => obj.id == name)[0].otu_labels;
        
        // 2. Creating a horizontal bar chart with a dropdown menu 
        // to display the top 10 OTUs found in that individual.
        
        let histdata = [{
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(obj => `otu${obj}`).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        }]
        Plotly.newPlot("bar",histdata)
        
        // 3. Creating a bubble chart that displays each sample. 
        let bubblechartdata = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {size:sample_values,color:otu_ids,colorscale:"Picnic"}
        }]
        let layout = {xaxis:{title:"OTU ID"}}
        Plotly.newPlot("bubble",bubblechartdata,layout)
    })
}

// 4. Displaying the sample metadata, i.e., an individual's demographic information.
// Writing a function to build Demographic info section
function samplemetadata(name){
    d3.json(url).then((data) => {
        // Use d3 to select the panel with id of `#sample-metadata`
        let panel = d3.select("#sample-metadata");
        // access the first object of the array and save it as your data and
        let metadata = data.metadata.filter(obj => obj.id == name)[0]
        panel.html("");
        for (datapoint in metadata){
            panel.append("h4").text(`${datapoint}: ${metadata[datapoint]}` )
        }
    } )

}

// Calling a function that will fetch new data each time a new sample is selected
function optionChanged(name){
    charts(name);
    samplemetadata(name);
}

init();



