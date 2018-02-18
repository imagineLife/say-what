import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


class Chart extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount(){
    this.buildChart();
  }

  componentDidUpdate(){
    this.buildChart();
  }

  buildChart = () => {

    let d = {};

    var format = d3.format(',d');

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var container = d3.select('.Responsive-wrapper');
  
  //Declare & set props of SVG
    var bubbleSVGWrapper = d3.select('.bubbleSVGWrapper'),
        bubbleSVGWidth = +container.style('width').replace('px',''),
        bubbleSVGHeight = 440;

        bubbleSVGWrapper
          .attrs({
            'viewBox' : '25, 0, 298, 439'// + bubbleSVGWidth + ', ' + bubbleSVGHeight,  // meaning => min-x, min-y, width, height
          });

  //PACK
    var pack = d3.pack()
        .size([298, 439])
        .padding(0);

  //begin the loop through data
    this.props.dataKey.forEach((obj) =>{
      d.value = obj.occurances;

  //declare ROOT
      var root = d3.hierarchy({children: this.props.dataKey})
          .sum(function(d) {
            return d.occurances; 
          });

  //declare the bubble element
  //  - pack ()
  //  - add a class
      var bubble = bubbleSVGWrapper.selectAll('.bubble')
        .data(pack(root).leaves())
        .enter().append('g')
          .attrs({
            'class': 'bubble',
            'transform': function(d) { 
              return 'translate(' + d.x + ',' + d.y + ')'; 
            }
          });

  //declare the circle
      bubble.append('circle')
          .attrs({
            'id' : function(d) { return d.id; },
            'class' : 'circle',
            'r' : function(d) { 
              // console.log('updating radius ->',d);
              return d.r; }
          })
          .style('fill', function(d,i) { return color(i); });

  //declare a clipPath
      bubble.append('clipPath')
          .attr('id', function(d) { 
            return d.size
          })
        .append('use')
          .attr('xlink:href', function(d) { return '#' + d.data.size.toString() });

  //declare the text
      bubble.append('text')
          .attrs({
            'clip-path' : function(d) { return 'url(#clip-'+d.data.size+')'; },
            'class' : 'clipText'
          })
        .selectAll('tspan')
        .data(function(d) { 
          let curKey = d.data.size;
          let ret = [{
            length : parseInt(curKey, 10),
            amt : (d.data.occurances)
          }];
          return ret;
        })

        .enter().append('tspan')
          .attrs({
            'x' : 0,
            'y' : function(d,i,letters) {
              return -5;
              // return 3;
            },
            'text-anchor' : 'middle',
            'class' : 'bubbleText title'
          })
          .text((val) => {
            return val.length+'-Letter'; 
          })
          .append('tspan')
          .attrs({
            'x' : 0,
            'y' : function(d,i,letters) {
              return 11;
            },
            'text-anchor' : 'middle',
            'class' : 'bubbleText title'
          })
          .text('Words')
          .append('tspan')
          .attrs({
            'x' : 0,
            'y' : function(d,i,letters) {
              return 30;
            },
            'text-anchor' : 'middle',
            'class' : 'bubbleText val'
          })
          .text((val) => {
            return val.amt; 
          });


  //declare the title, hidden from view, but exists in HTML
      bubble.append('title')
          .text(function(d) { 
            return d.data.size + '-letter Words : ' + format(d.value); });
    
    });


    resizeChart();

    d3.select(window).on('resize', resizeChart);

    function resizeChart() {
      console.log('resizingChart!');
  //Declare & set props of SVG
        bubbleSVGWidth = +container.style('width').replace('px','');

      var w = parseInt( bubbleSVGWidth, 10); // computed width
      var a = bubbleSVGWidth / bubbleSVGHeight; // = aspect ratio to be applied to the container
      bubbleSVGWrapper.attr('height', w / a  + 'px');
      

    }

  }

  shouldComponentUpdate() { return true }


  render() {

    //svgDimensions gets its withd from this.props.parentWidth
  // which SEEMS to come from the responsiveWrapper fn
  //  which wraps around the <Chart /> 
    // const svgDimensions = {
    //   width: Math.max(this.props.respWrapWidth, 300),
    //   height: 440
    // }

    // console.log('copied fn svgDimensions -->',svgDimensions);
    return (
      <svg className='bubbleSVGWrapper'>
      </svg>
    )
  }
}

export default Chart