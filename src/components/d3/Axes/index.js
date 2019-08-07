import type { PropsTypes } from './flow'
import React from 'react'
import Axis from '../Axis'
import './Axes.css';

const Axes = ({ scales, margins, svgDimensions }: PropsTypes) => {
  const { height, width } = svgDimensions

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(-6, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
  }

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
  }

  return (
    <React.Fragment>
      <Axis {...xProps} />
      <Axis {...yProps} />
    </React.Fragment>
  )
}

export default Axes;