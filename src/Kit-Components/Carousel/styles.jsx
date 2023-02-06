import styled from "styled-components";
import Row from "../Row";
import Col from "../Col";

export const CarouseWrapper = styled(Col)`
    width: calc(100% - 80px);
    align-items: flex-start;
    margin: 0 auto;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const CarouselCellContainer = styled(Col)`
    width: auto;
    min-width: 100%;
    height: 100%;
    flex-flow : ${props => props.rowXlCount > 1 ? "column wrap" : "row"};
    @media screen and (max-width: 1367px) {
        flex-flow : ${props => props.rowLgCount > 1 ? "column wrap" : "row"};
    }
    @media screen and (max-width: 1287px) {
        flex-flow : ${props => props.rowMdCount > 1 ? "column wrap" : "row"};
    }
    @media screen and (max-width: 768px) {
        flex-flow : ${props => props.rowSmCount > 1 ? "column wrap" : "row"};
    }
    @media screen and (max-width: 480px) {
        flex-flow : ${props => props.rowXsCount > 1 ? "column wrap" : "row"};
    }
`
export const CarouselCell = styled(Col)`
    width: auto;
    height: ${props => props.height};
`
export const CarouselButtonContainer = styled(Row)`
    display : ${props => props.show === false ? "none" : "flex"};
    position: absolute;
    width: 100%;
    height: 0;
    top: calc(50% - 15px);
    left: 0;
    button {
        border: 0;
        :last-child {
            margin-right: auto;
        }
        :disabled {
            opacity: 0.25
        }
    }
`