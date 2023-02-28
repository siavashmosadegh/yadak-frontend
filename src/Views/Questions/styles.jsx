import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const EmptyWrapper = styled.div`
    padding-right: 100px;

    h2 {
        font-size: 15px;
        font-weight: bold;
        text-align: right;
    }

    @media (max-width: 800px) {
        padding-right: 0px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 20px;

    .askQuestionDiv {
        width: 250px;

        p {
            text-align: right;
            font-size: 12px;
        }

        button {
            width: 100%;
            height: 50px;
            border: 1px solid red;
            border-radius: 10px;
            background-color: white;
            color: red;
            font-size: 15px;
            font-weight: bold;
        }
    }

    .questions {
        width: calc(100% - 250px);
        max-height: 500px;
        overflow-y: auto;
        // padding: 20px;
        // border: 1px solid red;
    }

    @media (max-width: 1100px) {
        flex-direction: column;

        .askQuestionDiv {
            width: 100%;

            button {
                width: 250px;
            }
        }

        .buttonDiv {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }

        .questions {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            overflow-x: auto;
            margin-top: 20px;
        }
    }
`;