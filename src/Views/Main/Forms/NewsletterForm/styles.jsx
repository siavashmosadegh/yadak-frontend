import styled from 'styled-components';

export const FormContainer = styled.div`

`;

export const Form = styled.form`

    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;

    button {
        width: 60px;
        height: 50px;
        // background-color: ${(props) => props.errorss === true ? "rgb(241,242,244)" : "red"};
        background-color: red;
        color: white;
        border-radius: 10px;
        border: none;
        font-size: 17px;
        font-weight: bold;
    }

    .inputDiv {
        width: calc(100% - 60px);
        padding-inline: 10px;
    }

    .errorDiv {
        text-align: right;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    input {
        width: 100%;
        height: 48px;
        // margin: 10px;
        // border: 1px solid ${(props) => props.errorss === true ? "red" : "gray"};
        background-color: rgb(241,242,244);
        border-radius: 10px;
        border: none;
        text-align: center;
        font-size: 17px;
        font-weight: bold;
    }

    input: focus {
        outline: none;
    }
`;