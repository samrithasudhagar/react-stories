import React, { Component } from "react";
import "../apps.css";
import _ from "lodash";
import cx from "classnames";
var clickedarr = [];
class CheckBox1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      selectedOption:""
    };
  }
  onClick = label => () => {
    this.setState({
      clicked: !this.state.clicked
    });

    if (!this.state.clicked) {
      clickedarr.push(label);
      this.setState({
        selectedOption:label
      });
  
    } else {
      this.setState({
        selectedOption:''
      });
      if (_.includes(clickedarr, label)) {
        clickedarr = _.remove(clickedarr, function(n) {
          return n !== label;
        });
      }
    }

    console.log(clickedarr);
  };
  render() {
    const { label } = this.props;

    return (
      <div className={cx("checkbox",{selectedCheckbox:label===this.state.selectedOption})}>
        <input type="checkbox" onChange={this.onClick(label)} />
        <label onClick={this.onClick(label)} >{label}</label>
      </div>
    );
  }
}
export default CheckBox1;
