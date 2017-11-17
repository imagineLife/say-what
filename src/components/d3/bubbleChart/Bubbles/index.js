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

    const bubbles = (
      data.map(data =>
        <g key={Object.keys(data)} className="bubbleWrapper">
         <p>Bubbles go here</p>
        </g>,
      )
    )

    return (
      <g>{bubbles}</g>
    )
  }
}
