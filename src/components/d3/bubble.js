import React from 'react';
import './bubble.css';
import * as d3 from 'd3';
import 'd3-selection-multi';

export default class BubbleChart extends React.Component {
	
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
					console.log('props are', this.props.dataKey);

	//placeholder for reformatted data	
		// let data = [];
		let csv = 'id,value';

	// set the dimensions and margins of the graph
		var margin = {top: 0, right: 20, bottom: 30, left: 40},
		    width = 500 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;
	          
	// append the svg object to the svg element
		/*
		NOTE:
			KEY (this.props.sectionKey) must be unique per section component
		*/
		let svg = d3.select(`#bblChrtSVG${this.props.sectionKey}`)
		    .attrs({
		    	"width" : width + margin.left + margin.right,
		    	"height" : height + margin.top + margin.bottom
		    });

	//storing d3 pack fn in var
		let pack = d3.pack()
		    .size([width, height])
		    .padding(1.5);

	//FORMAT var?
		// let format = d3.format(",d");

	//default color mapping
		// let color = d3.scaleOrdinal(d3.schemeCategory20c);

	//add the props data to the data array
		this.props.dataKey.forEach((item, ind) => {
			csv +=`\n${Object.keys(item)},${Object.values(item)}`;
		});

		// console.log('csv is =>', csv);

		d3.csv(csv, function(d) {
		  d.value = +d.value;
		  console.log('csv parsing d =>',csv);
		  if (d.value) return d;
		}, function(error, classes) {
			// console.log('classes is =>',classes);
		  if (error) throw error;

			let root = d3.hierarchy({children: classes})
				.sum(function(d) { 
					// console.log('sum d =>',d);
					return d.value; });
				// .each(function(d) {
				// 	console.log('each d is =>',d);
				//     // if (id = d.id) {
				//     //   let id, i = id;
				//     //   d.id = id;
				//     //   // d.package = id.slice(0, i);
				//     //   d.class = id.slice(i + 1);
				// 	// }
				// });

	// Create NODES
			let node = svg.selectAll(".node")
				.data(pack(root).leaves())
				.enter().append("g")
				.attrs({
					"class" : "node",
					"transform" : function(d) { return "translate(" + d.id + "," + d.value + ")"; }
				});

	// add CIRCLES to the nodes?
			node.append("circle")
				.attrs({
					"id" : function(d) { return d.wordSize; },
					"r" : function(d) { return d.howManyTimes; }
				});
			// .style("fill", function(d) { return color(d.package); });

	// add a clipPath to the nodes?
			node.append("clipPath")
				.attr("id", function(d) { return "clip-" + d.wordSize; })
				.append("use")
				.attr("xlink:href", function(d) { return "#" + d.wordSize; });
		})
	};

	// shouldComponentUpdate() { return false }

	render(){    
    	return (
    		<div id='horizontalBarChart'>
    			<svg id={`bblChrtSVG${this.props.sectionKey}`}></svg>
    		</div>
    	);
    }
}
