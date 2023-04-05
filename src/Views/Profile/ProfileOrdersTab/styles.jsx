import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled(CustomContainer)`
    margin-right: 20px;
    height: 40px;
`;

export const TitleContainer = styled.div`
    color: ${(props) => props.title === props.activeOrdersTab ? 'red' : 'rgb(158,159,175)'};
    margin-left: 5px;
    margin-bottom: 2px;
`;

export const NumberContainer = styled.div`
    background-color: ${(props) => props.title === props.activeOrdersTab ? 'red' : 'rgb(158,159,175)'};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 20px;
    height: 20px;
`;