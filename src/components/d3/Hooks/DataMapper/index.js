import type { SrcDataItem, ResType, dataType } from './flow'
import React from 'react';

/*
  DATA MAPPER
  Maps data to {x, y} format object
  converts [{word: thisWord, count: 17}] to [{x: thisWord, y: 17}]
*/

function remapData(srcData: Array<SrcDataItem>, xVal: string, yVal: string){

  let [resData, setResData] = React.useState(null)

  React.useEffect(() => {
    // setResData(srcData.map((d,ind) => {
    setResData(srcData.map((d: dataType, ind: number) => {

      const res: ResType = {
        x: (xVal == 'index') ? ind : d[xVal],
        y: d[yVal],
      }

      return res;

    }))
  }, [])
  return resData
}

export default remapData