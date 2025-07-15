import styled from 'styled-components';

export const Wrapper = styled.div`
    // width: 40%;
    width: 100%;
    height: auto;
    // padding: 20px;
    background-color: rgb(247,247,247);
    border-radius: 15px;

    .verified {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        svg {
            margin-left: 5px;
        }
    }

    .price {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;

        .innerDiv {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
        }

        .number {
            margin-left: 5px;
            font-weight: bold;
            font-size: 18px;
        }
    }

    .buttonDiv {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1100px) {
        width: 100%;
        background-color: white;
        border-radius: none;
        padding: 0px;

        .lowerLine {
            display: none;
        }

        .price {
            display: none;
        }

        .buttonDiv {
            display: none;
        }
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
`;