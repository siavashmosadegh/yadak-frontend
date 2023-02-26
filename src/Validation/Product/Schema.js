import * as Yup from 'yup';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const NewsletterFormSchema = Yup.object().shape({
    email: Yup.string()
        .matches(emailRegex,'ایمیل وارد شده درست نیست')
        .required('وارد کردن این فیلد الزامی است')
});