import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }
    changeCount(){
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    return (
      <div>
<h1> {this.state.count}</h1>
        <button type="button" onClick={ ()=> this.changeCount()}  >increment</button>
      </div>
    )
  }
}
