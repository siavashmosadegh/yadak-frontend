import React from 'react';
import {
    FormContainer,
    Form
} from './styles';
import { Formik, Field } from 'formik';
import FormHandlers from '../../../../Util/FormHandlers';
import CustomButton from '../../../../UI-Kit/CustomButton/index';
import { ProfileSubmitOpinionFormSchema } from '../../../../Validation/Profile/Schema';
import {
    DislikeCustomContainer,
    DislikeIconContainer,
    LikeCustomContainer,
    LikeIconContainer,
    QuestionCustomContainer,
    QuestionIconContainer,
    RatingWrapper,
    SuggestionWrapper
} from './styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import DislikeIcon from '../../../../Icons/Profile/DislikeIcon';
import QuestionIcon from '../../../../Icons/Profile/QuestionIcon';
import LikeIcon from '../../../../Icons/Profile/LikeIcon';
import { Rating } from '@mui/material';

const ProfileSubmitOpinionForm = () => {

    const ratingContent = (formik) => {
        return (
            <RatingWrapper
                flexDirection="column"
            >
                <h2>امتیاز دهید</h2>

                <Rating
                    name="ratingValue"
                    size="large"
                    value={formik.values.ratingValue}
                    onChange={(e) => FormHandlers.onChange(e,formik)}
                />
            </RatingWrapper>
        );
    }

    const suggestionContent = (formik) => {
        return (
            <SuggestionWrapper>
                    <p>خرید این محصول را به دیگران</p>

                    <CustomContainer
                        disableMediaQuery={true}
                        justifyContent="space-evenly"
                    >
                        <DislikeCustomContainer
                            disableMediaQuery={true}
                            flexDirection="column"
                            activeIcon={formik.values.activeIcon}
                        >
                            <DislikeIconContainer
                                activeIcon={formik.values.activeIcon}
                            >
                                <DislikeIcon />
                            </DislikeIconContainer>

                            <p>پیشنهاد نمیکنم</p>

                            <Field className="styledField" type="radio" name="activeIcon" value="dislike" onChange={(e) => FormHandlers.onChange(e,formik)} />
                        </DislikeCustomContainer>

                        <QuestionCustomContainer
                            disableMediaQuery={true}
                            flexDirection="column"
                            activeIcon={formik.values.activeIcon}
                        >
                            <QuestionIconContainer
                                activeIcon={formik.values.activeIcon}
                            >
                                <QuestionIcon />
                            </QuestionIconContainer>

                            <p>مطمعن نیستم</p>

                            <Field className="styledField" type="radio" name="activeIcon" value="question" onChange={(e) => FormHandlers.onChange(e,formik)} />
                        </QuestionCustomContainer>

                        <LikeCustomContainer
                            disableMediaQuery={true}
                            flexDirection="column"
                            activeIcon={formik.values.activeIcon}
                        >
                            <LikeIconContainer
                                activeIcon={formik.values.activeIcon}
                            >
                                <LikeIcon />
                            </LikeIconContainer>

                        <p>پیشنهاد میکنم</p>

                        <Field className="styledField" type="radio" name="activeIcon" value="like" onChange={(e) => FormHandlers.onChange(e,formik)} />
                    </LikeCustomContainer>
                </CustomContainer>
            </SuggestionWrapper>
        );
    }

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    activeIcon: "", // پیشنهاد میکنم-نمیکنم
                    ratingValue: "", // امتیاز
                    opinionTitle: "", // عنوان نظر
                    opinionText: "" // متن نظر
                }}
                validationSchema={ProfileSubmitOpinionFormSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        {ratingContent(formik)}

                        {
                            formik.errors.ratingValue && formik.touched.ratingValue === true
                                ?
                                <p className="ratingValueError">
                                    {
                                        formik.errors.ratingValue
                                    }
                                </p>
                                :
                                null
                        }

                        {suggestionContent(formik)}

                        {
                            formik.errors.activeIcon && formik.touched.activeIcon === true
                                ?
                                <p className='activeIconError'>
                                    {
                                        formik.errors.activeIcon
                                    }
                                </p>
                                :
                                null
                        }

                        <p>عنوان نظر</p>

                        <input
                            name="opinionTitle"
                            value={formik.values.opinionTitle}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        {
                            formik.errors.opinionTitle && formik.touched.opinionTitle === true
                                ?
                                <p className='opinionTitleError'>
                                    {
                                        formik.errors.opinionTitle
                                    }
                                </p>
                                :
                                null
                        }

                        <p>متن نظر</p>

                        <textarea
                            name="opinionText"
                            value={formik.values.opinionText}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                            style={{width: "calc(100% - 6px)",height: "50px"}}
                        />

                        {
                            formik.errors.opinionText && formik.touched.opinionText === true
                                ?
                                <p className="opinionTextError">
                                    {
                                        formik.errors.opinionText
                                    }
                                </p>
                                :
                                null
                        }

                        <CustomButton
                            width="100%"
                            height="50px"
                            title="ثبت دیدگاه"
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

export default ProfileSubmitOpinionForm;