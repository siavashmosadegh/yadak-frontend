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

const OrderDetails = () => {

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
                        disableMediaQuery={true}
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

                            <p className="item">{orderRegisterDate}</p>
                        </CustomContainer>
                    </SecondContainer>

                    <LineContainer>
                        <Line />
                    </LineContainer>

                    <ThirdContainer
                        disableMediaQuery={true}
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

                    <FourthContainer>
                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">آدرس</p>

                            <p className="item">{address}</p>
                        </CustomContainer>

                        <CustomContainer
                            disableMediaQuery={true}
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
                        <CustomContainer>
                            <p className='title'>مبلغ</p>

                            <p className='item'>{price}</p>
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

                        <p className='item'>{transferPrice}</p>
                    </SixthCustomContainer>
                </ProfileWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default OrderDetails;