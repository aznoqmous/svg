class SVG{

  constructor(config){
    this.config = Object.assign({}, config)
    this.init()
  }

  init(){
    if(!this.config.element) {
      console.log('Please provide a svg element')
      return delete this;
    }
    this.element = this.config.element

    let children = [].slice.call(this.element.children)
    this.paths = []
    children.map(child => this.paths.push( new Path( {element: child} ) ))
  }

}



class Path{

  constructor(config){
    this.config = Object.assign({
      startPath: null,
      endPath: null
    }, config)
    this.init()
  }

  init(){
    if(!this.config.element) {
      console.log('Please provide a svg element')
      return delete this;
    }
    this.element = this.config.element
    this.endPath = this.getPath()
  }

  getPath(){
    return this.element.getAttribute('d').split(' ')
  }

  setPath(){
      this.config.element.setAttribute('d', this.path.join(' '))
  }

}
