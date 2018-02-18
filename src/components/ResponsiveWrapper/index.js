import React, { Component } from 'react'
import './wrapper.css'

export default ChartComponent => (
  class ResponsiveChart extends Component {
    constructor(props) {
      super(props)

      this.state = {
        containerWidth: null,
      }

      this.fitParentContainer = this.fitParentContainer.bind(this)
    }

    componentDidMount() {
      this.fitParentContainer()
      window.addEventListener('resize', this.fitParentContainer)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.fitParentContainer)
    }

    fitParentContainer() {

      const { containerWidth } = this.state
      const ResponsiveWrapperDiv = this.chartContainerViaRef;
      const ResponsiveWrapperDivWidth = ResponsiveWrapperDiv.getBoundingClientRect().width;
      const shouldResize = containerWidth !== ResponsiveWrapperDivWidth

      if (shouldResize) {
        this.setState({
          containerWidth: ResponsiveWrapperDivWidth,
        })
      }
    }

    renderChartComponent() {
      const parentDivWidth = this.state.containerWidth;

      return (
        <ChartComponent {...this.props} respWrapWidth={parentDivWidth} />
      )
    }

    render() {
      const { containerWidth } = this.state
      const shouldRenderChart = containerWidth !== null

      return (
        <div
          ref={(el) => { this.chartContainerViaRef = el }}
          className="Responsive-wrapper"
        >
          {shouldRenderChart && this.renderChartComponent()}
        </div>
      )
    }
  }
)
