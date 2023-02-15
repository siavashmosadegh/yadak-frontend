import styled from 'styled-components';

export const RoutingSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
`;

export const RoutingItem = styled.div`

    .titleDiv {
        width: auto;
        margin-left: 10px;
        margin-right: 10px;
    }

    font-size: 13px;
    color: gray;
    width: auto;
    display: flex;
    align-items: space-between;
    flex-direction: row-reverse;
`;

export const FirstSectionWrapper = styled.div`
    display: flex;
`;

export const PictureDiv = styled.div`
    width: 30%;
    border: 1px solid red;
`;

export const LeftDiv = styled.div`
    width: 70%;
    border: 1px solid blue;

    h3 {
        text-align: right;
    }

    .description {
        display: flex;
        flex-direction: row-reverse;
    }
`;