import styled from 'styled-components';

export const Wrapper = styled.div`
    // display: flex;
    // width: 100%;
    // flex-direction: row-reverse;
    // height: 150px;

    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.3);

    .iconAndQuestionRow {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-bottom: 20px;
    }

    .iconDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 30px;
    }

    .questionDiv {
        width: calc(100% - 80px);
        display: flex;
        justify-content: right;
        align-items: center;
        text-align: right;
    }

    // .askQuestionDiv {
    //     display: flex;
    //     align-items: center;
    //     justify-content: flex-start;
    // }
    
    .registerNewAnswer {
        width: 120px;
        height: 40px;
        border: none;
        background-color: red;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: bold;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;

        svg {
            fill: #ffffff;
            width: 25px;
            height: 25px;
        }
    }
`;
// .iconDiv {
//     width: 80px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-start;

//     svg {
//         margin-bottom: 20px;
//     }

//     // .answerTitle {
//     //     height: 30px;
//     //     margin-top: 5px;
//     // }
// }

// .questionDiv {
//     width: calc(100% - 80px);
//     display: flex;
//     flex-direction: column;
//     align-items: end;
//     justify-content: flex-start;
//     border: 1px solid red;
// }

// .questionSpan {
//     height: 30px;
//     margin-bottom: 20px;
// }