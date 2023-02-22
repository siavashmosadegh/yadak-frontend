import React from 'react';
import { Wrapper } from './styles';

const AnswerItem = (props) => {

    const {
        answer
    } = props;

    return (
        <Wrapper>
            <div className="pasokh">
                <span>پاسخ</span>
            </div>
            <div className="answerDiv">
                <span>{answer}</span>
            </div>
        </Wrapper>
    );
}

export default AnswerItem;