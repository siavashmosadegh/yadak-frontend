import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled(CustomContainer)`
    .menu {
        width: 300px;
        margin-right: 20px;
    }

    .children {
        width: calc(100% - 300px);
        margin-left: 20px;
    }

    @media (max-width: 1100px) {
        .menu {
            margin-right: 0px;
        }
    
        .children {
            margin-left: 0px;
        }
    }
`;