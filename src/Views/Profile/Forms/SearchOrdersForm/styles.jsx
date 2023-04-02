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

    @media (max-width: 690px) {

        width: 100%;
        justify-content: center;
        
        input {
            width: 80%;
        }
    }
`;