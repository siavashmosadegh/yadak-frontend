import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
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
        justify-content: space-between;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
`;