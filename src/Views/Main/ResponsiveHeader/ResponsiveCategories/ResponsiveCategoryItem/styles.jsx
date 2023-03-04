import styled from 'styled-components';

export const Wrapper = styled.div`

    .headerTitleDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        flex-direction: row-reverse;
    }
`;

export const DownAndUpIconContainer = styled.div`
    width: auto;

    svg {
        path {
            fill: ${(props) => props.id === props.activeCategoryItem ? "#FF0000" : "#000000"};
        }
        width: 10px;
        height: 10px;
    }
`;

export const ItemsDiv = styled.div`
    padding-right: 20px;

    .itemDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        flex-direction: row-reverse;
    }
`;

export const DownAndUpItemIconContainer = styled.div`
    width: auto;

    svg {
        path {
            fill: ${(props) => props.id === props.selectedItemId ? "#FF0000" : "#000000"};
        }
        width: 10px;
        height: 10px;
    }
`;