import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
// import ResponsiveWrapper from '../../../ResponsiveWrapper'
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

    let dataObj = {};

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
    var d3PackFn = d3.pack()
        .size([298, 439])
        .padding(0);

  //begin the loop through data
    this.props.dataKey.forEach((obj) =>{
      dataObj.value = obj.occurances;

  //declare ROOT
      var root = d3.hierarchy({children: this.props.dataKey})
          .sum(d => d.occurances);

  //declare the bubble element
  //  - pack ()
  //  - add a class
      var bubble = bubbleSVGWrapper.selectAll('.bubble')
        .data(d3PackFn(root).leaves())
        .enter().append('g')
          .attrs({
            'class': 'bubble',
            'transform': d => `translate(${d.x},${d.y})`
          });

  //declare the circle
      bubble.append('circle')
          .attrs({
            'id' : function(d) { return d.id; },
            'class' : 'circle',
            'r' : function(d) { 
              return d.r; }
          })
          .style('fill', (d,i) => color(i));

  //declare a clipPath
      bubble.append('clipPath')
          .attr('id', d => d.size)
        .append('use')
          .attr('xlink:href', d => `#${d.data.size.toString()}`);

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
  //Declare & set props of SVG
        bubbleSVGWidth = +container.style('width').replace('px','');

      var w = parseInt( bubbleSVGWidth, 10); // computed width
      var a = bubbleSVGWidth / bubbleSVGHeight; // = aspect ratio to be applied to the container
      bubbleSVGWrapper.attr('height', w / a  + 'px');
      

    }

  }

  shouldComponentUpdate() { return true }


  render() {

    return (
      <svg className='bubbleSVGWrapper'>
      </svg>
    )
  }
}

export default Chart