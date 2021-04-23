import React, { Component } from "react";
import "./apps.css";
import DropDown from "./components/dropDown";
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDropDown: false
    };
  }

 

  render() {
    const elements = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty"
    ];
    return (
       
        <div className="divWrapper">
          <DropDown displayDropDown={this.state.displayDropDown} elements={elements}/>
          <DropDown displayDropDown={this.state.displayDropDown} elements={elements}/>
          <DropDown displayDropDown={this.state.displayDropDown} elements={elements}/>
       </div>
    );
  }
}
export default App1;
