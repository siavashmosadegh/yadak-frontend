import React from 'react';
import {
    Wrapper,
    FirstRowCustomContainer,
    LeftArrowIconContainer,
    PendingIconContainer,
    SecondRowCustomContainer,
    SingleItem,
    ThirdRowCustomContainer,
    NextStepCustomContainer,
    StatusContainer
} from './styles';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import PendingIcon from '../../../../../Icons/Profile/PendingIcon';
import LeftArrowIcon from '../../../../../Icons/Profile/LeftArrowIcon';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DotIcon from '../../../../../Icons/ProductIcons/DotIcon';
import { LinearProgress } from '@mui/material';

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

    const dateContent = () => {
        let dateformat = new DateObject({
            date: orderReceivingDate,
            calendar: persian,
            locale: persian_fa,
        });
        return dateformat.format();
    }

    const receivingDateContent = () => {
        let dateformat = new DateObject({
            date: orderRegisterDate,
            calendar: persian,
            locale: persian_fa,
        });
        return dateformat.format("dddd DD MMMM YYYY");
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
                        {receivingDateContent()}
                    </span>
                </CustomContainer>

                
                <div className="statusDiv">
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
                </div>
            </ThirdRowCustomContainer>
        </Wrapper>
    );
}

export default OngoingOrderItem;