import styled from 'styled-components';

export const SortWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 40px;
    align-items: center;

    .bigScreen {
        display: initial;
    }

    .drawerDiv {
        display: none;
    }

    @media (max-width: 1100px) {
        .bigScreen {
            display: none;
        }
    
        .drawerDiv {
            display: initial;
        }
    }
`;

export const SortIconContainer = styled.div`
    width: auto;
    margin-left: 5px;
    padding-top: 5px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const SortingItemsDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;

    .sortingItem {
        font-size: 13px;
        font-weight: bold;
        margin-right: 7px;
        // p {
        //     color: ${(props) => props.id === props.selectedSortId ? "#FF0000" : "#000000"};
        // }
    }

    @media (max-width: 1100px) {
        flex-direction: column;

        .sortingItem {
            flex-direction: row-reverse;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid rgba(0,0,0,0.2);
        }
    }
`;

export const CheckIconContainer = styled.div`
    width: auto;
    display: none;

    svg {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 1100px) {
        display: initial;
    }
`;