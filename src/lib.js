import * as d3 from 'd3'

const makeScale = (type, xOrY, srcData, m, dims) => {
  let thisScale = d3[`scale${type}`]()
  
  if(type == 'Linear' && xOrY == 'x'){
    thisScale.domain(d3.extent(srcData, d => d.x))
  }
  
  if(type == 'Linear' && xOrY == 'y'){
    thisScale.domain([0, (Math.max(...srcData.map(d => d.y)) * 1.05)])
  }
  
  if(xOrY == 'x'){
    thisScale.range([m.left, dims.width - m.right])
  }

  if(xOrY == 'y'){
    thisScale.range([dims.height - m.bottom, m.top])
  }
    
  return thisScale
}

export { makeScale }