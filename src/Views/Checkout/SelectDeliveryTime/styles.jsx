import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    width: 100%;

    .selectedDateCustomContainer {
        margin-top: 10px;
        margin-bottom: 10px;
        span {
            margin-right: 10px;
            font-size: 14px;
            font-weight: bold;
        }
    }
`;

export const ClockIconContainer = styled.div`
    width: auto;
    margin-left: 5px;
    margin-top: 5px;
    svg {
        width: 20px;
        height: 20px;
        fill: none;
    }
`;

export const TitleAndIconContainer = styled(CustomContainer)`
    margin-right: 10px;
`;

export const DatePickerContainer = styled(CustomContainer)`
    margin-right: 10px;
`;