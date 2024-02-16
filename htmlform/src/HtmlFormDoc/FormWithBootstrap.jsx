import React, { Component } from "react";
import './FormWithBootstrap.css'
export default class FormWithBootstrap extends Component {
  constructor() {
    super();
    this.state = {
      Email: '',
    };
  }
  changeUsername=(event)=>{
    this.setState({
        Email : event.target.value
    })
  }
  changePassword=(event1)=>{
    this.setState({
        Password : event1.target.value
    })
  }
  handelSubmit= (event4) => {
    alert(` ${this.state.Email} ${this.state.Password}  ` )
event4.preventDefault();  /// for storing user input on browser

  };
  
  render() {
    return (
        
        
//         <form on onSubmit={this.handelSubmit}>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" value={this.state.Email} onChange={this.changeUsername} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" value={this.state.Password} onChange={this.changePassword}  class="form-control" id="exampleInputPassword1" />
//   </div>
   
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
<div class="bg-img">
<div class="content">
    <header>Login Form</header>
    <form action="#">
        <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" required placeholder="Email or Phone"/>
        </div>
        <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="password" required placeholder="Password"/>

        </div>
        <div class="pass">
            <a href="#">Forgot Password?</a>
        </div>
        <div class="field">
            <input type="submit" value="LOGIN"/>
        </div>
        <div class="login">Or login with</div>
        <div class="link">
            <div class="facebook">
                <i class="fab fa-facebook-f"><span>Facebook</span></i>
            </div>
            <div class="instagram">
                <i class="fab fa-instagram"><span>Instagram</span></i>
            </div>
        </div>
        <div class="signup">Don't have account?
            <a href="#">SignUp Now</a>
        </div>
    </form>
</div>
</div>       
    )
  }
}
{/* <div class="mb-3">
            <label for="" class="form-label">UserName</label>
            <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                value={this.state.userName}
                onChange={this.changeUsername}
            />
              */}