import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    padding-inline: 50px;
`;

export const SelectDeliveryInfo = styled(CustomContainer)`
    width: calc(100% - 300px);
    // border: 1px solid rgba(0,0,0,0.2);
    // border-radius: 10px;

    @media (max-width: 1100px) {
        width: 100%;
    }
`;