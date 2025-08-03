import { useDispatch } from "react-redux";
import { Formik } from "formik";
import FormHandlers from "../../../../Util/FormHandlers";
import { updateProfilePersonalInfoNationalCode } from "../../../../Redux/User/Actions";
import { Form,FormContainer } from "./styles";
import CustomButton from "../../../../UI-Kit/CustomButton";
import { SubmitNationalCodeFormSchema } from "../../../../Validation/Profile/Schema";

const SubmitNationalCodeForm = () => {

    const dispatch = useDispatch();

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    nationalCode: ""
                }}
                validationSchema={SubmitNationalCodeFormSchema}
                onSubmit={(values, action) => {
                    dispatch(updateProfilePersonalInfoNationalCode( values ));
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        <p>کد ملی</p>

                        <input
                            name="nationalCode"
                            value={formik.values.nationalCode}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.nationalCode && formik.touched.nationalCode === true
                                ?
                                <p className='nationalCodeError'>
                                    {
                                        formik.errors.nationalCode
                                    }
                                </p>
                                :
                                null
                        }

                        {/* <p style={{marginTop: "30px"}}>نام خانوادگی</p>

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
                        } */}

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

export default SubmitNationalCodeForm;