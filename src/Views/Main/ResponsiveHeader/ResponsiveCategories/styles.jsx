import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-inline: 10px;
    width: 200px;
`;

export const Line = styled.div`
    width: 100%;
    height: 3px;
    background-color: 1px solid black;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const IconContainer = styled.div`
    width: auto;

    svg {
        fill: black;
        width: 20px;
        height: 20px;
    }
`;

export const TextContainer = styled.div`
    font-size: 15px;
    margin-bottom: 5px;
    margin-right: 3px;
`;