import React from 'react';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import Layout from '../../../Views/Layout';
import {
    CircleIconContainer,
    EditIconContainer,
    FifthCustomContainer,
    FirstContainer,
    FourthContainer,
    Line,
    LineContainer,
    ProfileWrapper,
    RightArrowIconContainer,
    SecondContainer,
    SixthCustomContainer,
    ThirdContainer
} from './styles';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import RightArrowIcon from '../../../Icons/Profile/RightArrowIcon';
import DotIcon from '../../../Icons/ProductIcons/DotIcon';
import EditIcon from '../../../Icons/Profile/EditIcon';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OrderDetailsProductDescription from '../../../Views/Profile/Orders/OrderDetailsProductDescription';
import PriceComponent from '../../../Views/PriceComponent';
import persian_fa from 'react-date-object/locales/persian_fa';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";

const OrderDetails = () => {

    const orderRegisterDateContent = () => {
        let dateformat = new DateObject({
            date: orderRegisterDate,
            calendar: persian,
            locale: persian_fa,
        });
        return dateformat.format("dddd DD MMMM YYYY");
    }

    const navigate = useNavigate();
    
    const {
        selectedOrder
    } = useSelector((state) => state.Orders);

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

    console.log(selectedOrder);

    return (
        <Layout>
            <ProfileLayout>
                <ProfileWrapper>
                    <FirstContainer
                        disableMediaQuery={true}
                        justifyContent="flex-start"
                    >
                        <RightArrowIconContainer
                            onClick={() => navigate(-1)}
                        >
                            <RightArrowIcon />
                        </RightArrowIconContainer>

                        <p>جزئیات سفارش</p>
                    </FirstContainer>

                    <SecondContainer
                        responsiveAlignItems="flex-end"
                        justifyContent="flex-start"
                    >
                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">کد پیگیری سفارش</p>

                            <p className="item">{tracingNumber}</p>
                        </CustomContainer>

                        <CircleIconContainer>
                            <DotIcon />
                        </CircleIconContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">تاریخ ثبت سفارش</p>

                            <p className="item">
                                {orderRegisterDateContent()}
                            </p>
                        </CustomContainer>
                    </SecondContainer>

                    <LineContainer>
                        <Line />
                    </LineContainer>

                    <ThirdContainer
                        responsiveAlignItems="flex-end"
                        justifyContent="flex-start"
                    >
                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">تحویل گیرنده</p>

                            <p className="item">{recieverName}</p>
                        </CustomContainer>

                        <CircleIconContainer>
                            <DotIcon />
                        </CircleIconContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">شماره موبایل</p>

                            <p className="item">{recieverMobile}</p>
                        </CustomContainer>
                    </ThirdContainer>

                    <LineContainer>
                        <Line />
                    </LineContainer>

                    <FourthContainer
                        responsiveAlignItems="flex-end"
                        responsiveMaxWidth="900px"
                    >
                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">آدرس</p>

                            <p className="item">{address}</p>
                        </CustomContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                            className="editIconCustomContainer"
                        >
                            <EditIconContainer>
                                <EditIcon />
                            </EditIconContainer>

                            <p className='changeAddress'>تغییر آدرس زمان تحویل</p>
                        </CustomContainer>
                    </FourthContainer>

                    <FifthCustomContainer
                        disableMediaQuery={true}
                        justifyContent="flex-start"
                    >
                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className='title'>مبلغ</p>

                            <p className='item'>
                                <PriceComponent
                                    price={price}
                                    width="auto"
                                    height="auto"
                                    tomanColor="black"
                                    tomanFontSize="13px"
                                    priceColor="black"
                                    priceFontSiz="13px"
                                />
                            </p>
                        </CustomContainer>

                        <CircleIconContainer>
                            <DotIcon />
                        </CircleIconContainer>

                        <p className='item'>{paymentMethod}</p>
                    </FifthCustomContainer>

                    <SixthCustomContainer
                        disableMediaQuery={true}
                        justifyContent="flex-start"
                    >
                        <p className='title'>هزینه ارسال (بر اساس وزن و حجم)</p>

                        <p className='item'>
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
                    </SixthCustomContainer>

                    <CustomContainer
                        disableMediaQuery={true}
                        flexDirection="column"
                    >
                        <OrderDetailsProductDescription
                            selectedOrder={selectedOrder}
                        />
                    </CustomContainer>
                </ProfileWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default OrderDetails;