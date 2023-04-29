import React, { useState } from 'react';
import {
    Wrapper,
    CircleIconContainer,
    DeliverymanIconContainer,
    InfoCircleIconContainer,
    CopyDocumentIconContainer,
    AddCommentIconContainer
} from './styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import DotIcon from '../../../../Icons/ProductIcons/DotIcon';
import DeliverymanIcon from '../../../../Icons/Profile/DeliverymanIcon';
import InfoCircleIcon from '../../../../Icons/Profile/InfoCircleIcon';
import CopyDocumentIcon from '../../../../Icons/Profile/CopyDocumentIcon';
import CheckoutItem from '../../../Checkout/CheckoutItem';
import AddCommentIcon from '../../../../Icons/Profile/AddCommentIcon';
import PriceComponent from '../../../PriceComponent';

const OrderDetailsProductDescription = () => {

    const [item, setItem] = useState({
        title: "شسیب ضصثق س یب شسی بثق  لیب ل یسبل یسب سشیب سی بس یب سیب",
        price: 123333
    });

    return (
        <Wrapper>
            <CustomContainer
                justifyContent="flex-start"
                className="firstRow"
                disableMediaQuery={true}
            >
                <p className="marsoole">مرسوله ۱ از ۱</p>

                <CircleIconContainer>
                    <DotIcon />
                </CircleIconContainer>

                <DeliverymanIconContainer>
                    <DeliverymanIcon />
                </DeliverymanIconContainer>

                <p className="deliveryType">ارسال به مرکز تحویل دیجی کالا</p>
            </CustomContainer>

            <CustomContainer
                justifyContent="flex-start"
                className="secondRow"
                responsiveAlignItems="flex-end"
            >
                <p className="titleParagraph">زمان تحویل</p>

                <p className="itemParagraph">پنج شنبه</p>
            </CustomContainer>

            <CustomContainer
                className="thirdRow"
                disableMediaQuery={true}
            >
                <CustomContainer
                    justifyContent="flex-start"
                    responsiveAlignItems="flex-end"
                >
                    <CustomContainer
                        disableMediaQuery={true}
                    >
                        <p className="titleParagraph">هزینه ارسال</p>

                        <p className="itemParagraph">
                            <PriceComponent
                                price={1000}
                                width="auto"
                                height="auto"
                                tomanColor="black"
                                tomanFontSize="13px"
                                priceColor="black"
                                priceFontSize="13px"
                            />
                        </p>
                    </CustomContainer>

                    <CircleIconContainer>
                        <DotIcon />
                    </CircleIconContainer>

                    <CustomContainer
                        disableMediaQuery={true}
                    >
                        <p className="titleParagraph">مبلغ مرسوله</p>

                        <p className="itemParagraph">
                            <PriceComponent
                                price={10000}
                                width="auto"
                                height="auto"
                                tomanColor="black"
                                tomanFontSize="13px"
                                priceColor="black"
                                priceFontSize="13px"
                            />
                        </p>
                    </CustomContainer>
                </CustomContainer>

                <CustomContainer>
                    <p className="titleParagraph">کد پیگیری مرسوله</p>

                    <p className="itemParagraph">۱۲۳۴۲۳۴۲۳۴</p>
                </CustomContainer>
            </CustomContainer>

            <CustomContainer
                className="fourthRow"
                disableMediaQuery={true}
            >
                <CustomContainer
                    disableMediaQuery={true}
                    className="infoCustomContainer"
                    justifyContent="flex-start"
                >
                    <InfoCircleIconContainer>
                        <InfoCircleIcon />
                    </InfoCircleIconContainer>

                    <p>این کد را به مامور اعلام کنید</p>
                </CustomContainer>

                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="flex-start"
                >
                    <p className="titleParagraph">کد تحویل مرسوله</p>

                    <p className="itemParagraph">24023</p>

                    <CopyDocumentIconContainer>
                        <CopyDocumentIcon />
                    </CopyDocumentIconContainer>
                </CustomContainer>

            </CustomContainer>

            <CustomContainer
                className="fifthRow"
            >
                <CheckoutItem
                    item={item}
                />
            </CustomContainer>

            <CustomContainer
                disableMediaQuery={true}
                justifyContent="flex-end"
                className="sixthRow"
            >
                <p>ثبت دیدگاه</p>

                <AddCommentIconContainer>
                    <AddCommentIcon />
                </AddCommentIconContainer>
            </CustomContainer>
        </Wrapper>
    );
}

export default OrderDetailsProductDescription;