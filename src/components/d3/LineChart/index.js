import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../Axes'
import ResponsiveWrapper from '../../ResponsiveWrapper'
import './index.css'


const Chart = ({data, xKey, yKey, respWrapWidth, labels}) => {
  
  const moused = d => {
    let sentenceNumber = Math.ceil(xScale.invert(d.clientX - 55))
    console.log('sentenceNumber')
    console.log(sentenceNumber)
    
    
    
  }

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
  
  let optLabels = !(Object.keys(labels).length > 0) ? null : (
    <React.Fragment>
      <text
        fill={`rgb(216,216,216)`}
        stroke={'none'}
        fontSize={'14px'}
        textAnchor={'left'}
        transform={`translate(${margins.left},${margins.top + 20})`}>
        {labels.yAxis}
      </text>
      <text 
        fill={`rgb(216,216,216)`}
        stroke={'none'}
        fontSize={'14px'}
        textAnchor={'middle'}
        transform={`translate(${svgDimensions.width / 2},${svgDimensions.height - (margins.bottom * .25)})`}>
        {labels.xAxis}
      </text>
      </React.Fragment>)

  return (
    <svg 
      className='chartSVG' 
      width={svgDimensions.width} 
      height={svgDimensions.height}>
      
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
        onMouseOver={moused}
        onMouseMove={moused}
        fill="none">
      </path>

      {optLabels}
    </svg>
  )
}

export default ResponsiveWrapper(Chart)