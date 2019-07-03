import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../Axes'
import ResponsiveWrapper from '../../ResponsiveWrapper'
import useLabels from '../Hooks/AxisLabels/'
import useDataMapper from '../Hooks/DataMapper'
import './index.css'

const makeScale = (type, xOrY, srcData, m, dims) => {
  let thisScale = d3[`scale${type}`]()
  
  if(type == 'Linear' && xOrY == 'x'){
    thisScale.domain(d3.extent(srcData, d => d.x))
  }
  
  if(type == 'Linear' && xOrY == 'y'){
    thisScale.domain([0, (Math.max(...srcData.map(d => d.y)) * 1.05)])
  }
  
  if(xOrY == 'x'){
    thisScale.range([m.left, dims.width - m.right])
  }

  if(xOrY == 'y'){
    thisScale.range([dims.height - m.bottom, m.top])
  }
    
  return thisScale
}

const Chart = ({data, xKey, yKey, respWrapWidth, labels, hoverLine}) => {

  console.log('respWrapWidth')
  console.log(respWrapWidth)
  
  
  let [showLine, setShowLine] = React.useState(false)
  let [sentenceNumber, setSentenceNumber] = React.useState(0)
  let [curSentence, setCurSentence] = React.useState(false)
  let [margins] = React.useState({ top: 15, right: 35, bottom: 70, left: 50 })
  let [svgDimensions, setSVGDimensions] = React.useState({
      width: Math.max(respWrapWidth, 300),
      height: 440
    })
  let [xOffset] = React.useState(3) 
  const optLabels = useLabels({margins, svgDimensions, labels})
  let remappedData = useDataMapper(data, xKey, yKey)

  //update svg dims on resize
  React.useEffect(() => {
    setSVGDimensions({
      width: Math.max(respWrapWidth, 300),
      height: 440
    })
  }, [respWrapWidth]);

  
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
  
  //max data-y-value

  /*
    d3 scales
  */ 
  let xScale = makeScale('Linear', 'x', remappedData, margins, svgDimensions)
  let yScale = makeScale('Linear', 'y', remappedData, margins, svgDimensions)

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
      pointerEvents={"none"}
      strokeWidth={'1'}
      stroke={'rgb(150,150,150)'}
      strokeDasharray={'5 15'}
      x1={xScale(sentenceNumber) - xOffset}
      x2={xScale(sentenceNumber) - xOffset}
      y1={yScale(0)}
      y2={yScale(Math.max(...remappedData.map(d => d.y)) * 1.05)}></line>) 
  
  /*
    Hover-circle
  */   
  let hoverCircle = !hoverLine  || 
    sentenceNumber < 0 || 
    !sentenceNumber || 
    sentenceNumber > xScale.domain()[1] ||
    !showLine ? null : (
      <circle
        pointerEvents={"none"}
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

export { Chart };
export default ResponsiveWrapper(Chart)