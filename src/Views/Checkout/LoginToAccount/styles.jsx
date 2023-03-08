import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    height: 135px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    margin-right: 10px;
    // padding-inline: 20px;

    @media (max-width: 1100px) {
        width: 70%;
        margin-right: 0px;
        margin-bottom: 10px;
    }

    .firstRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const LoginIconContainer = styled.div`
    width: auto;
    margin-right: 15px;
    svg {
        fill: #FFA500;
        width: 20px;
        height: 20px;
    }
`;

export const LeftArrowIconContainer = styled.div`
    width: auto;
    margin-left: 15px;
    svg {
        width: 20px;
        height: 20px;
    }
`;