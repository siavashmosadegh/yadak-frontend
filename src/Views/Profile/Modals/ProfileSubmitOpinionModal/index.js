import React, {useState} from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal';
import {
    Wrapper,
    DislikeIconContainer,
    LikeIconContainer,
    QuestionIconContainer,
    RatingWrapper,
    SuggestionWrapper,
    DislikeCustomContainer,
    QuestionCustomContainer,
    LikeCustomContainer
} from './styles';
import { useDispatch } from 'react-redux';
import OrdersActions from '../../../../Redux/Orders/Actions';
import { Rating } from '@mui/material';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import DislikeIcon from '../../../../Icons/Profile/DislikeIcon';
import QuestionIcon from '../../../../Icons/Profile/QuestionIcon';
import LikeIcon from '../../../../Icons/Profile/LikeIcon';
import ProfileSubmitOpinionForm from '../../Forms/ProfileSubmitOpinionForm';

const ProfileSubmitOpinionModal = () => {

    const dispatch = useDispatch();

    // const [ratingValue, setRatingValue] = useState(null);

    // const [activeIcon , setActiveIcon] = useState(null);

    // console.log(ratingValue);

    // const ratingContent = () => {
    //     return (
    //         <RatingWrapper
    //             flexDirection="column"
    //         >
    //             <h2>امتیاز دهید</h2>

    //             <Rating
    //                 name="simple-controlled"
    //                 size="large"
    //                 value={ratingValue}
    //                 onChange={(event, newValue) => {
    //                     setRatingValue(newValue);
    //                 }}
    //             />
    //         </RatingWrapper>
    //     );
    // }

    // const suggestionContent = () => {
    //     return (
    //         <SuggestionWrapper>
    //             <p>خرید این محصول را به دیگران</p>

    //             <CustomContainer
    //                 disableMediaQuery={true}
    //                 justifyContent="space-evenly"
    //             >
    //                 <DislikeCustomContainer
    //                     disableMediaQuery={true}
    //                     flexDirection="column"
    //                     onClick={() => setActiveIcon('dislike')}
    //                     activeIcon={activeIcon}
    //                 >
    //                     <DislikeIconContainer
    //                         activeIcon={activeIcon}
    //                     >
    //                         <DislikeIcon />
    //                     </DislikeIconContainer>

    //                     <p>پیشنهاد نمیکنم</p>
    //                 </DislikeCustomContainer>

    //                 <QuestionCustomContainer
    //                     disableMediaQuery={true}
    //                     flexDirection="column"
    //                     onClick={() => setActiveIcon('question')}
    //                     activeIcon={activeIcon}
    //                 >
    //                     <QuestionIconContainer
    //                         activeIcon={activeIcon}
    //                     >
    //                         <QuestionIcon />
    //                     </QuestionIconContainer>

    //                     <p>مطمعن نیستم</p>
    //                 </QuestionCustomContainer>

    //                 <LikeCustomContainer
    //                     disableMediaQuery={true}
    //                     flexDirection="column"
    //                     onClick={() => setActiveIcon('like')}
    //                     activeIcon={activeIcon}
    //                 >
    //                     <LikeIconContainer
    //                         activeIcon={activeIcon}
    //                     >
    //                         <LikeIcon />
    //                     </LikeIconContainer>

    //                     <p>پیشنهاد میکنم</p>
    //                 </LikeCustomContainer>
    //             </CustomContainer>
    //         </SuggestionWrapper>
    //     );
    // }

    return (
        <CustomModal
            width="600px"
            height="600px"
            closeCustomModalHandler={() => dispatch(OrdersActions.closeSubmitOpinionModalHandler({}))}
            headerTitle="دیدگاه شما"
            modalBackgroundColor="#FFFFFF"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper
                flexDirection="column"
            >
                {/* {ratingContent()}

                {suggestionContent()} */}

                <ProfileSubmitOpinionForm
                    // activeIcon={activeIcon}
                    // ratingValue={ratingValue}
                />
            </Wrapper>
        </CustomModal>
    );
}

export default ProfileSubmitOpinionModal;