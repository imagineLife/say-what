import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import './Bars.css'

export default class Bars extends Component {
  constructor(props) {
    super(props)

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#F3E5F5', '#7B1FA2'])
      .interpolate(interpolateLab)
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions

    const bars = (
      data.map(data =>
        <g key={Object.keys(data)}>
          <rect
            key={Object.keys(data)}
            x={xScale(Object.keys(data))}
            y={yScale(Object.values(data))}
            height={height - margins.bottom - scales.yScale(Object.values(data))}
            width={xScale.bandwidth()}
            fill={this.colorScale(Object.values(data))}
          />
          <text className="barLabel"
            x={xScale(Object.keys(data)) + (.1 * xScale.bandwidth()) }
            y={yScale(Object.values(data)) * .99}
            fill='black'
          >
            {(Object.values(data))}
          </text>
        </g>,
      )
    )

    return (
      <g>{bars}</g>
    )
  }
}
