import React from 'react';
import {
    FormContainer,
    Form
} from './styles';
import { Formik } from 'formik';
import FormHandlers from '../../../../Util/FormHandlers';
import CustomButton from '../../../../UI-Kit/CustomButton/index';
import { ProfileSubmitOpinionFormSchema } from '../../../../Validation/Profile/Schema';

const ProfileSubmitOpinionForm = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    opinionTitle: "", // عنوان نظر
                    opinionText: "" // متن نظر
                }}
                validationSchema={ProfileSubmitOpinionFormSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        <p>عنوان نظر</p>

                        <input
                            name="opinionTitle"
                            value={formik.values.opinionTitle}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.opinionTitle && formik.touched.opinionTitle === true
                                ?
                                <p className='opinionTitleError'>
                                    {
                                        formik.errors.opinionTitle
                                    }
                                </p>
                                :
                                null
                        }

                        <p>متن نظر</p>

                        <textarea
                            name="opinionText"
                            value={formik.values.opinionText}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                            style={{width: "calc(100% - 6px)",height: "50px"}}
                        />

                        {
                            formik.errors.opinionText && formik.touched.opinionText === true
                                ?
                                <p className="opinionTextError">
                                    {
                                        formik.errors.opinionText
                                    }
                                </p>
                                :
                                null
                        }

                        <CustomButton
                            width="100%"
                            height="50px"
                            title="ثبت دیدگاه"
                            backgroundColor="red"
                            borderRadius="10px"
                            border="none"
                            color="white"
                            fontSize="15px"
                            fontWeight="bold"
                        />
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default ProfileSubmitOpinionForm;