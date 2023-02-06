import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "./Row";
import Col from "./Col";

const RadioWrapper = styled(Row)`
  align-items: baseline;
  cursor: pointer;
`;
const RadioContainer = styled(Col)`
  width : 16px;
  height : 16px;
  border-radius : 50%;
  border : ${props => `1px solid ${props.theme.primary}`};
`;
const RadioInner = styled(Col)`
  height : 10px;
  width : 10px;
  border-radius : 50%;
  background-color : ${props => props.selected === true ? props.theme.primary : 'white'};
`;
const TextContainer  = styled(Row)`
  width: calc(100% - 25px);
  margin-right: 7px;
  font-size: ${(props) => props.theme.fontSizeSm};
  color: ${(props) => props.theme.gray};
  text-align: justify;
  line-height: 1.6;
`

const Radio = (props) => {
  const { 
    selected, 
    text,
    onSelect 
  } = props;

  return (
    <RadioWrapper 
      className="bict__RadioWrapper" 
      onClick={onSelect}
    >
      <RadioContainer
        className="bict__Radio"
      >
        <RadioInner selected={selected} />
      </RadioContainer>
      <TextContainer
        className="bict__RadioText"
      >
        {text}
      </TextContainer>
    </RadioWrapper>
  );
};

Radio.defaultProps = {
  selected: true,
  text: "",
  onSelect: null
}

Radio.propTypes = {
  selected : PropTypes.number,
   /**
   * لیست آیتم ها
   */
  // items : PropTypes.arrayOf(Object),
  text: PropTypes.string,
  onSelect  : PropTypes.func
}

export default Radio;