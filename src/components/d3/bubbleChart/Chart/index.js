import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


class Chart extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.buildChart();
  }

  componentDidUpdate(){
    this.buildChart();
  }

  buildChart = () => {
    console.log(this.props.dataKey);

    let d = {};
    let classes;
    classes = this.props.dataKey;

    var container = d3.select(".Responsive-wrapper");

    //Declare SVG
    var svgElm = d3.select(".bubbleSVG"),
        svgWidth = +container.style("width").replace('px',''),
        svgHeight = +container.style("height").replace('px','');

        svgElm
          .attrs({
            'viewBox' : "0, 0, " + svgWidth + ", " + svgHeight,  // min-x, min-y, width, height
            'preserveAspectRatio' :"xMinYMid"
          });

    var format = d3.format(",d");

    var color = d3.scaleOrdinal(d3.schemeCategory20c);

    var pack = d3.pack()
        .size([svgWidth, svgHeight])
        .padding(1.5);

    this.props.dataKey.forEach((obj) =>{
      d.value = Object.values(obj);
      let objKey = Object.keys(obj);
      let objVal = Object.values(obj);

    //declare ROOT?!
      var root = d3.hierarchy({children: classes})
          .sum(function(d) {
            return Object.values(d); 
          });

    //declare the bubble element
    //give it a class
    //make it transform
      var bubble = svgElm.selectAll(".bubble")
        .data(pack(root).leaves())
        .enter().append("g")
          .attrs({
            "class": "bubble",
            "transform": function(d) { 
              return "translate(" + d.x + "," + d.y + ")"; 
            }
          });

      bubble.append("circle")
          .attrs({
            "id" : function(d) { return d.id; },
            "r" : function(d) { return d.r; }
          })
          .style("fill", function(d) { return color(d.package); });


      bubble.append("clipPath")
          .attr("id", function(d) { return "clip-",Object.keys(d.data)})
        .append("use")
          .attr("xlink:href", function(d) { return "#" + Object.keys(d.data) });


      bubble.append("text")
          .attr("clip-path", function(d) { return "url(#clip-"+Object.keys(d.data)+")"; })
        .selectAll("tspan")
        .data(function(d) { return Object.keys(d.data); })
        .enter().append("tspan")
          .attrs({
            "x" : 0,
            "y" : function(d,i,letters) {
              return 13 + (i - letters.length / 2 - 0.5) * 10;
            },
            "text-anchor" : "middle"
          })
          .text(function(d) { return d+'-Letter Words: '+objVal; });

      bubble.append("title")
          .text(function(d) { return Object.keys(d.data)[0] + ":\n" + format(d.value); });
    
    });


    setContainerHeight();

    d3.select(window).on('resize', setContainerHeight);

    function setContainerHeight() {
      var w = parseInt( container.style("width"), 10); // computed width
      var a = svgWidth / svgHeight; // = aspect ratio to be applied to the container
      console.log(a, w);
      svgElm.attr('height', w / a  + 'px');
    }

  }

  shouldComponentUpdate() { return false }


  render() {
    return (
      <svg className='bubbleSVG'>
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)