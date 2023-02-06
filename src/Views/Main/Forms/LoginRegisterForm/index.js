import React from 'react';
import {
    FormContainer,
    Form
} from './styles';
import { Formik } from 'formik';
import FormHandlers from '../../../../Util/FormHandlers';
import { RegisterLoginSchema } from '../../../../Validation/General/Schema';
import {useNavigate} from 'react-router-dom';

const LoginRegisterForm = () => {

    const navigate = useNavigate();

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    mobile: ""
                }}
                validationSchema={RegisterLoginSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                    navigate(localStorage.getItem("backURL"));
                }}
            >
                {(formik) => (
                    <Form 
                        onSubmit={formik.handleSubmit}
                        errorss={formik.errors.mobile && formik.touched.mobile}
                    >
                        <input
                            name="mobile"
                            value={formik.values.mobile}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        <div className="errorDiv">
                            {formik.errors.mobile && formik.touched.mobile
                                ?
                                formik.errors.mobile
                                :
                                null
                            }
                        </div>

                        <button type="submit">ورود</button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default LoginRegisterForm;