import styled from 'styled-components';

export const Wrapper = styled.div`

    .addTitle {
        font-size: 15px;
        font-weight: bold;
        color: black;
    }

    p {
        margin: 0;
        padding: 0;
    }
`;

export const LeftArrowIconContainer = styled.div`
    width: auto;
    padding-top: 5px;
    svg {
        width: 25px;
        height: 25px;
        fill: black;
    }
`;

export const AddLocationIconContainer = styled.div`
    width: auto;
    padding-top: 5px;
    margin-left: 5px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
    margin-top: 15px;
`;