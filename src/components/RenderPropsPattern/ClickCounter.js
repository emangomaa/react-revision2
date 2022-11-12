import React, { Component } from 'react'

class ClickCounter extends Component {
    
  render() {
    let {count,increaseCounter} = this.props
    return <button onClick={increaseCounter}>clicked {count} times</button>
  }
}

export default ClickCounter