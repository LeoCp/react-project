import React from "react";
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import Footer from "../components/Footer";
export default class List extends React.Component {
  constructor(){
    super();
    this.state = {
      tbbHead : [
        {id:1,name:"colum 1"},
        {id:2,name:"colum 2"},
        {id:3,name:"colum 3"},
        {id:4,name:"colum 4"}
      ],
      tbbBody: [
       {id:1,colum1:"value11",colum2:"value12",colum3:"value13",colum4:"value14"},
       {id:2,colum1:"value21",colum2:"value22",colum3:"value23",colum4:"value24"},
       {id:3,colum1:"value31",colum2:"value32",colum3:"value33",colum4:"value34"}
     ]
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
