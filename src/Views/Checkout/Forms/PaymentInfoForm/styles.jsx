import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    width: 100%;
`;

export const PaymentMethodContentWrapper = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;

    h3 {
        text-align: right;
        margin-right: 15px;
    }

    .styledCustomContainer {
        margin-right: 12px;
    }

    .styledField {
        width: 25px;
        height: 25px;
        margin: 0;
    }
`;

export const CreditCardIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-inline: 10px;

    svg {
        width: 25px;
        height: 25px;
    }
`;