import React from "react";
import {Link} from "react-router";
export default class About extends React.Component {

  render() {
    return (
      <Link to="about" className="nav-item nav-link">About</Link>
    );
  }
}
