export type PropsTypes = { 
  scales: {
  	xScale: (string) => any,
  	yScale: (number) => any
  },
  margins: {
  	top: number,
  	right: number,
  	bottom: number,
  	left: number
  },
  svgDimensions: {
  	width: number,
  	height: number
  }
 }