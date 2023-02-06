import * as Yup from 'yup';
const mobileRegex = /^(\+98|0)9\d{9}$/;

export const RegisterLoginSchema = Yup.object().shape({
    mobile: Yup.string()
        .matches(mobileRegex,'شماره وارد شده نادرست میباشد')
        .required('وارد کردن این فیلد الزامی است')
});