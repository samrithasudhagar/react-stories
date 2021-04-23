import React, { Component } from "react";
import "../apps.css";
import _ from "lodash";
import cx from "classnames";
class RadioButton extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      clickedValue: ""
    };
  }

  clicked = value => (e) => {
       this.setState({
        clickedValue: value
       })
  };
  render() {
    const { label } = this.props;
    console.log(this.state.clickedValue)
    return (
      <div className={cx("radio",{
        'clickedRadio': this.state.clickedValue === label,
        '':this.state.clickedValue !== label
      })} >
        <input
          type="radio"
          name="gender"
          value={label}
          onChange={this.clicked(label)}
          className={cx("radioInput" )}
          clicked
        />
        <label>{label}</label>
      </div>
    );
  }
}
export default RadioButton;
