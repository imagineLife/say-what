import React, { Component } from 'react'
import * as d3 from 'd3';
import 'd3-selection-multi';
// import Bubbles from '../Bubbles'
import ResponsiveWrapper from '../../../ResponsiveWrapper'
import './Chart.css'


class Chart extends Component {
  constructor(props) {
    super(props);
    // this.enterBubbleFn = this.enterBubbleFn.bind(this);
    // this.updateBubbleFn = this.updateBubbleFn.bind(this)
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.format = d3.format(',d');
  }

  componentDidMount(){
    // this.buildChart();
  }

  componentDidUpdate(){
    // this.buildChart();
  }

  render() {
    
    let sizeToUse = this.props.respWrapWidth * .85
    //PACK
    var d3PackFn = d3.pack()
        .size([sizeToUse, sizeToUse]);


    //declare ROOT
    var root = d3.hierarchy({children: this.props.dataKey})
      .sum(d => d.occurances);

    let packedCircleRoot = d3PackFn(root);

    let packedCircles = packedCircleRoot.leaves()

    return (
      <svg className='bubbleSVGWrapper' viewBox={`25, 0, ${sizeToUse}, ${sizeToUse}`}>
        {packedCircles && packedCircles.map((c, ind) => {
        return <circle 
          key={`circle${ind}`}
          r={c.r}
          cx={c.x}
          cy={c.y}
          fill={this.color(ind)}></circle>
    })}
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart)