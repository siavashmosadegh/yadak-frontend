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
`;