import React from "react";
import Jumbotron from "../components/Jumbotron";
import AddForm from "../components/AddForm";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron title="Add">
          <AddForm />
        </Jumbotron>
      </div>
    );
  }
}
