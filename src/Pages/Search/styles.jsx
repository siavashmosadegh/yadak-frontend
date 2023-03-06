import styled from 'styled-components';

export const SearchWrapper = styled.div`
    
    padding: 20px;

    .responsiveFilter {
        display: none;
    }

    .lowerDiv {
        display: flex;
        flex-direction: row-reverse;
    }

    .filterDiv {
        width: 252px;
    }

    .productListDiv {
        width: calc(100% - 252px);
    }

    @media (max-width: 1100px) {
        .lowerDiv {
            flex-direction: column;
        }

        .responsiveFilter {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            height: 40px;
        }

        .filterDiv {
            display: none;
        }

        .productListDiv {
            width: 100%;
        }
    }
`;

export const FilterIconContainer = styled.div`
    width: auto;
    margin-left: 5px;
    margin-top: 5px;
    svg {
        width: 25px;
        height: 25px;
    }
`;