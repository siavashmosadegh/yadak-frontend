import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-weight: bold;

    .toman {
        color: ${(props) => props.tomanColor};
        font-size: ${(props) => props.tomanFontSize};
    }

    .price {
        color: ${(props) => props.priceColor};
        font-size: ${(props) => props.priceFontSize};
        margin-left: 5px;
    }
`;