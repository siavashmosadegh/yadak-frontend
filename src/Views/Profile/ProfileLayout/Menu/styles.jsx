import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';

export const MenuWrapper = styled.div`
    // margin-inline: 20px;
`;

export const IconContainer = styled.div`
    width: auto;
    display: flex;
    margin-inline: 10px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 13px;
    font-weight: ${(props) => props.to === props.location ? "bold" : "normal"};
`;

export const StyledCustomContainer = styled(CustomContainer)`
    height: 40px;
    border-top: 1px solid rgba(0,0,0,0.2);

    :hover {
        background-color: rgba(0,0,0,0.1);
    }
`;

export const UserCustomContainer = styled(CustomContainer)`
    height: 50px;
`;

export const VerticalLine = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${(props) => props.isActive === true ? "red" : "white"};
`;