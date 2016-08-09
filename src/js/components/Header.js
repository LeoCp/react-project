import React from "react";
import Title from "./Header/Title";
import Home from "./Header/Home";
import List from "./Header/List";
import About from "./Header/About";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-full navbar-dark bg-inverse">
          <Title />
          <div className="nav navbar-nav pull-xs-right">
            <Home />
            <About />
            <List />
          </div>
        </nav>
      </header>
    );
  }
}
