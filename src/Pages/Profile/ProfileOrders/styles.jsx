import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const FormAndTitleContainer = styled(CustomContainer)`
    height: 70px;

    p {
        margin-right: 10px;
    }

    @media (max-width: 690px) {
        p {
            display: none;
        }
    }
`;

export const TabsContainer = styled(CustomContainer)`
    @media (max-width: 1100px) {
        margin-inline: 20px;
        justify-content: space-between;
    }
`;

export const ProfileWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-right: 20px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
`;