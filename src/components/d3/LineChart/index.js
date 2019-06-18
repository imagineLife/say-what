import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../Axes'
import ResponsiveWrapper from '../../ResponsiveWrapper'
import useLabels from '../Hooks/AxisLabels/'
import useDataMapper from '../Hooks/DataMapper'
import './index.css'

const Chart = ({data, xKey, yKey, respWrapWidth, labels, hoverLine}) => {
  
  let [showLine, setShowLine] = React.useState(false)
  let [sentenceNumber, setSentenceNumber] = React.useState(0)
  let [curSentence, setCurSentence] = React.useState(false)
  let [margins] = React.useState({ top: 15, right: 20, bottom: 70, left: 50 })
  let [svgDimensions] = React.useState({
      width: Math.max(respWrapWidth, 300),
      height: 440
    })
  let [xOffset] = React.useState(7)

  /*
    Axis Labels
    optional labels, dependant on presence of 'labels' prop
    requires 
      margins ({l,r,t,b}), 
      svgDims ({height, width}), 
      labels ({x, y})
  */ 
  const optLabels = useLabels({margins, svgDimensions, labels})
  let remappedData = useDataMapper(data, xKey, yKey)

  if(!data || !remappedData){
    return <p>Loading...</p>
  }

  //mousedOver && mouseMove
  const moused = d => {
    let lineSVG = document.getElementsByClassName('lineSVG')[0]
    let lineSVGXOffset = lineSVG.getBoundingClientRect().x
    let xPos = d.pageX - lineSVGXOffset
    
    if(xPos >= xScale.range()[0]){
      let sentenceNumber = Math.ceil(xScale.invert(xPos))      
      setSentenceNumber(sentenceNumber)
      setShowLine(true)
      setCurSentence(data[(sentenceNumber - 1)])
    }
    
  }

  const mousedOut = d => {
    setShowLine(false)
    setCurSentence(false)
  }

  //make line functions
  const makeLineFn = (xS,yS) => {
    return d3.line()
      .defined(d => d.y > 0)
      .x(d => xS(d.x))
      .y(d => yS(d.y))
      .curve(d3.curveMonotoneX)
  }
  
  //max data-value
  const maxYValue = Math.max(...remappedData.map(d => d.y))

  /*
    d3 scales
  */ 
  let xScale = d3.scaleLinear()
    .domain(d3.extent(remappedData, d => d.x))//remappedData.map(d => d.x))
    .range([margins.left, svgDimensions.width - margins.right])

  let yScale = d3.scaleLinear()
    .domain([0, (maxYValue * 1.05)])
    .range([svgDimensions.height - margins.bottom, margins.top])

  // Create line fn from scales
  let thisLineFn = makeLineFn(xScale, yScale);

  /*
    Hover-line
  */ 
  let optHoverLine = !hoverLine  || 
    sentenceNumber < 0 || 
    !sentenceNumber || 
    sentenceNumber > xScale.domain()[1] ||
    !showLine ? null : (
    <line 
      strokeWidth={'1'}
      stroke={'rgb(150,150,150)'}
      strokeDasharray={'5 15'}
      x1={xScale(sentenceNumber) - xOffset}
      x2={xScale(sentenceNumber) - xOffset}
      y1={yScale(0)}
      y2={yScale(maxYValue * 1.05)}></line>) 
  
  /*
    Hover-circle
  */   
  let hoverCircle = !hoverLine  || 
    sentenceNumber < 0 || 
    !sentenceNumber || 
    sentenceNumber > xScale.domain()[1] ||
    !showLine ? null : (
      <circle
        r={8}
        fill={'rgba(255,255,255,.3)'}
        stroke={'white'}
        strokeWidth={'1'}
        strokeDasharray={`2 3`} 
        cx={xScale(sentenceNumber) - xOffset}
        cy={yScale(remappedData[sentenceNumber - 1].y)}/>
    )

  /*
    Sentence string
  */
  let sentenceObj = !curSentence ? null : (
    <text
      transform={`translate(${svgDimensions.width / 2}, ${margins.top + 5})`}
      textAnchor={'middle'}
      fontSize={'12px'}
      fill={'white'}
      stroke={'none'}>
        {curSentence.text}
      </text>
    )

  let line = thisLineFn(remappedData) && <path
        className="linePath"
        d={thisLineFn(remappedData)}
        stroke="green"
        strokeWidth="4px"
        fill="none">
      </path>
  
  return (
    <svg 
      className='lineSVG' 
      width={svgDimensions.width} 
      height={svgDimensions.height}
      onMouseOver={moused}
      onMouseMove={moused}
      onMouseOut={mousedOut} >
      
      <Axes
        scales={{ xScale, yScale }}
        margins={margins}
        svgDimensions={svgDimensions}
      />

      {line}

      {optLabels}
      
      {optHoverLine}
      
      {hoverCircle}
      
      {curSentence && sentenceObj}
    </svg>
  )
}

export default ResponsiveWrapper(Chart)