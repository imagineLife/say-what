import React from 'react';
import './horzBarChar.css';
import * as d3 from 'd3';
import 'd3-selection-multi';

export default class HorizontalBarChart extends React.Component {
	
	//constructor is automatically called: gives props to super
	//super passes props to this class
		//**super can ONLY be called from the constructor**
	//props are a key on this class object
	constructor(props){
		super(props);
	}

	//react sort-of-like document.ready
	componentDidMount(){
		this.buildChart();
	}

	componentDidUpdate(){
		this.buildChart();
	}

	componentDidCatch(err, info){
		console.log('CompDidCatch err...',err,info);
	}

		buildChart = () => {
			console.log(this.props);
			let data = [];

			// set the dimensions and margins of the graph
			var margin = {top: 20, right: 20, bottom: 30, left: 40},
			    width = 480 - margin.left - margin.right,
			    height = 250 - margin.top - margin.bottom;
			    // width = document.querySelector("div").clientWidth,
			    // height = document.querySelector("div").clientHeight;

			// set the ranges
			var y = d3.scaleBand()
			          .range([height, 0])
			          .padding(0.1);

			var x = d3.scaleLinear()
			          .range([0, width]);
		          
			// append the svg object to the body of the page
			// append a 'group' element to 'svg'
			// moves the 'group' element to the top left margin
			var svg = d3.select('body').append("svg")
			    .attrs({
			    	"width" : width + margin.left + margin.right,
			    	"height" : height + margin.top + margin.bottom
			    })
			  .append("g")
			    .attr("transform", 
			          "translate(" + margin.left + "," + margin.top + ")");


			this.props.dataKey.forEach(item => {
				let obj = {word: Object.keys(item), frequency: Object.values(item)};		
				return data.push(obj);
			});



			// Scale the range of the data in the domains
			x.domain([0, d3.max(data, function(d){ return d.frequency; })])
			y.domain(data.map(function(d) { return d.word; }));

			// append the rectangles for the bar chart
			svg.selectAll(".bar")
				//data needs to be an array in our case (of objects)
				.data(data)
				//all chains & callbacks reference data array 
				.enter().append("rect")
				  .attrs({
				  	"class" : "bar",
				  	"width" : (d) => {return x(d.frequency); },
				  	"y" : (d) => { return y(d.word); },
				  	"height" : y.bandwidth()
				  });



			// add the x Axis
			svg.append("g")
			  .attr("transform", "translate(0," + height + ")")
			  .call(d3.axisBottom(x));

			// add the y Axis
			svg.append("g")
			  .call(d3.axisLeft(y));
		}

	render(){    
    	return (
    		<div id='horizontalBarChart'>acdef</div>
    	);
    }
}
