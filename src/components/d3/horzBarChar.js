import React from 'react';
import './horzBarChar.css';
import * as d3 from 'd3';
import 'd3-selection-multi';

export default class HorizontalBarChart extends React.Component {
	
	//THROWS WARNING
	// constructor(props){
	// 	super(props);
	// }

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
		let data = [];

	// set the dimensions and margins of the graph
		var margin = {top: 10, right: 100, bottom: 30, left: 60},
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
	          
	// append the svg object to the svg element
		// append a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		/*
		NOTE:
			KEY (this.props.key) must be unique per section component
		*/
		var svg = d3.select(`#hbcSVG${this.props.sectionKey}`)
		    .attrs({
		    	"width" : width + margin.left + margin.right,
		    	"height" : height + margin.top + margin.bottom
		    })
		  .append("g")
		    .attr("transform", 
		          "translate(" + margin.left + "," + margin.top + ")");

	//add the props data to the data array
		this.props.dataKey.forEach(item => {
			let obj = {word: Object.keys(item), frequency: Object.values(item)};		
			return data.push(obj);
		});


	// Scale the range of the data in the domains
		x.domain([0, d3.max(data, function(d){ return d.frequency; })])
		y.domain(data.map(function(d) { return d.word; }));

	// Create BARS
		svg.selectAll(".bar")
	//add DATA to the bars via the data array
			.data(data)
	//add rectangles to the bar elements
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

	shouldComponentUpdate() { return false }
	
	render(){    
    	return (
    		<div id='horizontalBarChart'>
    			<svg id={ `hbcSVG${this.props.sectionKey}` }></svg>
    		</div>
    	);
    }
}
