import styled from 'styled-components';

export const Wrapper = styled.div`
    .row {
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .verified {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        svg {
            margin-left: 5px;
        }
    }

    border-bottom: 1px solid rgba(0,0,0,0.2);

    :nth-last-child(1) {
        border-bottom: none;
    }
`;

export const LeftDiv = styled.div`
    width: calc(100% - 150px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .title {
        text-align: right;
        font-weight: bold;
    }
`;

export const RightDiv = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;