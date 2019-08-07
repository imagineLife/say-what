import type { SrcDataItem } from './flow'
import React from 'react';

/*
  DATA MAPPER
  Maps data to {x, y} format object
*/

function remapData(srcData: Array<SrcDataItem>, xVal: string, yVal: string){

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