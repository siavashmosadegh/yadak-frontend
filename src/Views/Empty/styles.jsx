import styled from 'styled-components';
import CustomContainer from '../../UI-Kit/Grid/CustomContainer';

export const EmptyWrapper = styled(CustomContainer)`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export const IconContainer = styled.div`
    width: auto;
    display: flex;
    margin-bottom: 20px;
    svg {
        width: 100px;
        height: 100px;
    }
`;