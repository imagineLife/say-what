import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Axes from '../Axes'
// import Bars from '../Bars'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


class Chart extends Component {
  constructor(props) {
    super(props)
    this.xScale = d3.scaleBand()
    this.yScale = d3.scaleLinear()
  }

  render() {
  	console.log('C1. inside CHART render');

//chart margins / offset
    const margins = { top: 5, right: 20, bottom: 60, left: 30 }

//svgDimensions gets its withd from this.props.parentWidth
  // which SEEMS to come from the responsiveWrapper fn
  //  which wraps around the <Chart /> 
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 450
    }

    return (
      <svg className='bubbleSVG' width={svgDimensions.width} height={svgDimensions.height}>
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)