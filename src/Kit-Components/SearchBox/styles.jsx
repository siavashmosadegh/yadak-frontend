import styled from "styled-components";
import Row from "../Row";
import Col from "../Col";
import { HexToRgba } from "../../../Usages/HexToRgba";

export const SearchBoxContainer = styled(Col)`

`
export const SearchBoxWrapper = styled(Col)`
    position: relative;
    height: max-content;
    .bict__SeachBoxform {
        position: relative;
    }
    form {
        width: 100%;
    }
    .bict__SeachBox_SearchIconContainer {
        top: ${(props) => props.hasLabel ? "42px" : "13px"};
    }
    .bict__SearchBoxResultContainer {
        top: ${(props) => props.hasLabel ? "70px" : "42px"};
    }
`;
export const IconContainer = styled(Col)`
    position: absolute;
    left: 3px;
    width: 25px;
    cursor: pointer;
    svg {
        width: 12.5px;
        height: 12.5px;
        fill: ${(props) => HexToRgba(props.theme.gray || "#707070", 0.5)}
    }
`;
export const SearchResultContainer = styled(Col)`
    position: absolute;
    width: 100%;
    height: auto;
    max-height: 150px;
    justify-content: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 5px;
    z-index: 10;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const SearchResult = styled(Row)`
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    justify-content: flex-start;
    padding: 0px 10px;
    color: ${props => props.theme.gray};
    font-size: 11px;
    line-height: 1.6;
    cursor: pointer;
    :hover {
        background-color: #fff5ef;
        border-right : 2px solid ${props => props.theme.secondary};
    }
`
export const NoItemContainer = styled(Col)`
    height: 30px;
    color: ${(props) => props.theme.gray} !important;
    font-size: ${(props) => props.theme.fontSizeXXs};
`