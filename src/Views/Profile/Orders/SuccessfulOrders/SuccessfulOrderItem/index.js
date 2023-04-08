import React from 'react';
import {
    Wrapper,
    CheckedIconContainer,
    LeftArrowIconContainer,
    FirstRowCustomContainer,
    SecondRowCustomContainer,
    SingleItem,
    ReceiptCustomContainer,
    ReceiptIconContainer
} from './styles';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import CheckedIcon from '../../../../../Icons/Profile/CheckedIcon';
import LeftArrowIcon from '../../../../../Icons/Profile/LeftArrowIcon';
import DotIcon from '../../../../../Icons/ProductIcons/DotIcon';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ReceiptIcon from '../../../../../Icons/Profile/ReceiptIcon';

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

    const dateContent = () => {
        let dateformat = new DateObject({
            date: orderRegisterDate,
            calendar: persian,
            locale: persian_fa,
        });
        return dateformat.format();
    }

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
                justifyContent="flex-start"
                responsiveMaxWidth="1000px"
                responsiveAlignItems="flex-end"
                alignItems="center"
            >
                <span className="orderRegistryDateSpan">
                    {dateContent()}
                </span>

                <DotIcon />

                <SingleItem
                    disableMediaQuery={true}
                    justifyContent="center"
                >
                    <p>کد سفارش</p>

                    <span>{tracingNumber}</span>
                </SingleItem>

                <DotIcon />

                <SingleItem
                    disableMediaQuery={true}
                    justifyContent="center"
                >
                    <p>مبلغ</p>

                    <span>{price}</span>
                </SingleItem>

                {
                    discount !== null
                        ?
                        <>
                            <DotIcon />

                            <SingleItem
                                disableMediaQuery={true}
                                justifyContent="center"
                            >
                                <p>تخفیف</p>

                                <span>{discount}</span>
                            </SingleItem>
                        </>
                        :
                        null
                }
            </SecondRowCustomContainer>

            <ReceiptCustomContainer
                disableMediaQuery={true}
                justifyContent="flex-end"
            >
                <ReceiptIconContainer>
                    <ReceiptIcon />
                </ReceiptIconContainer>

                <p>مشاهده ی فاکتور</p>
            </ReceiptCustomContainer>
        </Wrapper>
    );
}

export default SuccessfulOrderItem;