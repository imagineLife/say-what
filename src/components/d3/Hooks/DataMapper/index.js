import React from 'react';

/*
  DATA MAPPER
  Maps data to {x, y} format object
*/

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