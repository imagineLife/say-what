import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import './index.css'

export default function Bars({ scales, margins, data, svgDimensions }){

  const { xScale, yScale } = scales
  const { height } = svgDimensions

    const colorScale = scaleLinear()
    .range(['#256CFF','#143B8A'])
    .interpolate(interpolateLab)
    .domain([0, data.length - 1]);

  let ColorGradientDefs = () => {
    return(
      <defs>
        <linearGradient id="Gradient1" x1="1" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,255,0)"/>
          <stop offset="100%" stopColor="blue"/>
        </linearGradient>
      </defs>
    )
  }
  return (
    <React.Fragment>
      <ColorGradientDefs />
      {data && data.map( (data, index) =>
        <g key={`${data.x}${data.index}`} className="singleBar">
          <rect
            key={data.x}
            x={xScale(data.x)}
            y={yScale(data.y)}
            height={height - margins.bottom - scales.yScale(data.y)}
            width={xScale.bandwidth()}
            fill={`url(#Gradient1)`}
            className={'singleRect'}
          />
          <text className={"barLabel"}
            x={xScale(data.x) + (.3 * xScale.bandwidth()) }
            y={yScale(data.y) * .99}
          >
            {(data.y)}
          </text>
        </g>,
      )}
    </React.Fragment>
  )
}
