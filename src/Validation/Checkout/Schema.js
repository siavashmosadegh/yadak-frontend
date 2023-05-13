import * as Yup from 'yup';

export const CheckoutPaymentInfoFormSchema = Yup.object().shape({
    paymentMethod: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
});