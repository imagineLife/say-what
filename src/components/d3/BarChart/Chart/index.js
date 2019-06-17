import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../../Axes'
import Bars from '../Bars'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


const Chart = ({data, xKey, yKey, respWrapWidth}) => {

  function remapData(srcData, xVal, yVal){
    return srcData.map(d => {
      return {
        x: d[xVal],
        y: d[yVal],
      }
    })
  }

  let remappedData = remapData(data, xKey, yKey)
  
    let xScale = d3.scaleBand()
    let yScale = d3.scaleLinear()
    
//chart margins / offset
    const margins = { top: 0, right: 20, bottom: 70, left: 50 }

    const svgDimensions = {
      width: Math.max(respWrapWidth, 300),
      height: 440
    }

//max data-value
    const maxValue = Math.max(...remappedData.map(d => d.y))

    xScale
      .padding(0.2)
      .domain(remappedData.map(d => d.x))
      .range([margins.left, svgDimensions.width - margins.right])

    yScale
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
          data={remappedData}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
     
      </svg>
    )
}

export default ResponsiveWrapper(Chart)