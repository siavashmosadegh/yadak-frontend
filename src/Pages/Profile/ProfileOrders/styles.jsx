import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const FormAndTitleContainer = styled(CustomContainer)`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-right: 20px;
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