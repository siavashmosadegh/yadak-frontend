import React, {useState} from 'react';
import {
    Wrapper,
    StatusContainer,
    ThreeDotsVerticalIconContainer,
    Line,
    LikeIconContainer,
    QuestionIconContainer,
    DislikeIconContainer,
    LikeCustomContainer,
    QuestionCustomContainer,
    DislikeCustomContainer,
    NumberDiv,
    TrashIconContainer,
    EditIconContainer,
    EditAndTrashDiv
} from './styles';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import ThreeDotsVerticalIcon from '../../../../../Icons/Profile/ThreeDotsVerticalIcon';
import LikeIcon from '../../../../../Icons/Profile/LikeIcon';
import QuestionIcon from '../../../../../Icons/Profile/QuestionIcon';
import DislikeIcon from '../../../../../Icons/Profile/DislikeIcon';
import TrashIcon from '../../../../../Icons/Checkout/TrashIcon';
import EditIcon from '../../../../../Icons/Profile/EditIcon';

const RegisteredOpinionItem = (props) => {

    const {
        item
    } = props;

    const {
        id,
        product,
        opinionTitle,
        image,
        opinionText,
        score,
        status,
        suggestion
    } = item;

    const [showEditAndTrash, setShowEditAndTrash] = useState(false);

    const showEditAndTrashHandler = () => {
        setShowEditAndTrash(true);
    }

    const closeEditAndTrashHandler = () => {
        setShowEditAndTrash(false);
    }

    const suggestionContent = (suggestion) => {
        switch(suggestion) {
            case 'like':
                return (
                    <LikeCustomContainer
                        justifyContent="flex-start"
                        disableMediaQuery={true}
                    >
                        <LikeIconContainer>
                            <LikeIcon />
                        </LikeIconContainer>

                        <p>خرید این محصول را توصیه میکنم</p>
                    </LikeCustomContainer>
                );
                break;
            case 'question':
                return (
                    <QuestionCustomContainer
                        justifyContent="flex-start"
                        disableMediaQuery={true}
                    >
                        <QuestionIconContainer>
                            <QuestionIcon />
                        </QuestionIconContainer>

                        <p>درباره ی خرید این کالا مطمعن نیستم</p>
                    </QuestionCustomContainer>
                );
                break;
            case 'dislike':
                return (
                    <DislikeCustomContainer
                        justifyContent="flex-start"
                        disableMediaQuery={true}
                    >
                        <DislikeIconContainer>
                            <DislikeIcon />
                        </DislikeIconContainer>

                        <p>خرید این محصول را توصیه نمیکنم</p>
                    </DislikeCustomContainer>
                );
                break;
            default:
              // code block
          }
    }

    return (
        <Wrapper>
            <CustomContainer
                className="imageDiv"
                disableMediaQuery={true}
                flexDirection="column"
            >
                <img src={image} alt="aks" />
            </CustomContainer>

            <div className="otherDiv">
                <CustomContainer
                    disableMediaQuery={true}
                >
                    <p className='opinionTitleParagraph'>
                        {opinionTitle}
                    </p>

                    <CustomContainer
                        disableMediaQuery={true}
                        justifyContent="center"
                        className="firstRow"
                    >
                        <StatusContainer
                            status={status}
                        >
                            {status}
                        </StatusContainer>

                        {
                            showEditAndTrash
                                ?
                                <EditAndTrashDiv>
                                    <CustomContainer
                                        disableMediaQuery={true}
                                        justifyContent="flex-start"
                                    >
                                        <EditIconContainer>
                                            <EditIcon />
                                        </EditIconContainer>
        
                                        <p>ویرایش دیدگاه</p>
                                    </CustomContainer>
                                    <CustomContainer
                                        disableMediaQuery={true}
                                        justifyContent="flex-start"
                                    >
                                        <TrashIconContainer>
                                            <TrashIcon />
                                        </TrashIconContainer>
        
                                        <p>حذف دیدگاه</p>
                                    </CustomContainer>
                                </EditAndTrashDiv>
                                :
                                null
                        }

                        <ThreeDotsVerticalIconContainer
                            onMouseMove={showEditAndTrashHandler}
                            onMouseLeave={closeEditAndTrashHandler}
                        >
                            <ThreeDotsVerticalIcon />
                        </ThreeDotsVerticalIconContainer>
                    </CustomContainer>
                </CustomContainer>

                <Line />

                {suggestionContent(suggestion)}

                <p className='opinionTextParagraph'>{opinionText}</p>

                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="flex-start"
                >
                    <NumberDiv
                        disableMediaQuery={true}
                        justifyContent="center"
                    >
                        {score}
                    </NumberDiv>
                </CustomContainer>
            </div>
        </Wrapper>
    );
}

export default RegisteredOpinionItem;