import styled from 'styled-components';

export const SearchWrapper = styled.div`
    
    display: flex;
    flex-direction: row-reverse;
    padding-inline: 20px;

    .filterDiv {
        width: 252px;

    }

    .productListDiv {
        width: calc(100% - 252px);
    }
`;