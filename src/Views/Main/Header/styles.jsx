import styled from "styled-components";

export const Wrapper = styled.div`

    width: 100%;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 1000;

    .upper {
        height: 60px;
        display: flex;
        // border: 1px solid red;
    }

    .basket {
        width: 200px;
    }

    .formAndLogo {
        width: calc(100% - 200px);
        display: flex;
        justify-content: flex-end;
    }

    .logoText {
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;