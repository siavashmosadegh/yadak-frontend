import styled from 'styled-components';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';

export const ProfileWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-right: 20px;

    .firstContainer {
        
    }
`;

export const RightArrowIconContainer = styled.div`
    display: flex;
    width: auto;
    margin-inline: 10px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

export const FirstContainer = styled(CustomContainer)`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    height: 50px;
    p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: bold;
    }
`;

export const SecondContainer = styled(CustomContainer)`

    padding-right: 10px;
    height: 50px;

    p {
        margin: 0;
        padding: 0;
    }

    .title {
        font-size: 12px;
        color: rgba(0,0,0,0.5);
        margin-left: 5px;
    }

    .item {
        font-size: 13px;
        font-weight: bold;
        color: black;
    }
`;

export const CircleIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-inline: 5px;
`;

export const LineContainer = styled.div`
    padding-inline: 10px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,0.1);
`;

export const ThirdContainer = styled(CustomContainer)`
    padding-right: 10px;
    height: 50px;

    p {
        margin: 0;
        padding: 0;
    }

    .title {
        font-size: 12px;
        color: rgba(0,0,0,0.5);
        margin-left: 5px;
    }

    .item {
        font-size: 13px;
        font-weight: bold;
        color: black;
    }
`;

export const FourthContainer = styled(CustomContainer)`
    padding-right: 10px;
    padding-left: 10px;
    height: 50px;

    p {
        margin: 0;
        padding: 0;
    }

    .title {
        font-size: 12px;
        color: rgba(0,0,0,0.5);
        margin-left: 5px;
    }

    .item {
        font-size: 13px;
        font-weight: bold;
        color: black;
    }
`;

export const EditIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 20px;
        height: 20px;
        path {
            fill: rgb(26,191,211);
        }
    }
`;