import { Formik } from 'formik';
import React from 'react';
import {
    Form,
    FormContainer
} from './styles';
import FormHandlers from '../../../../Util/FormHandlers';
import { NewsletterFormSchema } from '../../../../Validation/Product/Schema';
import CustomButton from '../../../../UI-Kit/CustomButton';

const NewsletterForm = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    email: ""
                }}
                validationSchema={NewsletterFormSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                        // errorss={formik.errors.email}
                    >
                        <div className="inputDiv">                            
                            <input
                                name="email"
                                value={formik.values.email}
                                onChange={(e) => FormHandlers.onChange(e,formik)}
                                placeholder="ایمیل شما"
                            />

                            <div className="errorDiv">
                                {
                                    formik.errors.email && formik.touched.email === true
                                        ?
                                        formik.errors.email
                                        :
                                        null
                                }
                            </div>
                        </div>

                        <CustomButton
                            width="60px"
                            height="50px"
                            title="ثبت"
                            backgroundColor="red"
                            borderRadius="10px"
                            border="none"
                            color="white"
                            fontSize="17px"
                            fontWeight="bold"
                        />
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default NewsletterForm;