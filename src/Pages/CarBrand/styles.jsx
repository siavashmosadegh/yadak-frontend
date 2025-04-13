import styled from "styled-components";

export const Wrapper = styled.div`

    width: 100%;
    h1 {
        text-align: center;
    }
`;

export const CarTrimLevelItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    border: 1px solid red;
`;

export const FilterDiv = styled.div`
    width: 300px;
    padding: 50px;
    height: 1000px;
    border: 1px solid gray;
    border-radius: 25px;
`;

export const MainDiv = styled.div`
    width: calc(100% - 300px);
    display: flex;
    flex-direction: row-reverse;
    padding: 30px;
`;