/*
  Maps data to {x, y} type res object
*/

import React from 'react';

//set x && y keys to a re-mapped data object
function remapData(srcData, xVal, yVal){
  let [resData, setResData] = React.useState(null)
  React.useEffect(() => {
    setResData(srcData.map((d,ind) => {
      return {
        x: (xVal == 'index') ? ind : d[xVal],
        y: d[yVal],
      }
    }))
  }, [])
  return resData
}

export default remapData