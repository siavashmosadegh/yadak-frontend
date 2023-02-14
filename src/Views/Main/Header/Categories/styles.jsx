import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    // height: 500px;
    // padding: 10px;
    align-items: flex-start;
    // border: 1px solid green;
    position: relative;
    border-bottom: 1px solid black;

    .firstTime {
        position: absolute;
        top: 0;
        right: 90px;
    }

    .secondTime {
        position: absolute;
        top: 0;
        right: 195px;
    }
`;

export const IconContainer = styled.div`
    width: auto;

    svg {
        fill: black;
        width: 20px;
        height: 20px;
    }
`;

export const TextContainer = styled.div`
    font-size: 15px;
    margin-bottom: 5px;
    margin-right: 3px;
`;

export const CategoryItem = styled.div`
    // position: relative;
    // border: 1px solid blue;
    .textAndIcon {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 10px;
        width: auto;
    }

    // .menu {
    //     position: absolute;
    //     top: 42px;
    //     right: 0;
    //     border: 1px solid red;
    // }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

// export const Menu = styled.div`
//     position: absolute;
//     top: 25px;
//     right: 25px;
//     width: 900px;
//     height: 500px;
//     background-color: beige;
// `;