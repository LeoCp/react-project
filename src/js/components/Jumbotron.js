import React from "react";
import Table from "./Table";
export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
