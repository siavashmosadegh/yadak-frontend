import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getWidthString = (span) => {
  if (span) {
    let width = (span / 24) * 100;
    return `width: ${width}%;`;
  }
};

const StyledRow = styled.div`
  display: ${props => props.display || "flex"};
  direction: rtl;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  line-height: 1.6;
  flex-wrap: wrap;
  -webkit-flex-wrap : wrap;
  ${(props) => (props.xl ? getWidthString(props.xl) : "width : 100%")};
  @media screen and (max-width: 1367px) {
    ${(props) =>
      (props.lg || props.xl) && getWidthString(props.lg ? props.lg : props.xl)}
  }
  @media screen and (max-width: 1287px) {
    ${(props) =>
      (props.md || props.lg || props.xl) &&
      getWidthString(
        props.md ? props.md : props.lg ? props.lg : props.xl ? props.xl : null
      )}
  }
  @media screen and (max-width: 768px) {
    ${(props) =>
      (props.sm || props.md || props.lg || props.xl) &&
      getWidthString(
        props.sm
          ? props.sm
          : props.md
          ? props.md
          : props.lg
          ? props.lg
          : props.xl
          ? props.xl
          : props.sm
      )}
  }
  @media screen and (max-width: 480px) {
    ${(props) =>
      (props.xs || props.sm || props.md || props.lg || props.xl) &&
      getWidthString(
        props.xs
          ? props.xs
          : props.sm
          ? props.sm
          : props.md
          ? props.md
          : props.lg
          ? props.lg
          : props.xl
          ? props.xl
          : props.sm
      )}
  }
`;

const Row = forwardRef((props, ref) => {
  return <StyledRow 
          forwardedRef={ref} 
          {...props}
        ></StyledRow>;
});

Row.defaultProps = {
  lang: "",
  // xl: null,
  // lg: null,
  // md: null,
  // sm: null,
  // xs: null,
};

Row.propTypes = {
  lang: PropTypes.string,
  xl: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

export default Row;