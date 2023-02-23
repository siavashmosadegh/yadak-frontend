import { Formik } from 'formik';
import React from 'react';
import { Form, FormContainer } from './styles';
import FormHandlers from '../../../../Util/FormHandlers';

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

                        <button
                            type="submit"
                        >
                            ثبت پاسخ
                        </button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default AnswerQuestionForm;