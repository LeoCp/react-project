import React from "react";
import Header from "./Header";
export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <br/>
        {this.props.children}
      </div>
    );
  }
}
