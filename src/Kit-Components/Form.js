import styled from "styled-components";
import MaskInput from "react-input-mask";
import Col from "./Col";
import Row from "./Row";
import { HexToRgba } from "../../Usages/HexToRgba";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  flex-wrap: wrap;
`;
export const FormRow = styled(Row)`
  min-height: 100px;
  align-items: flex-start;
`;
export const FormGroup = styled(Col)`
  position: relative;
  flex-direction: ${(props) => props.labelPosition === "right" && "row"};
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LabelStyleGenreator = (labelPosition, theme) => {
  switch (labelPosition) {
    case "top":
      return null
    case "right":
      return null
    case "right-inner":
      return `
        position : absolute;
        top : 0;
        right : 0;
        width : 90px;
        height : 36px;
        background-color : ${theme.primary};
        border-radius : 0px 5px 5px 0px;
        color : white;
        justify-content: center;
        align-items: center;
        padding: 0;
      `
    default:
      break;
  }
}
export const FormLabel = styled.label`
  display: ${(props) => (props.show !== true ? "none" : "flex")};
  width: ${(props) => props.labelPosition === "right" ? "90px": "auto"};
  color: ${(props) => props.theme.gray};
  font-size: ${(props) => props.theme.fontSizeXs};
  padding: 5px;
  margin-left: auto;
  ${props => LabelStyleGenreator(props.labelPosition, props.theme)};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const FormInput = styled(MaskInput)`
  width: ${(props) =>
    props.label
      ? props.labelPosition === "right"
        ? "calc(100% - 120px)"
        : "calc(100% - 0px)"
      : "calc(100% - 0px)"};
  border: 1px solid ${(props) => props.hasError ? props.theme.danger : HexToRgba(props.theme.gray, 0.15)};
  border-radius: 5px;
  color: ${(props) => props.theme.gray};
  font-size: ${(props) => props.theme.fontSizeXs};
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  outline: none;
  cursor: ${(props) => props.readOnly === true && "no-drop"};
  :focus {
    border: 1px solid ${(props) => props.hasError ? props.theme.danger : props.theme.secondary};
    transition: all 500ms;
  }
  ::placeholder {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  height: 36px;
  padding: 5px 10px;
  padding-right: ${(props) => props.labelPosition === "right-inner" ? "100px" : "10px"}
  ${(props) =>
    props.type === "file"
      ? () => {return `visibility: hidden;`;}
      : null
  };

`;
export const FormError = styled(Col)`
  align-items: flex-start;
  margin-top: 8px;
  font-size: ${(props) => props.theme.fontSizeXXs};
  color: ${(props) => props.theme.danger};
`;
export const FormTextArea = styled.textarea`
  width: ${(props) =>
    props.label
      ? props.labelPosition === "right"
        ? "calc(100% - 120px)"
        : "calc(100% - 0px)"
      : "calc(100% - 0px)"};
  border: 1px solid ${(props) => props.hasError ? props.theme.danger : HexToRgba(props.theme.gray, 0.15)};
  border-radius: 5px;
  color: ${(props) => props.theme.gray};
  font-size: ${(props) => props.theme.fontSizeXs};
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  outline: none;
  cursor: ${(props) => props.readOnly === true && "no-drop"};
  :focus {
    border: 1px solid ${(props) => props.hasError ? props.theme.danger : props.theme.secondary};
    transition: all 500ms;
  }
  ::placeholder {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  height: ${(props) => `${props.height}px`};
  padding: 10px;
`;