import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
    display: flex;
    padding: 20px;
`;

export const ShoppingBagIconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const EmptyShoppingBagContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 300px);
    height: 300px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
`;