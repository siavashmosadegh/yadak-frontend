import React from 'react';
import { Wrapper } from './styles';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import CustomButton from '../../../../../UI-Kit/CustomButton';
import { useDispatch } from 'react-redux';
import OrdersActions from '../../../../../Redux/Orders/Actions';

const PendingOptionItem = (props) => {

    const dispatch = useDispatch();

    const {
        item
    } = props;

    const {
        title,
        imgSrc
    } = item;

    return (
        <Wrapper>
            <CustomContainer
                disableMediaQuery={true}
                justifyContent="flex-start"
            >
                <div className='imgDiv'>
                    <img alt='asdfas' src={imgSrc} />
                </div>

                <div className='titleDiv'>
                    <p>{title}</p>
                </div>
            </CustomContainer>

            <div className='buttonContainer'>
                <CustomButton
                    width="100%"
                    height="40px"
                    title="ثبت دیدگاه و امتیاز"
                    backgroundColor="white"
                    borderRadius="10px"
                    border="1px solid red"
                    color="red"
                    fontSize="15px"
                    fontWeight="bold"
                    onClick={() => dispatch(OrdersActions.showSubmitOpinionModalHandler({}))}
                />
            </div>
        </Wrapper>
    );
}

export default PendingOptionItem;