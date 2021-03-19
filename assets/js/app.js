// @TODO: YOUR CODE HERE!

// Dimentions of SVG Area 
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 50, 
    bottom: 50, 
    left: 50, 
    right: 50
};

var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;

// SVG elements 
var svg = d3
    .select('#scatter')
    .append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth);

// Group elements 
var chartGroup = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);



// Pull data from CSV 
d3.csv('./assets/data/data.csv').then(function(data){
    // console.log(data);
    data.forEach(function(smokersData) {
        smokersData.smokes = +smokersData.smokes;
        smokersData.age = +smokersData.age;
        // console.log(smokersData)
    });




    // Scatter Plot 
    // Add x axis 
    var x = d3.scaleLinear()
        .domain([0, 4000])
        .range([0, width]);
    svg.append('g')
        .attr('tranform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    // Add y axis 
    var y = d3.scaleLinear()
        .domain([0, 5000])
        .range([height, 0])
    svg.append('g')
        .call(d3.axisLeft(y));

    // Add dots 
    svg.append('g')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        // check if it's necessary???
        // .attr('class', 'circle')
        // .attr('cx', function(d) { return x(d); } )
        // .attr('cy', function(d) { return y(d); } )
        .attr('r', 1.5)
        .attr('fill', '#69b3a2');



    
}).catch(function(error) {
    console.log(error);

});

    







// Include state abbreviations in the circles

// Create and situate your axes and labels to the left and bottom of the chart







// * Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.
