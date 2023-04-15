import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 70%;
    padding: 10px;
`;

export const Form = styled.form`

    p {
        text-align: right;
    }

    input {
        width: calc(100% - 8px);
        height: 50px;
    }

    textarea {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;