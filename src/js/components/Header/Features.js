import React from "react";
import {Link} from "react-router";
export default class Features extends React.Component {

  render() {
    return (
        <Link to="features" className="nav-item nav-link">Features</Link>
    );
  }
}
