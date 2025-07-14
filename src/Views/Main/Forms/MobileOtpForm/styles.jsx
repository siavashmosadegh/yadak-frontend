import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
`;

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    text-align: center;
    border-radius: 10px;
    font-size: 18px;
    border: 1px solid ${(props) => (props.hasError ? 'red' : 'gray')};
    padding: 0 8px;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.hasError ? 'red' : '#007BFF')};
    }
`;

export const ErrorText = styled.div`
    height: 20px;
    font-size: 14px;
    color: red;
    text-align: right;
`;