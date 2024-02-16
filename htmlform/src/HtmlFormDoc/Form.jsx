import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }
  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  changeEmail = (event1) => {
    this.setState({
      Email: event1.target.value,
    });
  };
  changePassword = (event2) => {
    this.setState({
      Password: event2.target.value,
    });
  };
  selectOption = (event3) => {
    this.setState({
      select: event3.target.value,
    });
  };
  handelSubmit= (event4) => {
    alert(`${this.state.username} ${this.state.Email} ${this.state.Password} ${this.state.select} ` )
event4.preventDefault();  /// for storing user input on browser

  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name=""
            id=""
            value={this.state.username}
            onChange={this.changeUsername}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={this.state.Email}
            onChange={this.changeEmail}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            id=""
            value={this.state.Password}
            onChange={this.changePassword}
          />
        </div>
        <div>
          <select value={this.state.select} onChange={this.selectOption}>
            <option value="this">a</option>
            <option value="this">b</option>
            <option value="this">c</option>
            <option value="this">d</option>
          </select>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
