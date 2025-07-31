import React from 'react';
import {
    Form,
    FormContainer
} from './styles';
import { Formik } from 'formik';
import FormHandlers from '../../../../Util/FormHandlers';
import CustomButton from '../../../../UI-Kit/CustomButton';
import { SubmitFirstnameAndLastnameFormSchema } from '../../../../Validation/Profile/Schema';
import { useDispatch } from 'react-redux';
import { updateProfilePersonalInfoNames } from '../../../../Redux/User/Actions';


const SubmitFirstnameAndLastnameForm = () => {

    const dispatch = useDispatch();

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: ""
                }}
                validationSchema={SubmitFirstnameAndLastnameFormSchema}
                onSubmit={(values, action) => {
                    dispatch(updateProfilePersonalInfoNames( values ));
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        <p>نام</p>

                        <input
                            name="firstname"
                            value={formik.values.firstname}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.firstname && formik.touched.firstname === true
                                ?
                                <p className='firstnameError'>
                                    {
                                        formik.errors.firstname
                                    }
                                </p>
                                :
                                null
                        }

                        <p style={{marginTop: "30px"}}>نام خانوادگی</p>

                        <input
                            name="lastname"
                            value={formik.values.lastname}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.lastname && formik.touched.lastname === true
                                ?
                                <p className='lastnameError'>
                                    {
                                        formik.errors.lastname
                                    }
                                </p>
                                :
                                null
                        }

                        <CustomButton
                            width="100%"
                            height="30px"
                            title="ارسال"
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

export default SubmitFirstnameAndLastnameForm;