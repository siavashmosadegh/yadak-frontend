import React from 'react';
import {
    Wrapper,
    CrossIconContainer,
    FirstRowCustomContainer,
    LeftArrowIconContainer,
    SecondRowCustomContainer,
    SingleItem
} from './styles';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import LeftArrowIcon from '../../../../../Icons/Profile/LeftArrowIcon';
import CrossIcon from '../../../../../Icons/Profile/CrossIcon';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DotIcon from '../../../../../Icons/ProductIcons/DotIcon';

const CanceledOrderItem = (props) => {

    const {
        item
    } = props;

    const {
        id,
        title,
        status,
        date,
        orderCode,
        price,
        discount
    } = item;

    const dateContent = () => {
        let dateformat = new DateObject({
            date: date,
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
                    <CrossIconContainer>
                        <CrossIcon />
                    </CrossIconContainer>

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

                    <span>{orderCode}</span>
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
        </Wrapper>
    );
}

export default CanceledOrderItem;