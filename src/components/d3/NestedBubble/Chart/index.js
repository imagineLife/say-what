import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './index.css'


function Chart({respWrapWidth, data, radiusKey, categoryKey}) {
  
  //'tracks' hovered state of bubbles
  let [hovered, setHovered] = React.useState([])

  //'tracks' visibility state of bubbles
  let [visible, setVisible] = React.useState([])
  
  
  /*
    Mouse-Over
  */
  let mouseOver = (d) => {
    if(!hovered.includes(d.id) && d.children){
      
      //darken bg of hovered circle
      let newHovered = hovered.concat(d.id)
      setHovered(newHovered)

      let childrenIDs = d.children.map(d => d.data.id)      
      setVisible(visible.concat(childrenIDs))

    }
    
  }

  /*
    Mouse Out
  */
  let mouseOut = d => {
    setHovered([]);
    setVisible(["small", "medium", "large"])
  }

  /*
    Data Prep
  */
  let color = d3.scaleOrdinal(d3.schemeCategory10);
  let sizeToUse = respWrapWidth
  var d3PackFn = d3.pack()
      .size([sizeToUse, sizeToUse])
      .padding(2);
  let packedCircles = d3PackFn(data)
  
  /*
    Get Cirlces OUT of D3 pack layout INTO an array
  */
  let allCircles = []

  let makeTextFromD = d => {
    return (d.data.id !== 'wordCount') ? (d.children) ? `${d.data.id} Words` : `${d.data.id}-Letter` : null
  }

  let circleObj = (d, visibility) => {
    
    if(visibility.visible == true && !visible.includes(d.data.id)){
      let newVisibility = visible.concat(d.data.id)
      
      setVisible(newVisibility)
    }
    return {
      r : d.r,
      y : d.y,
      x : d.x,
      value : d.value,
      id: d.data.id,
      text: makeTextFromD(d),
      root: (d.data.id == 'wordCount') ? true : false,
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

          if(c.root == false && visible.includes(c.id)){
            return (<g 
              key={`circle${ind}`} 
              className="singleBubbleG"
              onMouseOver={(() => mouseOver(c))}
              onMouseOut={(() => mouseOut(c))}
              transform={`translate(${c.x},${c.y})`}>
                <clipPath xlinkHref={`#clip-${c[categoryKey].toString()}`}></clipPath>
                <circle 
                  r={c.r}
                  className={(c.children) ? `bubble` : 'bubble bubble-child'}
                  fill={'black'}
                  stroke={'black'}
                  strokeWidth={`1px`}
                  fillOpacity={hoveredVal}>
                </circle>

                {/* Text is conditional based on hover 'state' */}

                {
                  hoveredVal == 1 && <text
                  color={`white`}
                  className="clipText" 
                  clipPath={`url(#clip-${c[categoryKey].toString()})`}>
                  <tspan 
                    className={`bubbleText title ${(c.children) ? '' : 'child'}`}
                    textAnchor={"middle"}
                    x={0}
                    y={-5}>
                    {c.text}
                  </tspan>

                {/*Optional tspan for Child Bubbles*/}
                  {!c.children && <tspan 
                    className="bubbleText val"
                    x={0}
                    y={10}
                    textAnchor={"middle"}>
                    {'words'}
                  </tspan>}

                  <tspan 
                    className="bubbleText val"
                    x={0}
                    y={40}
                    textAnchor={"middle"}>
                    {c.value}
                  </tspan>
                </text> 
                }
              </g>)
          }else{null}
        }).filter(d => d)}
      </g>
    </svg>
  )
}

export default ResponsiveWrapper(Chart)