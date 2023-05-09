import styled from 'styled-components';
import CustomContainer from '../../UI-Kit/Grid/CustomContainer';

export const TitleAndIconWrapper = styled(CustomContainer)`

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
    font-size: ${(props) => props.active === true ? "24px" : "15px"};
    font-weight: bold;
    width: max-content;
`;

export const IconContainer = styled.div`
    width: auto;
    margin-left: 10px;
    svg {
        fill: ${(props) => props.fill};
        width: ${(props) => props.active === true ? "50px" : "30px"};
        height: ${(props) => props.active === true ? "50px" : "30px"};
    }
`;

export const Line = styled.div`
    width: 100px;
    height: 1px;
    background-color: red;
    margin-inline: 30px;
`;