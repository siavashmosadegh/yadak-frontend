import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .star {
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        font-size: 14px;
        color: black;
    }

    .opinionAndQuestion {
        width: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        font-size: 14px;
        color: blue;
    }
`;