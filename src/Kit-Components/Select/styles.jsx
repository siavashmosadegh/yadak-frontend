import styled from "styled-components";
import Row from "../Row";
import Col from "../Col";
import { HexToRgba } from "../../../Usages/HexToRgba";

export const SelectWrapper = styled(Col)`
    position: relative;
    width: ${(props) =>
        props.label
            ? props.labelPosition === "right"
                ? "calc(100% - 120px)"
                : "calc(100% - 0px)"
            : "calc(100% - 0px)"};
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
export const SelectContainer = styled(Row)`
    position: relative;
`;
export const MultiSelectInput = styled(Row)`
    position: relative;
    height: 36px;
    border: 1px solid ${(props) => 
                            props.hasError 
                                ? props.theme.danger
                                : props.focus
                                    ? props.theme.secondary
                                    : HexToRgba(props.theme.gray, 0.15)
                      };
    border-radius: 5px;
    overflow-y: scroll;
    z-index: 10;
    flex-wrap: wrap;
    ::-webkit-scrollbar {
        display: none;
    };
`;
export const SelectedItemContainer = styled(Row)`
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 10px;
    left: 0;
    bottom: 0;
`;
export const SelectedItem = styled(Row)`
    width: auto;
    height: auto;
    padding: 3px 8px;
    border: 1px solid ${props => props.theme.primary};
    border-radius: 5px;
    margin-left: 8px;
    font-size: ${(props) => props.theme.fontSizeXs};
    color: ${props => props.theme.gray};
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        padding: 5px;
        margin-right: 10px;
        cursor: pointer;
        svg {
            width: 10px;
            height: 10px;
            stroke: ${props => props.theme.danger};
            stroke-width: 70;
        }
    }
`;
export const IconContainer = styled(Col)`
    position: absolute;
    left: ${(props) => `${props.left}px`};
    display: ${props => props.show === false ? "none" : "flex"};
    width: auto;
    height: auto;
    padding: 5px;
    z-index: 2;
    cursor: pointer;
    svg {
        height: ${props => `${props.iconHeight || 8}px`};
        width: ${props => `${props.iconWidth || 8}px`};
        fill: ${(props) => props.theme.gray};
        stroke: ${(props) => props.theme.gray};
    }
`;

export const SelectOptionWrapper = styled(Col)`
    position: absolute;
    top: 40px;
    display: ${(props) => props.expand === false && "none"};
    color: ${props => props.theme.gray};
    border: 1px solid ${props => HexToRgba(props.theme.gray, 0.25)};
    border-radius: 5px;
    z-index: 11;
    background-color: white;
`;
export const HeaderContainer = styled(Row)`
    height: 50px;
    font-size: ${props => props.theme.fontSizeSm};
`;
export const OptionCell = styled(Row)`
    flex: ${(props) => props.flex};
    padding: 0px 10px;
`;
export const OptionContainer = styled(Col)`
    justify-content: flex-start;
    height: auto;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const Option = styled(Row)`
    justify-content: flex-start;
    height: 50px;
    min-height: 50px;
    font-size: ${props => props.theme.fontSizeXs};
    cursor: pointer;
    :hover {
        background-color: ${props => HexToRgba(props.theme.secondary, 0.1)};
        border-right: 2px solid ${props => props.theme.secondary};
        transition: all 50ms;
    }
`;