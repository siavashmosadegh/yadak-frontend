import React from 'react';
import HeaderComponent from '../HeaderComponent';
import {
    ContentWrapper,
    EmptyWrapper,
    Wrapper
} from './styles';
import AskQuestionForm from '../Product/Forms/AskQuestionForm/index';
import QuestionItem from './QuestionItem';
import { useDispatch } from 'react-redux';
import ProductActions from '../../Redux/Product/Actions';
import CustomButton from '../../UI-Kit/CustomButton';

const Questions = (props) => {

    const dispatch = useDispatch();

    const {
        questions
    } = props;

    const showAskQuestionModal = () => {
        dispatch(ProductActions.showAskQuestionModalHandler({}));
    }

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

                    <div className="buttonDiv">
                        <CustomButton
                            width="100%"
                            height="50px"
                            title="ثبت پرسش"
                            backgroundColor="white"
                            borderRadius="10px"
                            border="1px solid red"
                            color="red"
                            fontSize="15px"
                            fontWeight="bold"
                            onClick={showAskQuestionModal}
                        />
                    </div>
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