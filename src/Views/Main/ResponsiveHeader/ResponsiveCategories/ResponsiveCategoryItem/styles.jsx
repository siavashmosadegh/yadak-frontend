import styled from 'styled-components';

export const Wrapper = styled.div`

    .headerTitleDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        flex-direction: row-reverse;
    }

    .allOfTheThings {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        // span {
        //     font-size: 12px;
        //     color: gray;
        // }
    }

    a {
        text-decoration: none;
        color: gray;
        font-size: 12px;
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
    padding-right: 10px;

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

export const LeftArrowIconContainer = styled.div`
    width: auto;
    margin-right: 5px;
    svg {
        width: 10px;
        height: 10px;
    }
`;

export const SubItemsDiv = styled.div`
    padding-right: 10px;

    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 40px;
    flex-direction: row-reverse;
`;