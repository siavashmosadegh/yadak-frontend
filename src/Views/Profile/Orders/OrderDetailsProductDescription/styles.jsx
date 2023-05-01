import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 20px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 95%;

    p {
        margin: 0;
        padding: 0;
    }

    .titleParagraph {
        font-size: 12px;
        color: rgba(0,0,0,0.5);
        margin-left: 5px;
    }

    .itemParagraph {
        font-size: 13px;
        font-weight: bold;
        color: black;
    }

    .firstRow {
        // height: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .secondRow {
        padding-right: 10px;
        // height: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .thirdRow {
        // height: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-inline: 10px;
    }

    .marsoole {
        font-size: 12px;
        font-weight: bold;
        margin-right: 10px;
    }

    .deliveryType {
        font-size: 12px;
        font-weight: bold;
        color: rgb(0,142,178);
    }

    .infoCustomContainer {
        p {
            color: rgb(76,175,80);
            font-size: 12px;
            font-weight: bold;
        }
    }

    .fourthRow {
        border-radius: 10px;
        background-color: rgba(0,0,0,0.1);
        // height: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-inline: 10px;
        padding-inline: 10px;
        margin-bottom: 10px;
    }

    .fifthRow {
        border-top: 1px solid rgba(0,0,0,0.1);
        padding-inline: 10px;
        p {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }

    .sixthRow {
        padding-inline: 10px;
        color: rgb(25,191,211);
        // height: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    
    .orderStatusRow {
        height: 50px;
        padding-right: 10px;
    }
`;

export const CircleIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-inline: 5px;
`;

export const DeliverymanIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 20px;
        height: 20px;
        path {
            fill: rgb(0,142,178);
        }
    }
`;

export const InfoCircleIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 20px;
        height: 20px;

        path {
            fill: rgb(76,175,80);
        }
    }
`;

export const CopyDocumentIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-right: 5px;
    svg {
        width: 20px;
        height: 20px;
        fill: #000000;
    }
`;

export const AddCommentIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-right: 5px;
    svg {
        width: 20px;
        height: 20px;
        fill: none;
        path {
            stroke: rgb(25,191,211);
        }
    }
`;