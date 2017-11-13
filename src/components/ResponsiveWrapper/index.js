import React, { Component } from 'react'
import './wrapper.css'

export default ChartComponent => (
  class ResponsiveChart extends Component {
    constructor(props) {
      super(props)

//3. HERE containerWidth is set to null to start 
      this.state = {
        containerWidth: null,
      }

      this.fitParentContainer = this.fitParentContainer.bind(this)
    }

    componentDidMount() {
//4. AFTER component mounts
//   run fitParentContainer, written below AND/OR referenced above... ? 
      // console.log('compDidMount');
      this.fitParentContainer()
//5.JQ-like event-listener?!
      window.addEventListener('resize', this.fitParentContainer)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.fitParentContainer)
    }

    fitParentContainer() {
//6.Fitting the parent container 
      // console.log('1.inside fitParentContainer');

//7.pull containerWidth out of state as reference
      const { containerWidth } = this.state
//Q
//8.WHERE is 'chartContainer'?!
  //WAY down in a div ref?!
      const currentContainerWidth = this.chartContainer.getBoundingClientRect().width

      const shouldResize = containerWidth !== currentContainerWidth

      if (shouldResize) {
        // console.log('3.SHOULD resize!');
        this.setState({
          containerWidth: currentContainerWidth,
        })
      }
    }

    renderChartComponent() {
//2. declaration of parent width
//  FROM state.containerWidth
      const parentWidth = this.state.containerWidth

//1. PARENT WIDTH in component
      return (
        <ChartComponent {...this.props} parentWidth={parentWidth} />
      )
    }

    render() {
      const { containerWidth } = this.state
      const shouldRenderChart = containerWidth !== null

      return (
        <div
          ref={(el) => { this.chartContainer = el }}
          className="Responsive-wrapper"
        >
          {shouldRenderChart && this.renderChartComponent()}
        </div>
      )
    }
  }
)
