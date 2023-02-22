import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;

    p {
        font-size: ${(props) => props.font}px;
    }

    .content {
        width: auto;
    }
`;

export const UnderLine = styled.div`
    width: auto;
    height: 2px;
    background-color: red;
`;