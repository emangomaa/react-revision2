import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      increaseCounter = ()=>{
          this.setState(
              (prevstate)=>({
                  count:prevstate.count +1
              })
          )
      }
  render() {
    return (
        <div>
            {this.props.render(this.state.count,this.increaseCounter)} 
        </div>
    )
  }
}

export default Counter