import React from "react";
import PropTypes from "prop-types";
import { 
  FormGroup, 
  FormLabel, 
  FormInput, 
  FormError, 
} from "./Form";
 
const Input = (props) => {
  // const theme = props.theme;

  const { 
    label, 
    labelPosition, 
    require,
    error, 
    showErrorMessage, 
    readOnly
  } = props;

  return (
    <FormGroup
      className="bict__formGroup"
      // theme={theme}
      labelPosition={labelPosition}
    >
      <FormLabel
        className="bict__formLabel"
        // theme={theme}
        labelPosition={labelPosition}
        show={label ? true : false}
      >
        {require === true ? " * " + label : label}
      </FormLabel>
      <FormInput
        className="bict__formInput"
        // theme={theme}
        label={label}
        labelPosition={labelPosition}
        hasError={error !== undefined && error !== null ? true : false}
        readOnly={readOnly}
        {...props}
      />
      <FormError 
        className="bict__formError"
        // theme={theme}
      >
        {showErrorMessage === false ? null : error}
      </FormError>
    </FormGroup>
  );
};

Input.defaultProps = {
  label: "",
  labelPosition: "top",
  require: false,
  error: null,
  showErrorMessage: true,
  readOnly: false
};

Input.propTypes = {
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "right", "right-inner"]),
  require: PropTypes.bool,
  error: PropTypes.string,
  showErrorMessage: PropTypes.bool,
  readOnly: PropTypes.bool,
};

export default Input;