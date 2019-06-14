import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


class Chart extends Component {
  constructor(props) {
    super(props);
    this.enterBubbleFn = this.enterBubbleFn.bind(this);
    this.updateBubbleFn = this.updateBubbleFn.bind(this)
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.format = d3.format(',d');
  }

  componentDidMount(){
    this.buildChart();
  }

  componentDidUpdate(){
    this.buildChart();
  }

  updateBubbleFn(u){
    console.log('u here@');
  }

  enterBubbleFn(enterBubbles){
    let bubbleG = enterBubbles.append('g')
          .attrs({
            'class': 'bubble',
            'transform': d => `translate(${d.x},${d.y})`
          });

          let bubbleCircle = bubbleG.append('circle')
          .attrs({
            'id' : d => d.id,
            'class' : 'circle',
            'r' : d => d.r
          })
          .style('fill', (d,i) => this.color(i));

  //declare a clipPath
      let clipPath = bubbleG.append('clipPath')
          .attr('id', d => d.data.size)
        .append('use')
          .attr('xlink:href', d => `#${d.data.size.toString()}`);

  //declare the text
      let bubbleText = bubbleG.append('text')
          .attrs({
            'clip-path' : d => `url(#clip-${d.data.size})`,
            'class' : 'clipText'
          })
      
      let bubbleTspan = bubbleText.append('tspan')
          .attrs({
            'x' : 0,
            'y' : function(d,i,letters) {
              return -5;
              // return 3;
            },
            'text-anchor' : 'middle',
            'class' : 'bubbleText title'
          })
          .text((d) => d.data.size+'-Letter')
          
      let bubbleTspanWords = bubbleText.append('tspan')
          .attrs({
            'x' : 0,
            'y' : function(d,i,letters) {
              return 11;
            },
            'text-anchor' : 'middle',
            'class' : 'bubbleText title'
          })
          .text('Words')
          
      let bubbleTspanVal = bubbleText.append('tspan')
          .attrs({
            'x' : 0,
            'y' : function(d,i,letters) {
              return 30;
            },
            'text-anchor' : 'middle',
            'class' : 'bubbleText val'
          })
          .text((val) => {
            return val.data.occurances; 
          });

  //declare the title, hidden from view, but exists in HTML
      bubbleG.append('title')
          .text(d => `${d.data.size}-letter Words : ${this.format(d.value)}`);
  }

  buildChart = () => {
    console.log('this.props')
    console.log(this.props)

    var container = d3.select('.Responsive-wrapper');

    let sectionDiv  = document.getElementsByClassName("bubbleSVGWrapper")[0].parentElement.parentElement;
    let rowDiv = sectionDiv.parentElement 
  
  //Declare & set props of SVG
    var bubbleSVGWrapper = d3.select('.bubbleSVGWrapper');
      bubbleSVGWrapper
        .attrs({
          'viewBox' : `25, 0, ${this.props.respWrapWidth}, ${this.props.respWrapWidth}`// + bubbleSVGWidth + ', ' + bubbleSVGHeight,  // meaning => min-x, min-y, width, height
        });

  //PACK
    var d3PackFn = d3.pack()
        .size([this.props.respWrapWidth, this.props.respWrapWidth]);

  //begin the loop through data
    this.props.dataKey.forEach((obj) =>{
      // dataObj.value = obj.occurances;

  //declare ROOT
      var root = d3.hierarchy({children: this.props.dataKey})
          .sum(d => d.occurances);

      let packedCircles = d3PackFn(root);

      var bubble = bubbleSVGWrapper.selectAll('.bubble')
        .data(packedCircles.leaves()).join(this.enterBubbleFn, this.updateBubbleFn)
    
    });

  }

  render() {

    return (
      <svg className='bubbleSVGWrapper'>
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)