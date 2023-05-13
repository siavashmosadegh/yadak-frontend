import React from 'react';
import {
    FormContainer,
    Form,
    PaymentMethodContentWrapper,
    CreditCardIconContainer,
    CashOnDeliveryIconContainer,
    AddDiscountCodeContentWrapper
} from './styles';
import {
    Formik,
    Field
} from 'formik';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import FormHandlers from '../../../../Util/FormHandlers';
import CreditCardIcon from '../../../../Icons/Checkout/CreditCardIcon';
import CashOnDeliveryIcon from '../../../../Icons/Slogan/CashOnDeliveryIcon';
import CustomButton from '../../../../UI-Kit/CustomButton';
import { CheckoutPaymentInfoFormSchema } from '../../../../Validation/Checkout/Schema';

const PaymentInfoForm = () => {

    const paymentMethodContent = (formik) => {
        return (
            <PaymentMethodContentWrapper>
                <h3>
                    انتخاب روش پرداخت
                </h3>

                <CustomContainer
                    disableMediaQuery={true}
                    className="styledCustomContainer"
                    justifyContent="flex-start"
                >
                    <Field className="styledField" type="radio" name="paymentMethod" value="onlinepayment" onChange={(e) => FormHandlers.onChange(e,formik)} />

                    <CreditCardIconContainer>
                        <CreditCardIcon />
                    </CreditCardIconContainer>

                    <p>پرداخت اینترنتی</p>
                </CustomContainer>

                <CustomContainer
                    disableMediaQuery={true}
                    className="styledCustomContainer"
                    justifyContent="flex-start"
                >
                    <Field className="styledField" type="radio" name="paymentMethod" value="cashondelivery" onChange={(e) => FormHandlers.onChange(e,formik)} />

                    <CashOnDeliveryIconContainer>
                        <CashOnDeliveryIcon />
                    </CashOnDeliveryIconContainer>

                    <p>پرداخت در محل</p>
                </CustomContainer>

                
                <CustomContainer
                    disableMediaQuery={true}
                    className="styledCustomContainer"
                    justifyContent="flex-start"
                >
                    {
                        formik.errors.paymentMethod && formik.touched.paymentMethod === true
                            ?
                            <p className="paymentMethodError">
                                {
                                    formik.errors.paymentMethod
                                }
                            </p>
                            :
                            null
                    }
                </CustomContainer>
            </PaymentMethodContentWrapper>
        );
    }

    const addDiscountCodeContent = (formik) => {
        return (
            <AddDiscountCodeContentWrapper>
                <h3>کد تخفیف</h3>

                <CustomContainer
                    disableMediaQuery={true}
                    className="styledCustomContainer"
                >
                    <input
                        name="addDiscountCode"
                        value={formik.values.addDiscountCode}
                        onChange={(e) => FormHandlers.onChange(e,formik)}
                    />
                </CustomContainer>

                <CustomContainer
                    disableMediaQuery={true}
                    className="styledCustomContainer"
                >
                    <CustomButton
                        width="60px"
                        height="30px"
                        title="ثبت"
                        backgroundColor="red"
                        borderRadius="5px"
                        border="none"
                        color="white"
                        fontSize="15px"
                        fontWeight="bold"
                    />
                </CustomContainer>
            </AddDiscountCodeContentWrapper>
        );
    }

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    paymentMethod: "", // انتخاب روش پرداخت
                    addDiscountCode: "", // افزودن کد تخفیف
                    addGiftCard: "", // افزودن کارت هدیه
                }}
                validationSchema={CheckoutPaymentInfoFormSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        {paymentMethodContent(formik)}



                        {addDiscountCodeContent(formik)}

                        <button>
                            asdfasdf
                        </button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default PaymentInfoForm;