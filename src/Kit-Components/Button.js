import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "./Loader";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "36px"};
  width: ${(props) => {
    if (props.width) {
      return props.width;
    } else {
      switch (props.size) {
        case "xs":
          return "80px";
          break;
        case "sm":
          return "100px";
          break;
        case "md":
          return "125px";
          break;
        case "lg":
          return "180px";
          break;
        case "xl":
          return "100%";
          break;
        default:
          return "125px";
          break;
      }
    }
  }};
  /*min-width: 80px;*/
  background-color: ${(props) => {
    if (props.disabled === true) {
      return "white";
    } else {
      switch (props.variant) {
        case "primary":
          return props.theme.primary;
          break;
        case "secondary":
          return props.theme.secondary;
          break;
        case "true":
          return props.theme.true;
          break;
        case "danger":
            return props.theme.danger;
            break;
        case "default":
          return "white";
          break;
        default:
          return "white";
          break;
      }
    }
  }};
  border: ${(props) =>
    props.disabled || props.variant === undefined || props.variant === "default"
      ? `1px solid ${props.theme.primary}`
      : "none"
  };
  color: ${(props) => {
    if (props.disabled === true) {
      return props.theme.primary;
    } else {
      switch (props.variant) {
        case "primary":
          return "white";
          break;
        case "secondary":
          return "white";
          break;
        case "danger":
          return "white";
          break;
        case "true":
          return "white";
          break;
        case "danger":
          return "white";
          break;
        case "default":
          return props.theme.primary;
          break;
        default:
          return props.theme.primary;
          break;
      }
    }
  }};
  font-size: ${(props) => props.theme.fontSizeSm};
  border-radius: 5px;
  outline: none;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  padding: 0px 5px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
  }
  :focus {
  }
  :hover {
  }
  :not(:hover) {
  }
`;

const Button = (props) => {
  const { 
    width,
    height,
    disabled,
    variant,
    loading,
    onClick
  } = props;

  return (
    <StyledButton
      className="bict__button"
      {...props}
      onClick={loading === true ? null : onClick}
    >
      {loading === true 
        ? <Loader
            size={20}
            color={
              disabled || variant === undefined || variant === "default"
                ? props.theme && props.theme.primary
                : "white"
            }
          />
        : props.children
      }

    </StyledButton>
  );
};

Button.defaultProps = {
  disabled: false,
  variant: "default",
  loading: false,
  onClick: null
  // loader: "منتظر بمانید ...",
};

Button.propTypes = {
  /**
   * وضعیت غیرفعال
   */
  disabled: PropTypes.bool,
  /**
   * حالت های نمایشی
   */
  variant: PropTypes.oneOf(["default", "primary", "secondary"]),
  /**
   *  لودینگ
   */
  loading: PropTypes.bool,
  /**
   * کامپوننت برای نمایش در وضعیت لودینگ
   */
  // loader: PropTypes.oneOfType([String, Object]),
  onClick: PropTypes.func
};

export default Button;