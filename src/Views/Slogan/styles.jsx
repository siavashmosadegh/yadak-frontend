import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
        display: flex;
        width: auto;
        align-items: center;

        svg {
            margin-left: 10px;
        }
    }

    @media (max-width: 1100px) {
        .item {
            flex-direction: column-reverse;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column-reverse;

        .item {
            margin-bottom: 15px;
        }
    }
`;