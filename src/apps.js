import React, { Component } from "react";
import Input from 'react-toolbox/lib/app_bar';

class Inputtest extends Component {
  render() {
    return (
      <div>
        <Input
          type={this.props.type}
          style={this.props.style}
          className={this.props.className}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
          autoFocus={this.props.autoFocus}
          value={this.props.value}
          readOnly={this.props.readOnly}
          placeholder={this.props.placeholder}
          required={this.props.required}
          multiline={this.props.multiline}
          rows={this.props.rows}
          maxLength={this.props.maxLength}
          error={this.props.error}
          onKeyPress={this.props.onKeyPress}
          onFocus={this.props.onFocus}
        />
      </div>
    );
  }
}
Inputtest.defaultProps = {
  type:"text",
  className:"input-box",
  disabled:"false",
  placeholder:"",
  required:"false",
  multiline:"false",
  maxlength:"10",

}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "First Name",
      LastValue: "Last Name",
      name: "",
      name2: "",
    };
  }
  submitButtonClick = () => {
    if (this.state.name && this.state.name2) {
      this.setState({
        firstValue: "First Name submitted",
        LastValue: "Last Name submitted"
      });
    }
  };
  onFocus = () =>{
    this.props = {
      outline:"none"
    }
  }
  changeFirstName = ({ target: { value: name } }) => {
    this.setState({ name });
  };

  changeLastName = ({ target: { value: name2 } }) => {
    this.setState({ name2 });
  };
  render() {
    const typeOfInput = "text";
    let header = "";
    let classname = "inputBox";
    let styles = {
      margin: "20px",
      borderRadius:"4px"
    };
    let buttonstyle = {
      margin: "0px 70px",
      width: "125px",
      height: "30px",
      backgroundColor: "pink",
      fontSize: "15px",
      outline: "none",
      borderRadius:"6px"
    };
    if (this.state.name && this.state.name2) {
      header = (
        <p>
          hello {this.state.name} {this.state.name2}
        </p>
      );
    }
    return (
      <div>
        {this.state.firstValue}:
        <Inputtest
          type={typeOfInput}
          onChange={this.changeFirstName}
          style={styles}
          className={classname}
          autoFocus="true"
          id="inputBox"
          placeholder="Type name"
          multiline= "true"
          rows="4"
          required="true"
          error="hello"
          floating="true"
          label="hello"
          icon="hello"
          onFocus={this.onFocus}
        />
        <br />
        {this.state.LastValue}:
        <Inputtest
          type={typeOfInput}
          onChange={this.changeLastName}
          style={styles}
          className={classname}
          value="John"
          id="inputBox"
          onKeyPress={this.submitButtonClick}
           /> 
        <br />
        <button
          type="button"
          onClick={this.submitButtonClick}
          style={buttonstyle}
        >
          submit
        </button>
        {header}
      </div>
    );
  }
}

export default App;
