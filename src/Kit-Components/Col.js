import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getWidthString = (span) => {
  if (span) {
    let width = (span / 24) * 100;
    return `width: ${width}%;`;
  }
};

const StyledCol = styled.div`
  display: ${props => props.display || "flex"};
  direction: rtl;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  line-height: 1.6;
  ${(props) => props.xl ? getWidthString(props.xl) : "width : 100%"};
  @media screen and (max-width: 1367px) {
    ${(props) =>
    (props.lg || props.xl) && getWidthString(props.lg ? props.lg : props.xl ? props.xl : 24)}
  };
  @media screen and (max-width: 1287px) {
    ${(props) =>
    (props.md || props.lg || props.xl) &&
    getWidthString(
      props.md ? props.md : props.lg ? props.lg : props.xl ? props.xl : 24
    )}
  };
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
              : 24
    )}
  };
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
                : 24
    )}
  }
`;

const Col = forwardRef((props, ref) => {
  return <StyledCol 
            ref={ref} 
            {...props}
          ></StyledCol>
})

Col.defaultProps = {
  lang: "",
  // xl: null,
  // lg: null,
  // md: null,
  // sm: null,
  // xs: null,
};

Col.propTypes = {
  lang: PropTypes.string,
  xl: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

export default Col;