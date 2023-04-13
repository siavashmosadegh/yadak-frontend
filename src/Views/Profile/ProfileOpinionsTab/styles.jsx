import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled(CustomContainer)`
    margin-right: 20px;
    height: 40px;

    p {
        color: ${(props) => props.title === props.activeOpinionTab ? 'red' : 'rgb(158,159,175)'};
        margin: 0;
        padding: 0;
    }
`;