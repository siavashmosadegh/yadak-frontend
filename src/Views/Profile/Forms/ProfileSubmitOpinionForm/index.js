import React, {useState} from 'react';
import {
    FormContainer,
    Form
} from './styles';
import { Formik } from 'formik';
import FormHandlers from '../../../../Util/FormHandlers';
import CustomButton from '../../../../UI-Kit/CustomButton/index';
import { ProfileSubmitOpinionFormSchema } from '../../../../Validation/Profile/Schema';
import { DislikeCustomContainer, DislikeIconContainer, LikeCustomContainer, LikeIconContainer, QuestionCustomContainer, QuestionIconContainer, RatingWrapper, SuggestionWrapper } from '../../Modals/ProfileSubmitOpinionModal/styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import DislikeIcon from '../../../../Icons/Profile/DislikeIcon';
import QuestionIcon from '../../../../Icons/Profile/QuestionIcon';
import LikeIcon from '../../../../Icons/Profile/LikeIcon';
import { FormControlLabel, RadioGroup, Rating } from '@mui/material';

const ProfileSubmitOpinionForm = (props) => {

    // const {
    //     activeIcon,
    //     ratingValue
    // } = props;

    const [ratingValue, setRatingValue] = useState(null);

    const [activeIcon , setActiveIcon] = useState(null);

    console.log(ratingValue);

    const ratingContent = (formik) => {
        return (
            <RatingWrapper
                flexDirection="column"
            >
                <h2>امتیاز دهید</h2>

                <Rating
                    name="ratingValue"
                    size="large"
                    value={formik.ratingValue}
                    // onChange={(event, newValue) => {
                    //     setRatingValue(newValue);
                    // }}
                    onChange={(e) => FormHandlers.onChange(e,formik)}
                />
            </RatingWrapper>
        );
    }

    const suggestionContent = (formik) => {
        return (
            <SuggestionWrapper>
                <p>خرید این محصول را به دیگران</p>


                <RadioGroup>
                    <CustomContainer
                        disableMediaQuery={true}
                        justifyContent="space-evenly"
                    >
                        <FormControlLabel
                            value={formik.values.activeIcon}
                            control={
                                <DislikeCustomContainer
                                    disableMediaQuery={true}
                                    flexDirection="column"
                                    name="question"
                                    onClick={(e) => FormHandlers.onChange(e,formik)}
                                    // onClick={() => setActiveIcon('dislike')}
                                    // activeIcon={activeIcon}
                                >
                                    <DislikeIconContainer
                                        activeIcon={activeIcon}
                                    >
                                        <DislikeIcon />
                                    </DislikeIconContainer>
        
                                    <p>پیشنهاد نمیکنم</p>
                                </DislikeCustomContainer>        
                            }
                        />

                        <FormControlLabel
                            value={formik.values.activeIcon}
                            control={
                                <QuestionCustomContainer
                                    disableMediaQuery={true}
                                    flexDirection="column"
                                    // onClick={() => setActiveIcon('question')}
                                    name="question"
                                    onClick={(e) => FormHandlers.onChange(e,formik)}
                                    // activeIcon={activeIcon}
                                >
                                    <QuestionIconContainer
                                        activeIcon={activeIcon}
                                    >
                                        <QuestionIcon />
                                    </QuestionIconContainer>
        
                                    <p>مطمعن نیستم</p>
                                </QuestionCustomContainer>        
                            }  
                        />
                        {/* <LikeCustomContainer
                            disableMediaQuery={true}
                            flexDirection="column"
                            onClick={() => setActiveIcon('like')}
                            activeIcon={activeIcon}
                        >
                            <LikeIconContainer
                                activeIcon={activeIcon}
                            >
                                <LikeIcon />
                            </LikeIconContainer>

                            <p>پیشنهاد میکنم</p>
                        </LikeCustomContainer> */}
                    </CustomContainer>
                </RadioGroup>
            </SuggestionWrapper>
        );
    }

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    activeIcon: activeIcon, // پیشنهاد میکنم-نمیکنم
                    ratingValue: ratingValue, // امتیاز
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
                            <p>
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