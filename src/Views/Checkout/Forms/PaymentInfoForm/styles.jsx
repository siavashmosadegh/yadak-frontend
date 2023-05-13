import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    width: 100%;
`;

export const PaymentMethodContentWrapper = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,0.2);
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

    .paymentMethodError {
        color: red;
    }
`;

export const CreditCardIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-inline: 10px;

    svg {
        width: 35px;
        height: 35px;
    }
`;

export const CashOnDeliveryIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-inline: 10px;

    svg {
        width: 35px;
        height: 35px;
    }
`;

export const AddDiscountCodeContentWrapper = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    margin-top: 15px;
    padding-bottom: 15px;

    h3 {
        text-align: right;
        margin-right: 15px;
    }

    .styledCustomContainer {
        margin-right: 12px;
    }

    input {
        width: 50%;
        height: 30px;
        border: 1px solid rgba(0,0,0,0.2);
        text-align: right;
        padding-right: 10px;
        margin-bottom: 10px;
    }
`;