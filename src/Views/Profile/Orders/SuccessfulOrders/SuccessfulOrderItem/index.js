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
import ReceiptIcon from '../../../../../Icons/Profile/ReceiptIcon';
import ConvertGregorianToPersian from '../../../../../Util/ConvertGregorianToPersian';
import PriceComponent from '../../../../PriceComponent';

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

    const orderRegisterDateContent = () => {
        return ConvertGregorianToPersian.parseToJDate(orderRegisterDate);
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
                    {orderRegisterDateContent()}
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

                    <span>
                        <PriceComponent
                            price={price}
                            tomanColor="black"
                            tomanFontSize="14px"
                            priceColor="black"
                            priceFontSize="14px"
                        />
                    </span>
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

                                <span>
                                    <PriceComponent
                                        price={discount}
                                        tomanColor="black"
                                        tomanFontSize="14px"
                                        priceColor="black"
                                        priceFontSize="14px"
                                    />
                                </span>
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