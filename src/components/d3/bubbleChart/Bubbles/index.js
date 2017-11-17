import React, { Component } from 'react'
import './Bubbles.css'

export default class Bubbles extends Component {
  constructor(props) {
    super(props)
  }


  render() {
	console.log('Bubbles props',this.props);
    const { scales, margins, data, svgDimensions } = this.props
    const { height, width } = svgDimensions

    console.log('1st Val =>',data);
    const bubbles = (
      data.map(dataElement =>
        <circle key={Object.keys(dataElement)} className="bubble" r={Object.values(dataElement)}></circle>,
      )
    )

    return (
      <g className="bubbleWrapper">{bubbles}</g>
    )
  }
}
