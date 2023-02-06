import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Row from "./Row";
import Col from "./Col";

const CheckBoxWrapper = styled(Row)`
  align-items: baseline;
  cursor: pointer;
`;
const CheckboxContainer = styled(Col)`
  width : 16px;
  height : 16px;
  border-radius : 4px;
  border : ${props => `1px solid ${props.theme.primary}`};
`;
const CheckboxInner = styled(Col)`
  height : 10px;
  width : 10px;
  border-radius : 2px;
  background-color : ${props => props.checked === true ? props.theme.primary : 'white'};
`;
const TextContainer  = styled(Row)`
  width: calc(100% - 25px);
  margin-right: 7px;
  font-size: ${(props) => props.theme.fontSizeSm};
  color: ${(props) => props.theme.gray};
  text-align: justify;
  line-height: 1.6;
`

const Checkbox = (props) => {
  const { 
    checked, 
    text,
    onClick 
  } = props;

  return (
    <CheckBoxWrapper 
      className="bict__CheckBoxWrapper" 
      onClick={onClick}
    >
      <CheckboxContainer
        className="bict__CheckBox"
      >
        <CheckboxInner checked={checked} />
      </CheckboxContainer>
      <TextContainer
        className="bict__CheckBoxText"
      >
        {text}
      </TextContainer>
    </CheckBoxWrapper>
  );
};

Checkbox.defaultProps = {
  checked: false,
  text: "",
  onClick: null
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Checkbox;