import React from 'react';
import {
    FormContainer,
    Form
} from './styles';
import { Formik } from 'formik';
import FormHandlers from '../../../../Util/FormHandlers';

const ProfileSubmitOpinionForm = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    opinionTitle: "", // عنوان نظر
                    opinionText: "" // متن نظر
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
                        <p>عنوان نظر</p>

                        <input
                            name="opinionTitle"
                            value={formik.values.opinionTitle}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        <p>متن نظر</p>

                        <textarea
                            name="opinionText"
                            value={formik.values.opinionText}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                            style={{width: "calc(100% - 6px)",height: "50px"}}
                        />
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default ProfileSubmitOpinionForm;