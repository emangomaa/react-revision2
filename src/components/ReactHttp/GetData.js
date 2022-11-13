import axios from 'axios'
import React, { Component } from 'react'

export class GetData extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos : [],
       errorMsg:""
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response =>{
      this.setState({todos:response.data})
    })
    .catch(error =>{
      // console.log(error)
      this.setState({errorMsg:error.message})
    })
  }
  render() {
    let {todos,errorMsg}= this.state
    return (
      <div>
        {
          todos.length? 
          todos.map((todo,index) =>
            <p key={index}>ID : {todo.id}</p>
          )
          :null
        }
        {
          errorMsg.length?<p>{errorMsg}</p> : null
        }
      </div>
    )
  }
}

export default GetData