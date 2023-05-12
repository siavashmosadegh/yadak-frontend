import styled from 'styled-components';
import CustomContainer from '../../UI-Kit/Grid/CustomContainer';

export const TitleAndIconWrapper = styled(CustomContainer)`

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 900px) {
            flex-direction: column;
            justify-content: flex-start;
            margin-inline: 10px;
        }
    }
`;

export const TitleContainer = styled.div`
    color: red;
    font-size: ${(props) => props.active === true ? "15px" : "12px"};
    font-weight: bold;
    width: max-content;
`;

export const IconContainer = styled.div`
    width: auto;
    margin-left: 10px;
    svg {
        fill: ${(props) => props.fill};
        width: ${(props) => props.active === true ? "30px" : "20px"};
        height: ${(props) => props.active === true ? "30px" : "20px"};
    }

    @media (max-width: 900px) {
        margin-left: 0;
    }
`;

export const Line = styled.div`
    width: 100px;
    height: 1px;
    background-color: red;
    margin-inline: 30px;

    @media (max-width: 900px) {
        display: none;
    }
`;