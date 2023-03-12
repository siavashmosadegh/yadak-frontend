import styled from 'styled-components';

export const Form = styled.form`
    form {
        width: 100%;
    }

    // input {
    //     border: 1px solid ${(props) => props.errorss === true ? "red" : "blue"};
    // }

    input {
        width: calc(100% - 8px);
        height: 40px;
        text-align: center;
        border-radius: 10px;
        font-size: 20px;
        // border: 1px solid rgba(0,0,0,0.2);
        border: 1px solid ${(props) => props.errorss === true ? "red" : "gray"};
    }

    input: focus {
        outline: none;
        // border: 1px solid ${(props) => props.errorss === true ? "red" : "aqua"};
    }
`;

export const FormContainer = styled.div`
    .errorDiv {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 40px;
        color: red;
    }
`;