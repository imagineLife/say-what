import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


function Chart({respWrapWidth, data, radiusKey, categoryKey}) {
  let color = d3.scaleOrdinal(d3.schemeCategory10);
  
  let sizeToUse = respWrapWidth * .85
  //PACK
  var d3PackFn = d3.pack()
      .size([sizeToUse, sizeToUse]);


  //declare ROOT
  var root = d3.hierarchy({children: data})
    .sum(d => d[radiusKey]);

  let packedCircleRoot = d3PackFn(root);

  let packedCircles = packedCircleRoot.leaves()


  return (
    <svg className='bubbleSVGWrapper' viewBox={`25, 0, ${sizeToUse}, ${sizeToUse}`}>
      {packedCircles && packedCircles.map((c, ind) => {
      return (<g 
        key={`circle${ind}`} 
        className="singleBubbleG"
        transform={`translate(${c.x},${c.y})`}>
          <clipPath xlinkHref={`#clip-${c.data[categoryKey].toString()}`}></clipPath>
          <circle 
            r={c.r}
            fill={color(ind)}>
          </circle>
          <text 
            className="clipText" 
            clipPath={`url(#clip-${c.data[categoryKey].toString()})`}>
            <tspan 
              className="bubbleText title"
              textAnchor={"middle"}
              x={0}
              y={-5}>
              {`${c.data[categoryKey]}-Letter`}
            </tspan>
            <tspan 
              className="bubbleText title"
              x={0}
              y={11}
              textAnchor={"middle"}>
              Words
            </tspan>
            <tspan 
              className="bubbleText val"
              x={0}
              y={30}
              textAnchor={"middle"}>
              {`${c.data[radiusKey]}`}
            </tspan>
          </text>
        </g>)
      })}
    </svg>
  )
}

export default ResponsiveWrapper(Chart)