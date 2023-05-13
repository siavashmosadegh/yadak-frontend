import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.disabled === true ? props.disabledBackgroundColor : props.backgroundColor};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.disabled === true ? props.disabledBorder : props.border};
    color: ${(props) => props.disabled === true ? props.disabledColor : props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
`;