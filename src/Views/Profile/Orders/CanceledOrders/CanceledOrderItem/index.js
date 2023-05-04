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
import ConvertGregorianToPersian from '../../../../../Util/ConvertGregorianToPersian';
import PriceComponent from '../../../../PriceComponent';

const CanceledOrderItem = (props) => {

    const {
        item
    } = props;

    const {
        id,
        title,
        status,
        orderRegisterDate,
        orderCode,
        price,
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
                    {orderRegisterDateContent()}
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
        </Wrapper>
    );
}

export default CanceledOrderItem;