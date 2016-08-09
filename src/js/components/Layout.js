import React from "react";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container page={this.props.children}/>
      </div>
    );
  }
}
