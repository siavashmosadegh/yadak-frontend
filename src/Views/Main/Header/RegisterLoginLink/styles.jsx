import styled from "styled-components";

export const Wrapper = styled.div`

    a {
        text-decoration: none;
        color: black;
    }

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
        display: initial;
        font-size: 13.5px;
        margin-bottom: 4px;
        text-decoration: none;
    }

    .secondTextContainer {
        display: none;
        font-size: 13.5px;
        margin-bottom: 4px;
        text-decoration: none;
    }

    @media (max-width: 1100px) {
        .textContainer {
            display: none;
        }

        .secondTextContainer {
            display: initial;
        }

        .loginDiv {
            width: 65px;
        }
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