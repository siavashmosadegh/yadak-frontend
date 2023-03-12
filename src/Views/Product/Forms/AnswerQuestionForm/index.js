import { Formik } from 'formik';
import React from 'react';
import { Form, FormContainer } from './styles';
import FormHandlers from '../../../../Util/FormHandlers';
import CustomButton from '../../../../UI-Kit/CustomButton';

const AnswerQuestionForm = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    answer: null
                }}
                validationSchema=""
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="textareaDiv">
                            <textarea 
                                name="answer"
                                value={formik.values.answer}
                                onChange={(e) => FormHandlers.onChange(e,formik)}
                            />
                        </div>

                        <CustomButton
                            width="120px"
                            height="40px"
                            title="ثبت پاسخ"
                            backgroundColor="red"
                            borderRadius="10px"
                            border="none"
                            color="white"
                            fontSize="18px"
                            fontWeight="bold"
                        />
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default AnswerQuestionForm;