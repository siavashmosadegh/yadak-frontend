import styled from 'styled-components';

export const TitleAndIconWrapper = styled.div`

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }
`;

export const TitleContainer = styled.div`
    color: red;
    font-size: 15px;
    font-weight: bold;
`;

export const IconContainer = styled.div`
    width: auto;
    margin-left: 10px;
    svg {
        fill: ${(props) => props.fill};
        width: 45px;
        height: 45px;
    }
`;