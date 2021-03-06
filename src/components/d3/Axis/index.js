import type { AxisPropsTypes } from './flow'
import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'

import './Axis.css'

export default class Axis extends Component<AxisPropsTypes> {
  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  axisElement = {};

  renderAxis() {
    const axisType = `axis${this.props.orient}`
    const axis = d3Axis[axisType]()
      .scale(this.props.scale)

//Grid-Lines
      .tickSize(-this.props.tickSize)
      .tickPadding([6])

//Even-Only number of y-axis marks
      .ticks([4])

    d3Select(this.axisElement).call(axis)
  }

  render() {
    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={(el) => { this.axisElement = el; }}
        transform={this.props.translate}
      />
    )
  }
}
