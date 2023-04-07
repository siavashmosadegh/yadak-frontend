import React from 'react';
import {
    Wrapper,
    CheckedIconContainer,
    LeftArrowIconContainer,
    FirstRowCustomContainer,
    SecondRowCustomContainer
} from './styles';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import CheckedIcon from '../../../../../Icons/Profile/CheckedIcon';
import LeftArrowIcon from '../../../../../Icons/Profile/LeftArrowIcon';

const SuccessfulOrderItem = (props) => {

    const {
        item
    } = props;

    const {
        id,
        title,
        productId,
        tracingNumber,
        orderRegisterDate,
        receiverName,
        receiverMobile,
        address,
        price,
        profit,
        paymentMethod,
        transferPrice,
        discount
    } = item;

    return (
        <Wrapper>
            <FirstRowCustomContainer
                disableMediaQuery={true}
            >
                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="center"
                >
                    <CheckedIconContainer>
                        <CheckedIcon />
                    </CheckedIconContainer>

                    <p className="deliveredParagraph">تحویل شده</p>
                </CustomContainer>

                <LeftArrowIconContainer>
                    <LeftArrowIcon />
                </LeftArrowIconContainer>
            </FirstRowCustomContainer>

            <SecondRowCustomContainer
                disableMediaQuery={true}
                justifyContent="flex-start"
            >
                <span>
                    {orderRegisterDate}
                </span>

                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="center"
                >
                    <p>کد سفارش</p>

                    <span>{tracingNumber}</span>
                </CustomContainer>

                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="center"
                >
                    <p>مبلغ</p>

                    <span>{price}</span>
                </CustomContainer>


                {
                    discount !== null
                        ?
                        <CustomContainer
                            disableMediaQuery={true}
                            justifyContent="center"
                        >
                            <p>تخفیف</p>

                            <span>{discount}</span>
                        </CustomContainer>
                        :
                        null
                }
            </SecondRowCustomContainer>
        </Wrapper>
    );
}

export default SuccessfulOrderItem;