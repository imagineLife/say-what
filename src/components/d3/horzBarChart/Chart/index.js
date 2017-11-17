import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../Axes'
import Bars from '../Bars'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


class Chart extends Component {
  constructor(props) {
    super(props)
    this.xScale = d3.scaleBand()
    this.yScale = d3.scaleLinear()
  }

  render() {
//chart margins / offset
    const margins = { top: 5, right: 20, bottom: 60, left: 30 }

//svgDimensions gets its withd from this.props.parentWidth
  // which SEEMS to come from the responsiveWrapper fn
  //  which wraps around the <Chart /> 
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 450
    }

//max data-value
    const maxValue = Math.max(...this.props.dataKey.map(d => Object.values(d)))


    const xScale = this.xScale
      .padding(0.5)
      .domain(this.props.dataKey.map(d => Object.keys(d)))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, (maxValue * 1.05)])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      <svg className='chartSVG' width={svgDimensions.width} height={svgDimensions.height}>
        
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={this.props.dataKey}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
     
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)