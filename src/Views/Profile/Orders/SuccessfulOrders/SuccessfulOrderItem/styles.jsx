import styled from 'styled-components';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';

export const Wrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 90%;
    margin-top: 20px;

    .deliveredParagraph {
        font-size: 13px;
        font-weight: bold;
    }
`;

export const FirstRowCustomContainer = styled(CustomContainer)`
    height: 40px;
    margin-inline: 10px;
`;

export const SecondRowCustomContainer = styled(CustomContainer)`
    margin-inline: 10px;

    .orderRegistryDateSpan {
        margin-left: 5px;
        font-weight: bold;
        opacity: 0.5;
    }

    @media (max-width: 1000px) {
        .orderRegistryDateSpan {
            margin-bottom: 10px;
        }
    }
`;

export const CheckedIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 25px;
        height: 25px;
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

export const ReceiptCustomContainer = styled(CustomContainer)`
    height: 60px;
    border-top: 1px solid rgba(0,0,0,0.1);
    p {
        font-size: 13px;
        font-weight: bold;
        margin-left: 10px;
    }
`;

export const ReceiptIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 30px;
        height: 30px;
        fill: none;
    }
`;