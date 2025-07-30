import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    p {
        text-align: right;
    }
    
    width: 50%;

    input {
        width: calc(100% - 8px);
        height: 30px;
        textalign: center;
    }

    .firstnameError {
        color: red;
        font-size: 12px;
    }

    .lastnameError {
        color: red;
        font-size: 12px;
    }

    button {
        margin-top: 30px;
    }
`;