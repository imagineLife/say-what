type DataItem = {
	text: string,
	wordCount: number
}

export type PropsTypes = {
	data: Array<DataItem>, 
	xKey: string, 
	yKey: string, 
	respWrapWidth: number, 
	labels: {
		xAxis: string,
		yAxis: string
	}, 
	hoverLine: boolean
}