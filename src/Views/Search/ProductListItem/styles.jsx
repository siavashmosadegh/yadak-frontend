import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid red;
    width: 300px;
    height: 400px;
    padding: 10px;

    img {
        width: 100%;
        height; auto;
    }

    p {
        font-size: 12px;
        font-weight: bold;
        text-align: right;
    }

    .thirdRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .descriptionParagraph {
            font-size: 10px;
            color: red;
        }
    }

    .starDiv {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        svg {
            margin-right: 5px;
        }
    }

    .priceRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .priceDiv {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bold;

        .toman {
            margin-right: 5px;
            font-size: 15px;
        }
    }
`;

export const Discount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border-radius: 10px;
    width: 35px;
    height: 25px;
    color: white;
    font-size: 14px;
    font-weight: bold;
`;