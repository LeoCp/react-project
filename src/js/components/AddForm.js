import React from "react";
import Form from "./Form";
import InputText from "./InputText";
import Button from "./Button";

export default class AddForm extends React.Component {
  render(){
    return(
      <div>
        <Form>
          <InputText placeholder="name"/><br/>
          <InputText placeholder="cpf"/><br/>
          <Button name="Add"/>
        </Form>
      </div>
     )
  }
}
