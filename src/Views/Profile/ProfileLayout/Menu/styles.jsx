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