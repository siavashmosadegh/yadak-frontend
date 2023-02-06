import styled from "styled-components";
import Row from "../Row";
import Col from "../Col";

export const TableWrapper = styled(Col)`
    position: relative;
    height: ${(props) => props.height};
    justify-content: flex-start;
    .bict__tblHeaderItem,
    .bict__tblCol {
        height: 100%;
        justify-content: center;
        text-align: center;
        border: ${(props) => props.hasBorder ? "1px solid white" : "0"};
        border-left: 0;
        :last-child {
            border-left: ${(props) => props.hasBorder ? "1px solid white" : "0"};
        }
    }
    .bict__tblHeaderContainer,
    .bict__tblRow {
        height: 54px;
        line-height: 1.6;
    }
`;
export const TableOverlay = styled(Col)`
    display: ${(props) => (props.disable !== true ? "none" : "flex")};
    background-color: white;
    opacity: 0.6;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
`;
export const HeaderWrapper = styled(Row)`  
    display: ${(props) => props.show ? "flex" : "none"};
    background-color: ${(props) => props.tableHeaderBackgroundColor || "white"}; 
    color: ${(props) => props.tableHeaderColor || props.theme.gray}; 
    font-size: ${(props) => props.theme.fontSizeXs};
`;
export const TblHeaderCol = styled(Row)`
    flex: ${(props) => props.flex};
    -webkit-flex: ${(props) => props.flex};
    ${(props) => {
        if (props.responsiveBreakPoint) {
            return `
                @media screen and (max-width: ${props.responsiveBreakPoint}px) {
                    display: ${props.responsiveShow === false && `none`};
                }
            `;
        } else {
            return `
                @media screen and (max-width: 768px) {
                    display: ${props.responsiveShow === false && `none`};
                }
            `;
        }
    }}
`;
export const BodyWrapper = styled(Col)`
    height: ${(props) =>
        `calc(100% - ${
        props.showPaging === true
            ? props.showHeader === true
            ? "95px"
            : "55px"
            : props.showHeader === true
                ? "40px"
                : "0px"
        })`};
    justify-content: flex-start;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const LoaderContainer = styled(Col)`
    height: 100%;
    font-size: ${(props) => props.theme.fontSizeSm};
`;
export const TblRow = styled(Row)`
    background-color: 
        ${(props) => props.index % 2 === 0 
                        ? props.tableOddRowColor || "white" 
                        : props.tableEvenRowColor || "white"
        };
    color: ${(props) => props.tableColor || props.theme.gray}; 
    font-size: ${(props) => props.theme.fontSizeSm};
    cursor: ${(props) => props.tableHoverable && "pointer"};
    :hover {
        background-color: 
            ${(props) => props.tableHoverable && (
                         props.index % 2 === 0 
                            ? props.tableOddRowHover 
                            : props.tableEvenRowHover
            )};
        transition: all 500ms;
    }
`;
export const TblCol = styled(Row)`
    flex: ${(props) => props.flex};
    -webkit-flex: ${(props) => props.flex};
    ${(props) => {
        if (props.responsiveBreakPoint) {
            return `
                @media screen and (max-width: ${props.responsiveBreakPoint}px) {
                    display: ${props.responsiveShow === false && `none`};
                }
            `;
        } else {
            return `
                @media screen and (max-width: 768px) {
                    display: ${props.responsiveShow === false && `none`};
                }
            `;
        }
    }}
`;