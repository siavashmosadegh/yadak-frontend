import React, { useEffect, useState } from 'react';
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
import OrderStatus from '../OrderStatus';
import ConvertGregorianToPersian from '../../../../Util/ConvertGregorianToPersian';

const OrderDetailsProductDescription = (props) => {

    const {
        selectedOrder
    } = props;

    const {
        id,
        title,
        productId,
        tracingNumber,
        orderRegisterDate,
        recieverName,
        recieverMobile,
        address,
        orderLink,
        status,
        nextStepStatus,
        orderReceivingDate,
        transferPrice,
        sentItemTracingNumber,
        sentItemReceiveCode,
        price,
        paymentMethod,
        discount
    } = selectedOrder;

    const [gotCopied, setGotCopied] = useState(false);

    const makeGotCopiedTrue = () => {
        navigator.clipboard.writeText(sentItemReceiveCode);
        setGotCopied(true);
    }

    const makeGotCopiedFalse = () => {
        setGotCopied(false);
    }

    useEffect(() => {
        if (gotCopied === true) {
            setTimeout(makeGotCopiedFalse,5000);
        }
    },[gotCopied]);

    const receivingDateContent = () => {
        return ConvertGregorianToPersian.parseToJDate(orderReceivingDate,"dddd DD MMMM YYYY");
    }

    const item = {
        title: title,
        price: price
    }

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

                <p className="itemParagraph">
                    {receivingDateContent()}
                </p>

            </CustomContainer>

            <CustomContainer
                justifyContent="flex-start"
                className="orderStatusRow"
            >
                <OrderStatus
                    status={status}
                    nextStepStatus={nextStepStatus}
                    linearProgressValue={50}
                />
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
                                price={transferPrice}
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
                                price={price}
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

                    <p className="itemParagraph">
                        {sentItemTracingNumber}
                    </p>
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

                    {
                        gotCopied === false
                            ?
                            <React.Fragment
                                // onClick={() => gotCopiedHandler()}
                            >
                                <p className="itemParagraph">
                                    {sentItemReceiveCode}
                                </p>

                                <CopyDocumentIconContainer
                                    onClick={() => makeGotCopiedTrue()}
                                >
                                    <CopyDocumentIcon />
                                </CopyDocumentIconContainer>                            
                            </React.Fragment>
                            :
                            <p className="itemParagraph">! کپی شد</p>
                    }
                </CustomContainer>

            </CustomContainer>

            <CustomContainer
                className="fifthRow"
            >
                <CheckoutItem
                    item={item}
                    type="orderDetails"
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