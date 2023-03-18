import styled from 'styled-components';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    .radioDiv {
        width: 50px;
    }
`;

export const StampIconContainer = styled.div`
    width: auto;
    padding-top: 5px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HomeIconContainer = styled.div`
    width: auto;
    padding-top: 5px;
    svg {
        width: 25px;
        height: 25px;
        fill: #000000;
    }
`;

export const OtherDiv = styled(CustomContainer)`
    padding-top: 8px;
    width: calc(100% - 50px);
    text-align: right;
`;