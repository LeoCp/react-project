import React from "react";
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import Footer from "../components/Footer";
import TbHeadStore from "../store/TbHeadStore";
import TbBodyStore from "../store/TbBodyStore";

export default class List extends React.Component {
  constructor(){
    super();
    this.state = {
      tbbHead: TbHeadStore.getAll(),
      tbbBody: TbBodyStore.getAll()
    }
  }
  render() {
    const {tbbHead, tbbBody} = this.state;
    return (
      <Jumbotron title="List">
        <Table tbHead={tbbHead} tbBody={tbbBody}/>
      </Jumbotron>
    );
  }
}
