import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled(CustomContainer)`

    padding-top: 30px;

    .menu {
        width: 300px;
        margin-right: 20px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 10px;
        // padding-inline: 20px;
    }

    .children {
        width: calc(100% - 300px);
        margin-left: 20px;
    }

    @media (max-width: 1100px) {
        .menu {
            margin-right: 0;
            margin-bottom: 20px;
            width: 90%;
        }
    
        .children {
            // margin-left: 0;
            width: 90%;
        }
    }
`;