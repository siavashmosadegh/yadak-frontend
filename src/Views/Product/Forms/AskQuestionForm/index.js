import { Formik } from 'formik';
import React from 'react';
import { Form, FormContainer } from './styles';
import FormHandlers from '../../../../Util/FormHandlers';

const AskQuestionForm = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    questionBox: ""
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
                        <textarea 
                            name="questionBox"
                            value={formik.values.questionBox}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        <button
                            type="submit"
                        >
                            ثبت پرسش
                        </button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default AskQuestionForm;