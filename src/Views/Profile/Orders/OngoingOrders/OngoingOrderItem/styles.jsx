import styled from 'styled-components';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 90%;
    margin-top: 20px;
`;

export const FirstRowCustomContainer = styled(CustomContainer)`
    height: 40px;
    margin-inline: 10px;

    .statusParagraph {
        font-size: 13px;
        font-weight: bold;
    }
`;

export const PendingIconContainer = styled.div`
    display: flex;
    width: auto;
    margin-left: 10px;
    svg {
        width: 30px;
        height: 30px;
    }
`;

export const LeftArrowIconContainer = styled.div`
    width: auto;
    display: flex;
    svg {
        fill: black;
        width: 15px;
        height: 15px;
    }
`;

export const SecondRowCustomContainer = styled(CustomContainer)`
    margin-right: 17px;

    .orderRegistryDateSpan {
        font-weight: bold;
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        .orderRegistryDateSpan {
            margin-bottom: 10px;
        }
    }
`;

export const SingleItem = styled(CustomContainer)`
    p {
        color: gray;
        font-size: 12px;
        font-weight: bold;
        margin-left: 5px;
    }

    span {
        color: black;
        font-size: 14px;
        font-weight: bold;
    }
`;

export const ThirdRowCustomContainer = styled(CustomContainer)`
    margin-inline: 17px;
    border-top: 1px solid rgba(0,0,0,0.1);
    .deliveryParagraph {
        font-size: 12px;
        font-weight: bold;
        color: gray;
        margin-left: 5px;
        padding-top: 3px;
    }

    .statusDiv {
        width: 40%;
    }

    @media (max-width: 900px) {
        .statusDiv {
            width: 100%;
        }
    }

    // .currentStatus {
    //     margin-left: 50px;
    // }
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