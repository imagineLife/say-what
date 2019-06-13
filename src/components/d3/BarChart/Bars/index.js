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
        <g key={data.word} className="singleBar">
          <rect
            key={data.word}
            x={xScale(data.word)}
            y={yScale(data.occurances)}
            height={height - margins.bottom - scales.yScale(data.occurances)}
            width={xScale.bandwidth()}
            fill={colorScale(index)}
          />
          <text className="barLabel"
            x={xScale(data.word) + (.3 * xScale.bandwidth()) }
            y={yScale(data.occurances) * .99}
          >
            {(data.occurances)}
          </text>
        </g>,
      )}
    </React.Fragment>
  )
}
