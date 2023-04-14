import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    .imgDiv {
        width: 100px;
        margin-right: 10px;
        img {
            width: 100%;
            height: auto;
        }
    }

    .titleDiv {
        margin-right: 10px;
        width: calc(100% - 100px);

        p {
            text-align: right;
            font-size: 14px;
            font-weight: bold;
        }
    }

    .buttonContainer {
        margin-top: 10px;
        padding-inline: 10px;
    }
`;