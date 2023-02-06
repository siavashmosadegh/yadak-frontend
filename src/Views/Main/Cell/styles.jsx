import styled from 'styled-components';

export const CellWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 182px;
    height: 246px;
    border: 1px solid red;
    margin: 5px;

    p {
        text-align: center;
    }

    .price {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .discount {
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 2.17;
        color: white;
        border-radius: 15px;
        background-color: red;
    }
`;