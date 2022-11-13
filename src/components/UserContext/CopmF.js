import React, { Component } from 'react'

import { UserConsumer } from './UserContext'
export class CopmF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            username =>{
              return  <div>Hello {username}</div>
            }
        }
      </UserConsumer>
    )
  }
}

export default CopmF