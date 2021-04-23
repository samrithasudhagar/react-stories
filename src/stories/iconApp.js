import React, { Component } from "react";
import Input from "./components/input";
import "./apps.css";
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "l@gmail.com",
        errorClass: ""
      },
      password: {
        value: "",
        errorClass: ""
      },
      text: {
        value: "",
        errorClass: ""
      }
    };
  }

  onChangeFormInput = function(fieldName) {
    return ({ target: { value } }) => {
      this.setState({
        [fieldName]: {
          value
        }
      });
      if (value === "") {
        this.setState({
          [fieldName]: {
            errorClass: "err"
          }
        });
      } else {
        this.setState({
          [fieldName]: {
            errorClass: ""
          }
        });
      }
    };
  };

  render() {
    return (
      <div className="divInput">
        <Input
          value={this.state.email.value}
          label="Email"
          required={true}
          inputClassName="Email"
          labelClassName="Label"
          placeholder="Type email"
          onChange={this.onChangeFormInput("email")}
          effectClassName="effect"
          errorClassName={this.state.email.errorClass}
          iconClass="showIcon"
          loaderHide={false}
        />

        <Input
          type="password"
          value={this.state.password.value}
          label="Password"
          required={true}
          inputClassName="Password"
          labelClassName="Label"
          placeholder="Type password"
          onChange={this.onChangeFormInput("password")}
          effectClassName="effect"
          errorClassName={this.state.password.errorClass}
          iconClass="showIcon"
          loaderHide={false}
        />

        <Input
          value={this.state.text.value}
          label="Text"
          required={true}
          inputClassName="Text"
          labelClassName="Label"
          placeholder="Type text"
          onChange={this.onChangeFormInput("text")}
          iconClassName="icon"
          effectClassName="effect"
          errorClassName={this.state.text.errorClass}
          iconClass="showIcon"
          loaderHide={false}
        />
        <button className="btn">submit</button>
      </div>
    );
  }
}
export default App1;
