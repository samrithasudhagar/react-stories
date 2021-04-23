import React, { Component } from "react";
import "./apps.css";
import CheckBox1 from "./components/checkbox";
class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 

  render() {
    
    return (
       
        <div className="divcheckbox">
         <CheckBox1 label=" one"/>
         <CheckBox1 label=" two"/>
         <CheckBox1 label=" three"/>
         <CheckBox1 label=" four"/>
         <CheckBox1 label=" five"/>
       </div>
    );
  }
}
export default CheckBox;
