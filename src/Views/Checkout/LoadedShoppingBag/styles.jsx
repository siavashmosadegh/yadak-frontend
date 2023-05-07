import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    width: calc(100% - 300px);
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    // padding-inline: 20px;

    @media (max-width: 1100px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const Header = styled(CustomContainer)`
    width: 100%;
    padding-top: 10px;

    .headerTitle {
        margin-right: 10px;
        font-size: 20px;
        font-weight: bolder;
    }
`;

export const DeleteEverythingButton = styled.button`
    width: auto;
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.2);
    font-size: 15px;
    font-weight: bold;
    padding-left: 8px;
    padding-right: 0;
    border-radius: 10px;
    margin-left: 10px;

    span {
        margin-bottom: 2px;
    }
`;

export const TrashIconContainer = styled.div`
    width: auto;
    svg {
        width: 40px;
        height: 40px;
    }
`;