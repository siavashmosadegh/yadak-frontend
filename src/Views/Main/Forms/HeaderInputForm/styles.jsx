import styled from "styled-components";

export const FormContainer = styled.div`

    width: auto;
    height: 100%;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
    }

    input {
        border: none;
        width: 400px;
        height: 35px;
        text-align: right;
        border-radius: 5px;
        padding-right: 40px;
        background-color: #F1F2F4;
        color: black;
    }
    input:hover {

    }
    input:focus { 
        outline: none;
    }

    button {
        background-color: rgb(241, 242, 244);
        border: none;
        height: 37px;
        position: absolute;
        left: 5px;
        top: 11.5px;
        border-radius: 10px;
    }

    @media (max-width: 1100px) {
        input {
            width: 100%;
        }
        button {
            top: 0;
        }
    }
`;

export const MagnifierIconContainer = styled.div`
    width: auto;
    display: flex;
    svg {
        fill: #000000;
        width: 20px;
        height: 20px;
    }
`;