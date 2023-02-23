import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.1);
    justify-content: space-between;
    border-radius: 10px;
    flex-direction: row-reverse;
    // padding-left: 10px;
    // padding-right: 10px;
    width: 100%;
    margin-bottom: 10px;

    p {
        font-size: 12px;
    }

    .infoAndTitle {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        svg {
            margin-left: 5px;
            fill: none;
            width: 20px;
            height: 20px;
        }
    }

    svg {
        fill: black;
        width: 20px;
        height: 20px;
    }
`;