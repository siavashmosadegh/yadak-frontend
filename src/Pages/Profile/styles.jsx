import styled from 'styled-components';
import CustomContainer from '../../UI-Kit/Grid/CustomContainer';

export const ProfileWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-right: 20px;

    a {
        text-decoration: none;
    }
`;

export const IconContainer = styled.div`
    width: auto;
    display: flex;
    
    svg {
        width: 15px;
        height: 15px;
        path {
            fill: rgb(28,192,212);
        }
    }
`;

export const StyledSpan = styled.div`
    font-size: 12px;
    width: max-content;
    color: rgb(28,192,212);
`;

export const FirstRowCustomContainer = styled(CustomContainer)`
    margin-bottom: 50px;
    margin-inline: 20px;
`;

export const SecondRowCustomContainer = styled(CustomContainer)`
    margin-inline: 20px;

    p {
        text-align: right;
        margin: 0;
        padding: 0;
        font-size: 13px;
        font-weight: bold;
    }

    span {
        font-weight: bold;
    }

    .numberSpan {
        margin-left: 7px;
    }
`;

export const FailedDeliveryIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 15px;
    svg {
        width: 50px;
        height: 50px;
    }
`;

export const PendingDeliveryIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 15px;    
    svg {
        width: 60px;
        height: 60px;
    }
`;

export const SuccessfulDeliveryIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 15px;    
    svg {
        width: 50px;
        height: 50px;
    }
`;