import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledModalLayout,
  StyledModalWrapper,
  StyledModalContainer,
  Header,
  HeaderTitle,
  HeaderAction,
  StyledModalBody
} from "./styles";
import CloseIcon from "../../Icons/CloseIcon";

const Modal = (props) => {
  // const theme = props.theme;

  const { 
    visible,
    headerTitle, 
    onCancel, 
    onClose, 
    size, 
    height
  } = props;

  const [show, setShow] = useState(false);
  const ModalRef = useRef();

  const callBack = () => {
    if (onCancel) {
      setShow(false);
      if (onCancel) {
        return onCancel();
      } else if (onClose) {
        return onClose();
      } else {
        return null;
      }
    }
  };

  const OutSideClick = (e, ref, callback) => {
    if (ref && ref.current && callback) {
      if (!ref.current.contains(e.target)) {
        callback();
      }
    }
  };

  const ClickFunc = (e) => {
    OutSideClick(e, ModalRef, callBack);
  };

  useEffect(() => {
    setShow(visible);
    if (visible === true) {
      document.body.style.overflow = "hidden";
      window.addEventListener("mousedown", ClickFunc, false);
    }
    return () => {
      if (visible === true) {
        document.body.style.overflow = "auto";
        window.removeEventListener("mousedown", ClickFunc, false);
      }
    };
  }, [visible]);

  const containerSizeSwitcher = (size) => {
    switch (size) {
      case "xl":
        return 22;
      case "lg":
        return 16;
      case "md":
        return 12;
      case "sm":
        return 8;
      case "xs":
        return 6;
      case "xxs":
        return 4;
      default:
        return 12;
    }
  };

  return (
    show && (
      <StyledModalLayout
        className={`bict__modal__layout ${show ? "open" : "close"}`}
      >
        <StyledModalWrapper
          className="bict__modal__wrapper"
        >
          <StyledModalContainer
            className="bict__modal__container"
            xl={size ? containerSizeSwitcher(size) : 12}
            lg={size ? containerSizeSwitcher(size) : 12}
            md={size ? containerSizeSwitcher(size) : 12}
            sm={size && (size === "xs" || size === "xxs") ? 12 : 22}
            xs={size && (size === "xs" || size === "xxs") ? 12 : 22}
            height={height}
            ref={ModalRef}
          >
            <Header
              className="bict__modal__header"
              // theme={theme}
            >
              <HeaderTitle
                className="bict__modal__headerTitle"
                // theme={theme}
              >
                {headerTitle}
              </HeaderTitle>
              <HeaderAction
                className="bict__modal__headerAction"
                onClick={props.closable !== false && props.onClose}
              >
                {props.closable !== false && <CloseIcon />}
              </HeaderAction>
            </Header>
            <StyledModalBody
              className="bict__modal__body"
            >
              {props.children}
            </StyledModalBody>
          </StyledModalContainer>
        </StyledModalWrapper>
      </StyledModalLayout>
    )
  );
};

Modal.defaultProps = {
  visible: false,
  headerTitle: "", 
  onCancel: null, 
  onClose: null, 
  size: "md", 
  // height: "auto"
};

Modal.propTypes = {
  /**
   * نمایش مودال
   */
  visible: PropTypes.bool,
  /**
   * عنوان مودال
   */
  headerTitle: PropTypes.string,
  /**
   * متد برای اجرا در هنگام بستن مودال
   */
  onCancel: PropTypes.func,
  /**
   * متد برای اجرا در هنگام کلیک خارج از مودال
   */
  onClose: PropTypes.func,
  /**
   * سایز های مختلف
   */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  /**
   * ارتفاع مودال
   */
  height: PropTypes.string,
};

export default Modal;