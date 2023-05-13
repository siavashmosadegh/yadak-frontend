import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    padding-inline: 50px;

    @media (max-width: 600px) {
        padding-inline: 30px;
    }
`;

export const PaymentInfo = styled(CustomContainer)`
    width: calc(100% - 300px);

    @media (max-width: 1100px) {
        width: 100%;
        margin-bottom: 15px;
    }
`;