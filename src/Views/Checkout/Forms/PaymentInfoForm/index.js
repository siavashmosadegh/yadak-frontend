import React from 'react';
import {
    FormContainer,
    Form,
    PaymentMethodContentWrapper,
    CreditCardIconContainer
} from './styles';
import {
    Formik,
    Field
} from 'formik';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import FormHandlers from '../../../../Util/FormHandlers';
import CreditCardIcon from '../../../../Icons/Checkout/CreditCardIcon';
import CashOnDeliveryIcon from '../../../../Icons/Slogan/CashOnDeliveryIcon';

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

                    <CashOnDeliveryIcon />

                    <p>پرداخت در محل</p>
                </CustomContainer>
            </PaymentMethodContentWrapper>
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
                validationSchema=""
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        {paymentMethodContent(formik)}
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default PaymentInfoForm;