import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor () {
    super();
    this.name = "leonardo"
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.name}!</h1>
      </div>
    );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
