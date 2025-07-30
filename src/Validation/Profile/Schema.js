import * as Yup from 'yup';

export const ProfileSubmitOpinionFormSchema = Yup.object().shape({
    opinionTitle: Yup.string()
        .min(3,'حداقل باید ۳ کاراکتر وارد کنید')
        .required('وارد کردن این فیلد الزامی است'),
    opinionText: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    activeIcon: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    ratingValue: Yup.number()
        .required('وارد کردن این فیلد الزامی است'),
});

export const SubmitFirstnameAndLastnameFormSchema = Yup.object().shape({
    firstname: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    lastname: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
});