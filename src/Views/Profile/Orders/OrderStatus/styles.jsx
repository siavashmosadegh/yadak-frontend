import styled from 'styled-components';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    width: 40%;

    p {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const NextStepCustomContainer = styled(CustomContainer)`
    .text {
        font-size: 12px;
        font-weight: bold;
        color: gray;
    }

    .processed {
        font-size: 12px;
        font-weight: bold;
        color: black;
    }

    p {
        margin-right: 5px;
    }
`;

export const StatusContainer = styled(CustomContainer)`
    width: 100%;

    .currentStatus {
        color: green;
        font-weight: bold;
        font-size: 14px;
    }
`;