import React, { Component } from 'react'
import * as d3 from 'd3';
import Axes from '../Axes'
import ResponsiveWrapper from '../../ResponsiveWrapper'
import useLabels from '../Hooks/AxisLabels/'
import useDataMapper from '../Hooks/DataMapper'
import SentenceObj from '../../SentenceObj'
import { makeScale } from '../../../lib'
import './index.css'

const Chart = ({data, xKey, yKey, respWrapWidth, labels, hoverLine}) => {
  
  let [showLine, setShowLine] = React.useState(false)
  let [sentenceNumber, setSentenceNumber] = React.useState(0)
  let [curSentence, setCurSentence] = React.useState(false)
  let [margins] = React.useState({ top: 35, right: 35, bottom: 70, left: 50 })
  let [svgDimensions, setSVGDimensions] = React.useState({
      width: Math.max(respWrapWidth, 300),
      height: 440
    })
  
  let [xOffset, setXOffset] = React.useState(0) 
  
  const optLabels = useLabels({margins, svgDimensions, labels})
  let remappedData = useDataMapper(data, xKey, yKey)

  //update svg dims on resize
  //update xOffset on resize
  React.useEffect(() => {
    setSVGDimensions({
      width: Math.max(respWrapWidth, 300),
      height: 440
    })

    setXOffset((respWrapWidth > 800) ? 8 : (respWrapWidth > 600) ? 6 : 4)
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
      
      {curSentence && <SentenceObj 
        text={curSentence} 
        dims={svgDimensions} 
        margins={margins}/>}
    </svg>
  )
}

export { Chart };
export default ResponsiveWrapper(Chart)