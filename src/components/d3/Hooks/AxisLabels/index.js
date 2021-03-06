/*
  Axis Labels
  optional labels, dependant on presence of 'labels' prop
  requires 
    margins ({l,r,t,b}), 
    svgDims ({height, width}), 
    labels ({x, y})
*/
import type { PropsTypes } from './flow'

import React from 'react';

const useLabels = ({margins, svgDimensions,labels}: PropsTypes) => {
  
  let [uiLabels, setUiLabels] = React.useState(null)

  React.useEffect(() => {
    let optLabels = !(Object.keys(labels).length > 0) ? null : (
      <React.Fragment>
        <text
          fill={`rgb(216,216,216)`}
          stroke={'none'}
          fontSize={'14px'}
          textAnchor={'left'}
          transform={`translate(${margins.left},${margins.top + 20})`}>
          {labels.yAxis}
        </text>
        <text 
          fill={`rgb(216,216,216)`}
          stroke={'none'}
          fontSize={'14px'}
          textAnchor={'middle'}
          transform={`translate(${svgDimensions.width / 2},${svgDimensions.height - (margins.bottom * .25)})`}>
          {labels.xAxis}
        </text>
      </React.Fragment>)
    setUiLabels(optLabels)
  }, []);

  return uiLabels
}

export default useLabels