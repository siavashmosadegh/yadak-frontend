import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 10px;
    padding-top: 10px;

    .pasokh {
        width: 80px;
        // height: 30px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .answerDiv {
        width: calc(100% - 80px);
        text-align: right;
        // border: 1px solid blue;
    }
`;