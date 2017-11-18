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
    console.log('buildingChart!');
    let d = {};
    let classes;
    classes = this.props.dataKey;

    var format = d3.format(',d');

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var container = d3.select('.Responsive-wrapper');
    console.log('Responsive-wrapper dimensions ->',container.style('height'),'x',container.style('width'));
  
  //Declare & set props of SVG
    var svgElm = d3.select('.bubbleSVGWrapper'),
        bubbleSVGWidth = +container.style('width').replace('px',''),
        bubbleSVGHeight = 440;

        svgElm
          .attrs({
            'viewBox' : '0, 0, ' + bubbleSVGWidth + ', ' + bubbleSVGHeight,  // meaning => min-x, min-y, width, height
          });

  //PACK
    var pack = d3.pack()
        .size([bubbleSVGWidth, bubbleSVGHeight])
        .padding(0);

  //begin the loop through data
    this.props.dataKey.forEach((obj) =>{
      d.value = Object.values(obj);
      // let objKey = Object.keys(obj);
      let objVal = Object.values(obj);

  //declare ROOT
      var root = d3.hierarchy({children: classes})
          .sum(function(d) {
            return Object.values(d); 
          });

  //declare the bubble element
    //give it a class
    //make it transform
      var bubble = svgElm.selectAll('.bubble')
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
            'r' : function(d) { return d.r; }
          })
          .style('fill', function(d,i) { return color(i); });

  //declare a clipPath
      bubble.append('clipPath')
          .attr('id', function(d) { 
            console.log(d)
            return Object.keys(d.data)})
        .append('use')
          .attr('xlink:href', function(d) { return '#' + Object.keys(d.data).toString() });

  //declare the text
      bubble.append('text')
          .attr('clip-path', function(d) { return 'url(#clip-'+Object.keys(d.data)+')'; })
        .selectAll('tspan')
        .data(function(d) { return Object.keys(d.data); })
        .enter().append('tspan')
          .attrs({
            'x' : 0,
            'y' : function(d,i,letters) {
              return 13 + (i - letters.length / 2 - 0.5) * 10;
            },
            'text-anchor' : 'middle',
            'class' : 'bubbleText'
          })
          .text(function(d) { return d+'-Letter Words: '+objVal; });


  //declare the title, hidden from view, but exists in HTML
      bubble.append('title')
          .text(function(d) { return Object.keys(d.data)[0] + ':\n' + format(d.value); });
    
    });


    // resizeChart();

    // d3.select(window).on('resize', resizeChart);

  //   function resizeChart() {
  //     console.log('resizeChart!');
  // //Declare & set props of SVG
  //       bubbleSVGWidth = +container.style('width').replace('px','');

  //       svgElm
  //         .attrs({
  //           'viewBox' : '0, 0, ' + bubbleSVGWidth + ', ' + bubbleSVGHeight,  // min-x, min-y, width, height
  //           // 'preserveAspectRatio' :'xMinYMid'
  //         });

  //     var w = parseInt( bubbleSVGWidth, 10); // computed width
  //     var a = bubbleSVGWidth / bubbleSVGHeight; // = aspect ratio to be applied to the container
  //     svgElm.attr('height', w / a  + 'px');

  //   }

  }

  // shouldComponentUpdate() { return false }


  render() {
    return (
      <svg className='bubbleSVGWrapper'>
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)