import styled from 'styled-components';

export const FormContainer = styled.div`
    width: calc(100% - 134px);
    margin-left: 10px;

    @media (max-width: 690px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const Form = styled.form`

    position: relative;
    display: flex;
    justify-content: flex-start;

    input {
        border: none;
        width: 400px;
        height: 35px;
        text-align: right;
        border-radius: 5px;
        padding-right: 20px;
        background-color: #F1F2F4;
        color: black;
    }

    input:focus { 
        outline: none;
    }

    button {
        background-color: rgb(241, 242, 244);
        border: none;
        height: 100%;
        position: absolute;
        top: 0;
        left: 5px;
        border-radius: 10px;
    }

    @media (max-width: 690px) {

        width: 100%;
        justify-content: center;
        flex-direction: row-reverse;
        justify-content: space-evenly;

        input {
            width: 80%;
        }

        button {
            position: static;
            height: 37px;
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