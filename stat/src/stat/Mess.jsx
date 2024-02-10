
import React, { Component } from 'react'
export default class Mess extends Component {
    constructor(){
        super()
        this.state={
            message:'Welcome'
        }
    }
    changeMess(){
        this.setState({   // this is method that is used to resign a value
          // reason to use sensate to telling reaction that i want to change
            message:'THank you'

        })
        // buttonChange()
        // {
        //     this
        // }
    }
  render() {
    return (
      <div>
<h1> {this.state.message}</h1>
<button type="button" onClick={ ()=> this.changeMess()} >ClickME</button>
      </div>
    )
  }
}
