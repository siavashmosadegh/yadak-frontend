import styled from "styled-components";
import CustomContainer from "../../../../../UI-Kit/Grid/CustomContainer";

export const Wrapper = styled(CustomContainer)`

    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;

    .imageDiv {
        width: 100px;

        img {
            width: 75%;
            height: auto;
        }
    }

    .otherDiv {
        width: calc(100% - 100px);
    }

    .otherDivFirstRow {
        position: relative;
    }

    .opinionTextParagraph {
        text-align: right;
        font-size: 14px;
    }

    .opinionTitleParagraph {
        font-size: 15px;
        font-weight: bold;
    }

    .firstRow {
        height: 50px;
    }

    @media (max-width: 1100px) {
        .imageDiv {
            width: 90%;
            margin-bottom: 10px;
        }
    
        .otherDiv {
            width: 90%;
        }        
    }
`;

export const ThreeDotsVerticalIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 15px;
    margin-right: 15px;
    svg {
        width: 20px;
        height: 20px;
        fill: #000000;
    }
`;

export const StatusContainer = styled.div`
    color: ${(props) => props.status === 'تایید شده' ? 'green' : 'orange'};
    font-size: 12px;
    border: ${(props) => props.status === 'تایید شده' ? '1px solid green' : '1px solid orange'};
    background-color: ${(props) => props.status === 'تایید شده' ? 'rgba(0,128,0,0.1)' : 'rgba(255,165,0,0.1)'};
    border-radius: 10px;
    padding: 4px 8px 6px 8px;
    margin-right: auto;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,0.1);
`;

export const LikeIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 20px;
        height: 20px;
        path {
            stroke: green;
        }
    }
`;

export const QuestionIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 20px;
        height: 20px;
        path {
            fill: orange;
        }
    }
`;

export const DislikeIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 20px;
        height: 20px;
        path {
            stroke: red;
        }
    }
`;

export const LikeCustomContainer = styled(CustomContainer)`
    p {
        color: green;
    }
`;

export const QuestionCustomContainer = styled(CustomContainer)`
    p {
        color: orange;
    }
`;

export const DislikeCustomContainer = styled(CustomContainer)`
    p {
        color: red;
    }
`;

export const NumberDiv = styled(CustomContainer)`
    width: 25px;
    height: 25px;
    color: white;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    font-weight: bold;
    font-size: 13px;
`;

export const TrashIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 25px;
        height: 25px;
        fill: red;
    }
`;

export const EditIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-left: 10px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const EditAndTrashDiv = styled.div`
    position: absolute;
    top: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    left: 20px;
    border: 1px solid black;
    z-index: 10;
    background-color: white;
    padding-inline: 10px;
    border-radius: 10px;

    .item {
        :hover {
            background-color: rgb(241,242,244);
        }
    }
`;