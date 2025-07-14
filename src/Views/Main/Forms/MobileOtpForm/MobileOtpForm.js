import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import CustomButton from '../../../../UI-Kit/CustomButton';
import FormHandlers from '../../../../Util/FormHandlers';
import {
    FormContainer,
    StyledForm,
    Input,
    ErrorText
} from './styles';
import Actions from '../../../../Redux/Auth/Actions';

const MobileOtpSchema = Yup.object().shape({
    mobile: Yup.string()
        .required("شماره موبایل الزامی است")
        .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
    otp: Yup.string()
        .required("کد تایید الزامی است")
        .matches(/^\d{6}$/, "کد تایید باید ۶ رقم باشد")
});

const MobileOtpForm = () => {
    const dispatch = useDispatch();

    return (
        <FormContainer>
            <Formik
                initialValues={{ mobile: "", otp: "" }}
                validationSchema={MobileOtpSchema}
                onSubmit={(values) => {
                    dispatch(Actions.loginVerifyOtpRequest({ mobile: values.mobile, otp: values.otp }));
                }}
            >
                {(formik) => (
                    <StyledForm onSubmit={formik.handleSubmit}>
                        <Input
                            name="mobile"
                            placeholder="شماره موبایل"
                            value={formik.values.mobile}
                            onChange={(e) => FormHandlers.onChange(e, formik)}
                            hasError={formik.touched.mobile && formik.errors.mobile}
                        />
                        {formik.touched.mobile && formik.errors.mobile && (
                            <ErrorText>{formik.errors.mobile}</ErrorText>
                        )}

                        <Input
                            name="otp"
                            placeholder="کد تایید"
                            value={formik.values.otp}
                            onChange={(e) => FormHandlers.onChange(e, formik)}
                            hasError={formik.touched.otp && formik.errors.otp}
                        />
                        {formik.touched.otp && formik.errors.otp && (
                            <ErrorText>{formik.errors.otp}</ErrorText>
                        )}

                        <CustomButton
                            width="100%"
                            height="40px"
                            title="تایید"
                            backgroundColor="green"
                            borderRadius="10px"
                            border="none"
                            color="white"
                            fontSize="20px"
                            fontWeight="bold"
                        />
                    </StyledForm>
                )}
            </Formik>
        </FormContainer>
    );
};

export default MobileOtpForm;
