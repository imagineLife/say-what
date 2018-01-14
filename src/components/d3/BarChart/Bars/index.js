import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import './Bars.css'

export default class Bars extends Component {
  constructor(props) {
    super(props)

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#1845A2', '#C3CDF5'])
      .interpolate(interpolateLab)
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions

    console.log('data is...',data);
    const bars = (
      data.map(data =>
        <g key={data.word} className="singleBar">
          <rect
            key={data.word}
            x={xScale(data.word)}
            y={yScale(data.occurances)}
            height={height - margins.bottom - scales.yScale(data.occurances)}
            width={xScale.bandwidth()}
            fill={this.colorScale(data.occurances)}
          />
          <text className="barLabel"
            x={xScale(data.word) + (.3 * xScale.bandwidth()) }
            y={yScale(data.occurances) * .99}
            fill='black'
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
}
