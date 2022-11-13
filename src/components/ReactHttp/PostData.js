
import React, { Component } from 'react'
import axios from 'axios'
export class PostData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         email:"",
         body:""
      }
    }
    handleChange = (e)=>{
        // console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/todos",this.state)
        .then(response =>{
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  render() {
    let {username,email,body} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <input type="text" name="username" 
                value={username} 
                onChange={this.handleChange}/>
            </div>
            <div>
                <input type="email" name="email" 
                value={email} 
                onChange={this.handleChange}/>
            </div>
            <div>
                <input type="text" name="body" 
                value={body} 
                onChange={this.handleChange}/>
            </div>
            <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

export default PostData