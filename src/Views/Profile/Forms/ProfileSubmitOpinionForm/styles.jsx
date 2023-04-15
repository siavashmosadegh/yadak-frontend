import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 70%;

    @media (max-width: 600px) {
        width: 90%;
    }
`;

export const Form = styled.form`

    p {
        text-align: right;
    }

    .opinionTitleError {
        text-align: right;
        margin: 0;
        padding: 0;
        color: red;
    }

    .opinionTextError {
        text-align: right;
        margin: 0;
        padding: 0;
        color: red;
        margin-bottom: 20px;
    }

    input {
        width: calc(100% - 8px);
        height: 50px;
        margin-bottom: 15px;
    }

    textarea {
        margin-bottom: 10px;
    }
`;