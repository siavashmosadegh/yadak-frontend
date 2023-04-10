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

export const LeftArrowIconContainer = styled.div`
    width: auto;
    display: flex;
    svg {
        fill: black;
        width: 15px;
        height: 15px;
    }
`;

export const CrossIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        fill: #000000;
        width: 23px;
        height: 23px;
    }
`;

export const SecondRowCustomContainer = styled(CustomContainer)`
    margin-right: 12px;

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