import React, { Component } from 'react'

class HoverCounter extends Component {
    
  render() {
    let {count,increaseCounter} = this.props
    return <h3 onMouseOver={increaseCounter}>Hovered {count} times</h3>
  }
}

export default HoverCounter