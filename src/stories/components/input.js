import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "../apps.css";
import { ClipLoader } from "react-spinners";
import { FaBeer } from 'react-icons/fa';


class Input extends Component {
  
  render() {
    const {
      onChange,
      inputClassName,
      disabled,
      //autoFocus,
      value,
      readOnly,
      placeholder,
      onFocus,
      onKeyPress,
      id,
      wrapperClassName,
      errorClassName,
      multiline,
      maxLength,
      height,
      label,
      required,
      labelClassName,
      effectClassName,
      postPosition,
      iconClass,
      onClick
    } = this.props;
    let type = "";
    ({ multiline } ? (type = "textarea") : (type = "text"));
    let override = "";
    if (postPosition) {
      override = `
    position: relative;
    left:-20px;
  bottom:42px;
`;
    } else {
      override = `
        position: relative;
        left:-170px;
        bottom:42px;
    `;
    }
    return (
      <div>
        <div className={cx(wrapperClassName)}>
          <label className={labelClassName}>{label} </label>

          <input
            type={type}
            className={cx("input", inputClassName)}
            onChange={onChange}
            onClick={onClick}
            disabled={disabled}
            //autoFocus={autoFocus}
            value={value}
            readOnly={readOnly}
            placeholder={placeholder}
            maxLength={maxLength}
            onKeyPress={onKeyPress}
            onFocus={onFocus}
            id={id}
            height={height}
            required={required}
            autoComplete="off"
          />
          <div className={cx("iconError", iconClass)}>
            <FaBeer/>
          </div>
          <ClipLoader css={override} size={15} color={"#ccc"} />
         
          <span className={effectClassName}></span>
        </div>
       
        <div className={cx("error", errorClassName)}>
          error! field is required
        </div>
      </div>
    );
  }
}
Input.defaultProps = {
  type: "text",
  //value: "text",
  className: "input-box",
  placeholder: "Type name",
  maxlength: 20,
  autoFocus: false,
  readOnly: false,
  disabled: false,
  multiline: false,
  height: 5,
  id: "input-box",
  onFocus: () => {},
  onChange: () => {},
  onKeyPress: () => {},
  wrapperClassName: "wrapper"
};
Input.propTypes = {
  type: PropTypes.string,
  //value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  multiline: PropTypes.bool,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  onKeyPress: PropTypes.func,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string
};
export default Input;
