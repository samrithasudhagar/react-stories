import React, { Component } from "react";
import "./apps.css";
import RadioButton from "./components/radiobutton";
class RadioGroup extends Component {
  render() {
    return (
      <div className="divcheckbox">
        <RadioButton label="one" />
        <RadioButton label="two" />
        <RadioButton label="three" />
        <RadioButton label="four" />
        <RadioButton label="five" />
      </div>
    );
  }
}
export default RadioGroup;
