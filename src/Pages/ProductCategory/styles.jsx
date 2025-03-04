import styled from 'styled-components';

export const ProductCategoryWrapper = styled.div`



    h1 {
        text-align: center;
    }
`;

export const BigScreenWrapper = styled.div`;
    display: flex;
    flex-direction: row-reverse;

    .filterDiv {
        width: 250px;
        border: 1px solid red;
    }

    .contentDiv {
        width: calc(100% - 250px);
    }
`;