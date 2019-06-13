import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import './Bars.css'

export default function Bars(props){

  const colorScale = scaleLinear()
    .range(['#256CFF','#143B8A'])
    .interpolate(interpolateLab)

  const { scales, margins, data, svgDimensions } = props
  const { xScale, yScale } = scales
  const { height } = svgDimensions
  
  colorScale.domain([0, data.length - 1]);

  const bars = (
    data.map( (data, index) =>
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
    )
  )

  return (
    <g className="barWrapper">{bars}</g>
  )
}
