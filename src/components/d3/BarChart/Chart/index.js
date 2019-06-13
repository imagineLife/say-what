import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../Axes'
import Bars from '../Bars'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


const Chart = (props) => {

  function remapData(srcData, xVal, yVal){
    return srcData.map(d => {
      return {
        x: d[xVal],
        y: d[yVal],
      }
    })
  }

  let remappedData = remapData(props.data, props.xKey, props.yKey)

  console.log('remappedData')
  console.log(remappedData)
  
    let xScale = d3.scaleBand()
    let yScale = d3.scaleLinear()
    
//chart margins / offset
    const margins = { top: 0, right: 20, bottom: 70, left: 30 }

    const svgDimensions = {
      width: Math.max(this.props.respWrapWidth, 300),
      height: 440
    }

//max data-value
    const maxValue = Math.max(...this.props.dataKey.map(d => d.occurances))

    xScale
      .padding(0.2)
      .domain(this.props.dataKey.map(d => d.word))
      .range([margins.left, svgDimensions.width - margins.right])

    yScale
      .domain([0, (maxValue * 1.05)])
      .range([svgDimensions.height - margins.bottom, margins.top])

    console.log('this.props')
    console.log(this.props)
    
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

export default ResponsiveWrapper(Chart)