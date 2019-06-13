import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import './Bars.css'

export default function Bars({ scales, margins, data, svgDimensions }){

  const { xScale, yScale } = scales
  const { height } = svgDimensions

    const colorScale = scaleLinear()
    .range(['#256CFF','#143B8A'])
    .interpolate(interpolateLab)
    .domain([0, data.length - 1]);

  return (
    <React.Fragment>
      {data && data.map( (data, index) =>
        <g key={`${data.x}${data.index}`} className="singleBar">
          <rect
            key={data.x}
            x={xScale(data.x)}
            y={yScale(data.y)}
            height={height - margins.bottom - scales.yScale(data.y)}
            width={xScale.bandwidth()}
            fill={colorScale(index)}
          />
          <text className="barLabel"
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
