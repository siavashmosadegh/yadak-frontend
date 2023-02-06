import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 18px;
    padding-right: 18px;

    .loginDiv {
        display: flex;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-opacity: 0.1;
        border-radius: 8px;
        height: 35px;
        width: 125px;
        justify-content: center;
        text-decoration: none;
    }

    .textContainer {
        font-size: 13.5px;
        margin-bottom: 4px;
        text-decoration: none;
    }
`;

export const BasketIconContainer = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-bottom: 5px;
    svg {
        fill: black;
        width: 25px;
        height: 25px;
    }
`;

export const LoginIconContainer = styled.div`
    width: auto;
    margin-left: 7px;
    margin-top: 3px;
    svg {
        fill: black;
        width: 25px;
        height: 25px;
    }
`;