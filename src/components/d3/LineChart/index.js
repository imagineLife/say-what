import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../Axes'
import ResponsiveWrapper from '../../ResponsiveWrapper'
import './index.css'


const Chart = ({data, xKey, yKey, respWrapWidth}) => {

  if(!data){
    return <p>Loading...</p>
  }

  function remapData(srcData, xVal, yVal){
    
    return srcData.map((d,ind) => {
      return {
        x: (xVal == 'index') ? ind : d[xVal],
        y: d[yVal],
      }
    })
  }

  //make line functions
  const makeLineFn = (xScale,yScale) => {
    return d3.line()
      .defined(d => d.y)
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveMonotoneX)
  }

  let remappedData = remapData(data, xKey, yKey)
        
  let xScale = d3.scaleLinear()
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
    .domain(d3.extent(remappedData, d => d.x))//remappedData.map(d => d.x))
    .range([margins.left, svgDimensions.width - margins.right])

  yScale
    .domain([0, (maxValue * 1.05)])
    .range([svgDimensions.height - margins.bottom, margins.top])

  let thisLineFn = makeLineFn(xScale, yScale);

  return (
    <svg className='chartSVG' width={svgDimensions.width} height={svgDimensions.height}>
      
      <Axes
        scales={{ xScale, yScale }}
        margins={margins}
        svgDimensions={svgDimensions}
      />

      <path
        className="linePath"
        d={thisLineFn(remappedData)}
        stroke="green"
        strokeWidth="4px"
        fill="none">
      </path>
    </svg>
  )
}

export default ResponsiveWrapper(Chart)