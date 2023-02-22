import React from 'react';
import QuestionMarkIcon from '../../../Icons/ProductIcons/QuestionMarkIcon';
import AnswerItem from '../AnswerItem';
import { Wrapper } from './styles';
import LeftArrowIcon from '../../../Icons/LeftArrowIcon';

const QuestionItem = (props) => {

    const {
        item
    } = props;

    const answers = () => {
        if (item.answers !== null && item.answers.length !== 0) {
            return (
                item.answers.map( (item) => {
                    return (
                        <AnswerItem
                            answer={item.answer}
                        />
                    );
                })
            );
        }
    }

    return (
        <Wrapper>
            <div className="iconAndQuestionRow">
                <div className="iconDiv">
                    <QuestionMarkIcon />
                </div>

                <div className="questionDiv">
                    {item.question}
                </div>
            </div>
            {answers()}

            <div className="askQuestionDiv">
                <button style={{display: "flex",alignItems: "center"}}>
                    <LeftArrowIcon />

                    <span>ثبت پاسخ جدید</span>
                </button>
            </div>
        </Wrapper>
    );
}

export default QuestionItem;
{/* <div className="iconDiv">
    <QuestionMarkIcon />

    <span className="">پاسخ</span>
</div>

<div className="questionDiv">
    <span className="questionSpan">
        {item.question}
    </span>
    {
        item.answers.map((item) => {
            return (
                <div style={{textAlign: "right"}}>
                    {item.answer}
                </div>
            );
        })
    }
</div> */}