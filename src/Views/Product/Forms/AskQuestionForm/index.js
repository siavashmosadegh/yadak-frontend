import { Formik } from 'formik';
import React from 'react';
import { Form, FormContainer } from './styles';
import FormHandlers from '../../../../Util/FormHandlers';
import CustomButton from '../../../../UI-Kit/CustomButton';

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
                        <div className="textareaDiv">
                            <textarea 
                                name="questionBox"
                                value={formik.values.questionBox}
                                onChange={(e) => FormHandlers.onChange(e,formik)}
                            />
                        </div>
                        <CustomButton
                            width="120px"
                            height="40px"
                            title="ثبت پرسش"
                            backgroundColor="red"
                            borderRadius="10px"
                            border="none"
                            color="white"
                            fontSize="18px"
                            fontWeight="bold"
                            type="submit"
                        />
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default AskQuestionForm;