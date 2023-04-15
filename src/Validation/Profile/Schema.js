import * as Yup from 'yup';

export const ProfileSubmitOpinionFormSchema = Yup.object().shape({
    opinionTitle: Yup.string()
        .min(3,'حداقل باید ۳ کاراکتر وارد کنید')
        .required('وارد کردن این فیلد الزامی است'),
    opinionText: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
});