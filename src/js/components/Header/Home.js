import React from "react";
import {Link} from "react-router";

export default class Home extends React.Component {
  render() {
    return (
      <Link to="home" className="nav-item nav-link">Home</Link>
    );
  }
}
