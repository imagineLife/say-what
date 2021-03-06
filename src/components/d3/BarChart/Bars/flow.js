export type BarDataType = {
	x: string,
	y: number
}

export type PropsTypes = { 
  scales: {
  	xScale: any,
  	yScale: any
  }, 
  margins: {
  	top: number,
  	right: number,
  	bottom: number,
  	left: number
  }, 
  data: Array<BarDataType>, 
  svgDimensions: {
  	height: number,
  	width: number
  }
}