import styled from "styled-components";

export const DetailsWrapper = styled.div`

    border: 1px solid gray;
    border-radius: 15px;

    .item {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }

    .rightParagraph {
        margin-right: 12px;
    }

    .leftParagraph {
        margin-left: 12px;
    }
`;