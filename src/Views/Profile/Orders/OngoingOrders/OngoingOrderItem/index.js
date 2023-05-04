import React from 'react';
import {
    Wrapper,
    FirstRowCustomContainer,
    LeftArrowIconContainer,
    PendingIconContainer,
    SecondRowCustomContainer,
    SingleItem,
    ThirdRowCustomContainer
} from './styles';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import PendingIcon from '../../../../../Icons/Profile/PendingIcon';
import LeftArrowIcon from '../../../../../Icons/Profile/LeftArrowIcon';
import DotIcon from '../../../../../Icons/ProductIcons/DotIcon';
import OrderStatus from '../../OrderStatus';
import PriceComponent from '../../../../PriceComponent';
import ConvertGregorianToPersian from '../../../../../Util/ConvertGregorianToPersian';

const OngoingOrderItem = (props) => {

    const {
        item
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
        status,
        nextStepStatus,
        orderReceivingDate,
        transferPrice,
        sentItemTracingNumber,
        sentItemReceiveCode,
        price,
        profit,
        paymentMethod,
        discount
    } = item;

    const orderReceivingDateContent = () => {
        return ConvertGregorianToPersian.parseToJDate(orderReceivingDate,"dddd DD MMMM YYYY");
    }

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
                    <PendingIconContainer>
                        <PendingIcon />
                    </PendingIconContainer>

                    <p className="statusParagraph">{status}</p>
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

                    <PriceComponent
                        price={price}
                        width="auto"
                        height="auto"
                        tomanColor="black"
                        tomanFontSize="14px"
                        priceColor="black"
                        priceFontSize="14px"
                    />
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
                                        width="auto"
                                        height="auto"
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

            <ThirdRowCustomContainer
                responsiveMaxWidth="900px"
                responsiveAlignItems="flex-end"
            >
                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="center"
                >
                    <p className="deliveryParagraph">تحویل</p>

                    <span className="orderRegistryDateSpan">
                        {orderReceivingDateContent()}
                    </span>
                </CustomContainer>

                <OrderStatus
                    status={status}
                    nextStepStatus={nextStepStatus}
                    linearProgressValue={80}
                />
                {/* <div className="statusDiv">
                    <StatusContainer
                        disableMediaQuery={true}
                    >
                        <p className="currentStatus">{status}</p>

                        {
                            nextStepStatus !== null
                            ?
                                <NextStepCustomContainer
                                    disableMediaQuery={true}
                                >
                                        <p className="text">مرحله بعد</p>

                                        <p>:</p>

                                        <p className="processed">{nextStepStatus}</p>
                                </NextStepCustomContainer>
                            :
                                null
                        }
                    </StatusContainer>

                    <LinearProgress variant="determinate" value={80} sx={{width: "100%",height: "5px",rotate: "180deg"}}/>
                </div> */}
            </ThirdRowCustomContainer>
        </Wrapper>
    );
}

export default OngoingOrderItem;