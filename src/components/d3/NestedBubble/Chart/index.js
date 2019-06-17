import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


function Chart({respWrapWidth, data, radiusKey, categoryKey}) {
  
  let [hovered, setHovered] = React.useState([])
  
  
  /*
    Mouse-Over
  */
  let mouseOver = (d) => {
    console.log('HOVERING d')
    console.log(d)
    
    if(d.visible && d.children){
      console.log('d.id')
      console.log(d.id)
      
      let newHovered = hovered.concat(d.id)
      //darken bg
      setHovered(newHovered)

    }
    console.log('// - - - - - //')
    
    
  }

  let mouseOut = d => setHovered([]);

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
      visible: visibility.visible,
      children: d.children || null
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

  return (
    <svg className='bubbleSVGWrapper' viewBox={`25, 0, ${sizeToUse}, ${sizeToUse}`}>
      <g className="gWrapper" transform={`translate(${25},0)`}>
        {allCircles && allCircles.map((c, ind) => {

          let hoveredVal = (hovered.includes(c.id)) ? .2 : 1

          if(c.root == false && c.visible == true){
            return (<g 
              key={`circle${ind}`} 
              className="singleBubbleG"
              onMouseOver={(() => mouseOver(c))}
              onMouseOut={(() => mouseOut(c))}
              transform={`translate(${c.x},${c.y})`}>
                <clipPath xlinkHref={`#clip-${c[categoryKey].toString()}`}></clipPath>
                <circle 
                  r={c.r}
                  className={`bubble`}
                  fill={color(ind)}
                  stroke={color(ind)}
                  strokeWidth={`1px`}
                  fillOpacity={hoveredVal}
                  cursor='pointer'>
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