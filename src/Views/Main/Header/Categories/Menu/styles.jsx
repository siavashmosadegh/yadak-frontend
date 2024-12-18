import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    width: 900px;
    height: 560px;
    background-color: beige;
    display: flex;
    flex-direction: row-reverse;

    .menu {
        width: 200px;
    }

    .menuItem {
        height: 35px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 12px;
        padding-right: 20px;
    }

    .subMenu {
        width: calc(100% - 200px);
        background-color: blue;
    }
`;