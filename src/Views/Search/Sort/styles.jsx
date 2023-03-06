import styled from 'styled-components';

export const SortWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 40px;
    align-items: center;
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
        // color: ${(props) => props.id === props.selectedSortingItemId ? "#FF0000" : "#000000"};
    }
`;