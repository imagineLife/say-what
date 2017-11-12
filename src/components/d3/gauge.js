import React from 'react';
import './horzBarChar.css';
import * as d3 from 'd3';
import 'd3-selection-multi';

export default class GaugeChart extends React.Component {
	
	constructor(props){
		super(props);

	//Spread props makes extensibility!!
		this.state = {...props,
			powerGauge : this.gauge(`#gcSVG${props.sectionKey}`, {
				totalRadius: 300,
				arcTotalWidth: 300,
				arcTotalHeight: 300,
				ringThickness: 60,
				maxRingValue: props.dataKey.wordCount,
				transitionMs: 4000,
			})
		}
	}

	componentDidMount(){

		this.state.powerGauge.render();
		this.state.powerGauge.setNeedleVal(this.props.dataKey.uniqueWords)

		// this.buildChart();
	}

	componentDidUpdate(){
		this.state.powerGauge.setNeedleVal();
		// this.buildChart();
	}

	componentDidCatch(err, info){
		console.log('CompDidCatch err...',err,info);
	}

/*
	set var that is a fn on a container & configuration
		- in this case, container is 
			<svg id={ `gcSVG${this.props.sectionKey}` }></svg>
		- configuration  is the setup of the chart

	HERE is a default configuration, above is more-custom configuration
*/
	gauge = (container, configuration) =>  {
		let that = {};
		let config = {
			totalRadius						: 710,
			arcTotalWidth					: 200,
			arcTotalHeight					: 110,
			outerRad					: 20,
			ringThickness				: 20,
			
			pointerWidth				: 10,
			pointerTailLength			: 5,
			pointerHeadLengthPercent	: 0.9,
			
			minRingVal					: 0,
			maxRingValue				: 10,
			
			minAngle					: -90,
			maxAngle					: 90,
			
			transitionMs				: 750,
			
			majorTicks					: 8,
			labelFormat					: d3.format('d'),
			labelInset					: 10,
			
			arcColorFn					: d3.interpolateHsl(d3.rgb('#e8e2ca'), d3.rgb('#3e6c0a'))
		};
		let range = undefined;
		let radius = undefined;
		let pointerHeadLength = undefined;
		
		let svg = undefined;
		let arc = undefined;
		let scale = undefined;
		let ticks = undefined;
		let tickData = undefined;
		let pointer = undefined;

		
		function deg2rad(deg) {
			return deg * Math.PI / 180;
		}
		
		function configure(configuration) {
			let prop = undefined;
			for ( prop in configuration ) {
				config[prop] = configuration[prop];
			}
			
			range = config.maxAngle - config.minAngle;
			radius = config.totalRadius / 2;
			pointerHeadLength = Math.round(radius * config.pointerHeadLengthPercent);

// a linear scale that maps domain values to a percent from 0..1
			scale = d3.scaleLinear()
				.range([0,1])
				.domain([config.minRingVal, config.maxRingValue]);
	
//ticks = arc colored-sections 
			ticks = scale.ticks(config.majorTicks);
			tickData = d3.range(config.majorTicks).map(function() {return 1/config.majorTicks;});
			
//SHAPE & Stats of the arc		
			arc = d3.arc()
				.innerRadius(radius - config.ringThickness - config.outerRad)
				.outerRadius(radius - config.outerRad)
				.startAngle(function(d, i) {
					let ratio = d * i;
					return deg2rad(config.minAngle + (ratio * range));
				})
				.endAngle(function(d, i) {
					let ratio = d * (i+1);
					return deg2rad(config.minAngle + (ratio * range));
				});
		}

		that.configure = configure;

		function centerTranslation() {
			return 'translate('+ radius +','+ radius +')';
		}
		
		function isRendered() {
			return (svg !== undefined);
		}

		that.isRendered = isRendered;
		
		function render(newValue) {
//declare svg 			
			svg = d3.select(container)
				.append('svg:svg')
					.attrs({
						'class' : 'gauge',
						'width' : config.arcTotalWidth,
						'height' : config.arcTotalHeight

					});
			
			let centerTransTxt = centerTranslation();
			
			let arcs = svg.append('g')
					.attrs({
						'class': 'arc',
						'transform': centerTransTxt
					});
			
			arcs.selectAll('path')
					.data(tickData)
				.enter().append('path')
					.attrs({
						'fill': (d, i) => { return config.arcColorFn(d * i); },
						'd' : arc
					});
			
			// let lg = svg.append('g')
			// 		.attrs({
			// 			'class': 'label',
			// 			'transform': centerTx,
			// 			'border': '1px solid green'
			// 		});

			// lg.selectAll('text')
			// 		.data(ticks)
			// 	.enter().append('text')
			// 		.attr('transform', function(d) {
			// 			let ratio = scale(d);
			// 			let newAngle = config.minAngle + (ratio * range);
			// 			return 'rotate(' +newAngle +') translate(0,' +(config.labelInset - r) +')';
			// 		})
			// 		.text(config.labelFormat);

			let lineData = [ [config.pointerWidth / 2, 0], 
							[0, -pointerHeadLength],
							[-(config.pointerWidth / 2), 0],
							[0, config.pointerTailLength],
							[config.pointerWidth / 2, 0] ];

			// console.log('lineData =>',lineData);

			let pointerLine = d3.line().curve(d3.curveLinear);

			let pointerG = svg.append('g').data([lineData])
					.attrs({
						'class': 'pointer',
						'transform' : centerTransTxt
					});
					
			// pointer = pointerG.append('path')
			// 	.attrs({
			// 		'd': pointerLine,
			// 		'transform': 'rotate(' +config.minAngle +')'
			// 	});
				
			// setNeedleVal(newValue === undefined ? 0 : newValue);
		}
		
		that.render = render;
		
		function setNeedleVal(newValue, newConfiguration) {
			// console.log('setting NeedleVal, newVal =>',newValue,'newConfig =>',newConfiguration);
			if ( newConfiguration  !== undefined) {
				configure(newConfiguration);
			}
			let ratio = scale(newValue);
			let newAngle = config.minAngle + (ratio * range);
			// pointer.transition()
			// 	.duration(config.transitionMs)
			// 	.ease(d3.easeElastic)
			// 	.attr('transform', 'rotate(' +newAngle +')');
		}
		
		that.setNeedleVal = setNeedleVal;

		configure(configuration);

		console.log('state is',this.state);


		return that;
	};
	
	// }

	shouldComponentUpdate() { return false }
	
	render(){
			console.log('STATE =>',this.state);

    	return (
    			<svg id={ `gcSVG${this.props.sectionKey}` }></svg>
    	);
    }
}
