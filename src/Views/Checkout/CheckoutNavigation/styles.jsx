import styled from 'styled-components';

export const CheckoutNavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const NavigationItemsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 900px) {
        justify-content: space-between;
    }
`;