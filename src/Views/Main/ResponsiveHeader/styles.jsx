import styled from 'styled-components';

export const Wrapper = styled.div`
    
    padding-inline: 20px;

    .upperDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        height: 50px;
    }

    .lowerDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }

    .basketAndRegisterLogin {
        width: 120px;
        display: flex;
        align-items: center;
    }

    .formDiv {
        width: calc(100% - 120px);
    }
`;

export const CategoryIconContainer = styled.div`
    width: auto;

    svg {
        fill: black;
        width: 20px;
        height: 20px;
    }
`;

export const BasketIconContainer = styled.div`
    width: auto;
    margin-right: 10px;
    svg {
        fill: black;
        width: 25px;
        height: 25px;
    }
`;

export const PersonThreeIconContainer = styled.div`
    width: auto;

    svg {
        width: 23px;
        height: 23px;
    }
`;