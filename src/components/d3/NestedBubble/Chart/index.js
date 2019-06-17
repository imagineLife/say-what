import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


function Chart({respWrapWidth, data, radiusKey, categoryKey}) {
  
  console.log('data')
  console.log(data)
  
  let mouseOver = (circleData) => {
    console.log('circleData')
    console.log(circleData)
    
  }

  let color = d3.scaleOrdinal(d3.schemeCategory10);
  
  let sizeToUse = respWrapWidth
  //PACK
  var d3PackFn = d3.pack()
      .size([sizeToUse, sizeToUse])
      .padding(3);
  
  let packedCircles = d3PackFn(data)
  
  let allCircles = []

  let circleObj = (d, visibility) => {
    return {
      r : d.r,
      y : d.y,
      x : d.x,
      value : d.value,
      id: d.data.id,
      text: (d.data.id !== 'wordCount') ? `${d.data.id} Words` : null,
      root: (d.data.id == 'wordCount') ? true : false,
      visible: visibility.visible
    }
  }

  allCircles.push(circleObj(packedCircles, {visible: false}))
  
  if(packedCircles && packedCircles.children){
    packedCircles.children.forEach(circle => {
      let thisCircle = circleObj(circle, {visible: true})
      allCircles.push(thisCircle)

      if(circle && circle.children){
        circle.children.forEach(subCircle => {
          let thisSubCircle = circleObj(subCircle, {visible: false})
          allCircles.push(thisSubCircle)
        })
      }
    })
  }

  console.log('allCircles')
  console.log(allCircles)

  return (
    <svg className='bubbleSVGWrapper' viewBox={`25, 0, ${sizeToUse}, ${sizeToUse}`}>
      <g className="gWrapper" transform={`translate(${25},0)`}>
        {allCircles && allCircles.map((c, ind) => {
          if(c.root == false){
            return (<g 
              key={`circle${ind}`} 
              className="singleBubbleG"
              transform={`translate(${c.x},${c.y})`}>
                <clipPath xlinkHref={`#clip-${c[categoryKey].toString()}`}></clipPath>
                <circle 
                  r={c.r}
                  fill={color(ind)}
                  cursor='pointer'
                  onMouseOver={(() => mouseOver(c))}>
                </circle>
                <text 
                  className="clipText" 
                  clipPath={`url(#clip-${c[categoryKey].toString()})`}>
                  <tspan 
                    className="bubbleText title"
                    textAnchor={"middle"}
                    x={0}
                    y={-5}>
                    {c.text}
                  </tspan>
                  <tspan 
                    className="bubbleText val"
                    x={0}
                    y={30}
                    textAnchor={"middle"}>
                    {c.value}
                  </tspan>
                </text>
              </g>)
          }else{null}
        }).filter(d => d)}
      </g>
    </svg>
  )
}

export default ResponsiveWrapper(Chart)