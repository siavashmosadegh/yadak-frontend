import { useDispatch } from "react-redux";
import { Formik } from "formik";
import FormHandlers from "../../../../Util/FormHandlers";
import { Form,FormContainer } from "./styles";
import CustomButton from "../../../../UI-Kit/CustomButton";

const AddAddressModalForm = () => {

    const dispatch = useDispatch();

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    postalAddress: "",
                    addressHouseNumber: "",
                    addressUnitNumber: "",
                    zipCode: ""
                }}
                //validationSchema={SubmitFirstnameAndLastnameFormSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                    //dispatch(updateProfilePersonalInfoNationalCode( values ));
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        <p>آدرس پستی</p>

                        <input
                            name="postalAddress"
                            value={formik.values.postalAddress}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.postalAddress && formik.touched.postalAddress === true
                                ?
                                <p className='postalAddressError'>
                                    {
                                        formik.errors.postalAddress
                                    }
                                </p>
                                :
                                null
                        }

                        <p style={{marginTop: "30px"}}>پلاک</p>

                        <input
                            name="addressHouseNumber"
                            value={formik.values.addressHouseNumber}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.addressHouseNumber && formik.touched.addressHouseNumber === true
                                ?
                                <p className='addressHouseNumberError'>
                                    {
                                        formik.errors.addressHouseNumber
                                    }
                                </p>
                                :
                                null
                        }

                        <p style={{marginTop: "30px"}}>واحد</p>

                        <input
                            name="addressUnitNumber"
                            value={formik.values.addressUnitNumber}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.addressUnitNumber && formik.touched.addressUnitNumber === true
                                ?
                                <p className='addressHouseNumberError'>
                                    {
                                        formik.errors.addressUnitNumber
                                    }
                                </p>
                                :
                                null
                        }

                        <p style={{marginTop: "30px"}}>کد پستی</p>

                        <input
                            name="zipCode"
                            value={formik.values.zipCode}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.zipCode && formik.touched.zipCode === true
                                ?
                                <p className='addressHouseNumberError'>
                                    {
                                        formik.errors.zipCode
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

export default AddAddressModalForm;