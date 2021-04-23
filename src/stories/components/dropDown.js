import React, { Component } from "react";
import cx from "classnames";
import "../apps.css";
import _ from "lodash";
var i = 0;

export default class DropDown extends Component {
  state = { showMenu: false };
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      value: "choose one",
      hoveredValue: "",
      displayDropDown: false,
      selectedValue: "",
      tabIndex: 0,
      typedWord: "",
      Cursor: ""
    };
  }

  componentDidMount() {
    // to enable mouse back again after arrow press
    document.addEventListener("mousemove", this.onMouseMove);
    //handle click outside
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.cursor !== nextState.cursor && nextState.cursor.length > 0) {
      document.removeEventListener("mousemove", () => {});
      document.addEventListener("mousemove", this.onMouseMove);
    }
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  onMouseMove = () => {
    this.setState({
      cursor: ""
    });
  };
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        displayDropDown: false
      })
    }
  }

  onChangeFormInput = () => {
    const elements =
      this.props.elements &&
      _.isArray(this.props.elements) &&
      this.props.elements.length > 0
        ? this.props.elements
        : null;

    this.setState({
      displayDropDown: !this.state.displayDropDown,
      hoveredValue: elements
    });
  };
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  keypress = e => {
    const elements =
      this.props.elements &&
      _.isArray(this.props.elements) &&
      this.props.elements.length > 0
        ? this.props.elements
        : null;

        // On press enter
    if (e.key === "Enter") {
      this.setState({
        cursor: "cursor"
      });
      this.setState({
        hoveredValue: elements[0],
        selectedValue: this.state.hoveredValue,
        displayDropDown: !this.state.displayDropDown,
        value: this.state.hoveredValue,
        typedWord: ""
      });
      this.refs[this.state.selectedValue].scrollIntoView({});
    } else if (e.key === "Backspace") {
      var newWord = this.state.typedWord.substring(
        0,
        this.state.typedWord.length - 1
      );

      const hoveredIndex = _.findIndex(elements, element =>
        new RegExp("^" + newWord, "i").test(element)
      );
      this.setState({
        typedWord: this.state.typedWord.substring(
          0,
          this.state.typedWord.length - 1
        ),
        hoveredValue: elements[hoveredIndex]
      });
      this.scrollto(elements[hoveredIndex]);
    } else if (e.key === "ArrowDown") {
      this.setState({
        typedWord: "",
        cursor: "cursor"
      });
      // naming convention for i
      i = _.findIndex(elements, element => this.state.hoveredValue === element);
      if (i >= 0 && i < 19) {
        this.setState({
          hoveredValue: elements[i + 1]
        });
        this.scrollto(this.state.hoveredValue);
      } else {
        this.setState({
          hoveredValue: elements[19]
        });
      }
    } else if (e.key === "ArrowUp") {
      this.setState({
        typedWord: "",
        cursor: "cursor"
      });
      i = _.findIndex(elements, element => this.state.hoveredValue === element);
      if (i > 0 && i <= 19) {
        this.setState({
          hoveredValue: elements[i - 1]
        });
        this.scrollto(elements[i - 1]);
      } else {
        this.setState({
          hoveredValue: elements[0]
        });
      }
    } else {
      // When any other letter

      const latestTypedWord = this.state.typedWord + [e.key];

      this.setState({
        cursor: "cursor"
      });

      const hoveredIndex = _.findIndex(elements, element =>
        // TODO: Template literal
        new RegExp("^" + latestTypedWord, "i").test(element)
      );

      this.setState({
        typedWord: this.state.typedWord + [e.key],
        hoveredValue: elements[hoveredIndex]
      });
      this.scrollto(elements[hoveredIndex]);
    }
  };

  scrollto = element => {
    this.refs[element].scrollIntoView({});
  };

  onClick = value => () => {
    this.setState({
      value: value,
      displayDropDown: !this.state.displayDropDown,
      selectedValue: value
    });
  };

  hover = value => () => {
    if (this.state.cursor !== "cursor") {
      this.setState({
        hoveredValue: value
      });
    }
  };

  render() {
    const { hoveredValue, selectedValue, tabIndex, cursor, value} = this.state;
    const { elements } = this.props;

    let classname = this.state.displayDropDown
      ? "showDropDown"
      : "hideDropDown";

    const renderItems = () => {
      return _.map(elements, option => (
        <li
          key={option}
          className={cx(
            "option",
            { hovered: hoveredValue === option },
            { selected: selectedValue === option },
            this.state.cursor
          )}
          ref={option}
          onClick={this.onClick(option)}
          onMouseEnter={this.hover(option)}
        >
          {option}
        </li>
      ));
    };

    return (
      <div ref={this.setWrapperRef} className="outerDiv">
       
          <div
            className={cx("div")}
            onClick={this.onChangeFormInput}
            tabIndex={tabIndex}
            onKeyDown={this.keypress}
            
          >
            {value}
            <span></span>
          </div>
          <div className={cx(classname,cursor)} >
            <ul>{renderItems()}</ul>
        </div>
      </div>
    );
  }
}
DropDown.defaultProps = {
  tabIndex: 0
};
