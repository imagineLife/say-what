import React from 'react';
import './horzBarChar.css';
import * as d3 from 'd3';

export default function HorizontalBarChart(props) {
	//EPIC 
	let data = [];

	// set the dimensions and margins of the graph
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
	    width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;

	// set the ranges
	var y = d3.scaleBand()
	          .range([height, 0])
	          .padding(0.1);

	var x = d3.scaleLinear()
	          .range([0, width]);
          
	// append the svg object to the body of the page
	// append a 'group' element to 'svg'
	// moves the 'group' element to the top left margin
	var svg = d3.select("body").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", 
	          "translate(" + margin.left + "," + margin.top + ")");

	//props.dataKey is the name of the prop in React
	for(let k in props.dataKey){
		console.log(k);
		//converts props data to this-needed-format
		// let obj = {word: k, frequency: +props.dataKey[k]};
		// data.push(obj);
	}

	console.log(data);

	// Scale the range of the data in the domains
	x.domain([0, d3.max(data, function(d){ return d.frequency; })])
	y.domain(data.map(function(d) { return d.word; }));

	// append the rectangles for the bar chart
	svg.selectAll(".bar")
		//data needs to be an array in our case (of objects)
		.data(data)
		//all chains & callbacks reference data array 
		.enter().append("rect")
		  .attr("class", "bar")
		  .attr("width", function(d) {return x(d.frequency); } )
		  .attr("y", function(d) { return y(d.word); })
		  .attr("height", y.bandwidth());

	// add the x Axis
	svg.append("g")
	  .attr("transform", "translate(0," + height + ")")
	  .call(d3.axisBottom(x));

	// add the y Axis
	svg.append("g")
	  .call(d3.axisLeft(y));

    return (
    	<div></div>
    );
}