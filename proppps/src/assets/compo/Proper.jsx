import { Component } from "react";
// this is stateful
class Proper extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
export default Proper;
