import styled from "styled-components";
import Row from "../Row";
import Col from "../Col";

export const StyledModalLayout = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    z-index: 500;
    pointer-events: none;
    &.open {
        opacity: 1;
        pointer-events: all;
    }
`;
export const StyledModalWrapper = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;
`;
export const StyledModalContainer = styled(Col)`
    justify-content: flex-start;
    background-color: white;
    height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.height || "300px"};
    max-height: ${(props) => props.height || "unset"};
    border-radius: 5px;
    box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.03);
    @keyframes fade-in-top {
        0% {
        -webkit-transform: translateY(-100px);
        transform: translateY(-100px);
        opacity: 0;
        }
        100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
        }
    }
    /* .flip-horizontal-bottom { */
    -webkit-animation: fade-in-top 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: fade-in-top 0.35s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    /* } */
`;
export const Header = styled(Row)`
    height: 50px;
    background-color: ${(props) => props.theme.primary};
    border-radius: 5px 5px 0px 0px;
`;
export const HeaderTitle = styled(Col)`
    width: calc(100% - 50px);
    height: 100%;
    align-items: flex-start;
    color: #ffffff;
    font-size: ${(props) => props.theme.fontSizeSm};
    padding-right: 15px;
`;
export const HeaderAction = styled(Col)`
    width: 50px;
    height: 100%;
    cursor: pointer;
    svg {
        width: 11px;
        height: 11px;
        stroke: white;
    }
`;
export const StyledModalBody = styled(Col)`
    height: calc(100% - 50px);
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
`;
