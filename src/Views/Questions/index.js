import React from 'react';
import HeaderComponent from '../HeaderComponent';
import {
    ContentWrapper,
    EmptyWrapper,
    Wrapper
} from './styles';
import AskQuestionForm from '../Product/Forms/AskQuestionForm/index';
import QuestionItem from './QuestionItem';

const Questions = (props) => {

    const {
        questions
    } = props;

    const emptyContent = () => {
        return (
            <EmptyWrapper>
                <h2>درباره این کالا چه پرسشی دارید ؟</h2>

                <AskQuestionForm />
            </EmptyWrapper>
        );
    }

    const content = () => {
        return (
            <ContentWrapper>
                <div className="askQuestionDiv">
                    <p>شما هم پرسش ثبت کنید</p>

                    <button>ثبت پرسش</button>                    
                </div>

                <div className="questions">
                    {
                        questions.map( (item) => {
                            return (
                                <QuestionItem 
                                    item={item}
                                />
                            );
                        })
                    }
                </div>
            </ContentWrapper>
        );
    }

    return (
        <Wrapper>
            <HeaderComponent 
                title="پرسش ها"
                font={20}
            />
            {
                (questions === null || questions.length === 0)
                    ?
                    emptyContent()
                    :
                    content()
            }
        </Wrapper>
    );
}

export default Questions;