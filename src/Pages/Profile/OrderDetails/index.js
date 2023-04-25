import React from 'react';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import Layout from '../../../Views/Layout';
import {
    CircleIconContainer,
    EditIconContainer,
    FirstContainer,
    FourthContainer,
    Line,
    LineContainer,
    ProfileWrapper,
    RightArrowIconContainer,
    SecondContainer,
    ThirdContainer
} from './styles';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import RightArrowIcon from '../../../Icons/Profile/RightArrowIcon';
import DotIcon from '../../../Icons/ProductIcons/DotIcon';
import EditIcon from '../../../Icons/Profile/EditIcon';

const OrderDetails = () => {
    return (
        <Layout>
            <ProfileLayout>
                <ProfileWrapper>
                    <FirstContainer
                        disableMediaQuery={true}
                        justifyContent="flex-start"
                    >
                        <RightArrowIconContainer>
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

                            <p className="item">12323232332</p>
                        </CustomContainer>

                        <CircleIconContainer>
                            <DotIcon />
                        </CircleIconContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">تاریخ ثبت سفارش</p>

                            <p className="item">۱۴ اردیبهشت ۱۲۳۹</p>
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

                            <p className="item">سیاوش مصدق</p>
                        </CustomContainer>

                        <CircleIconContainer>
                            <DotIcon />
                        </CircleIconContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">شماره موبایل</p>

                            <p className="item">09128702302</p>
                        </CustomContainer>
                    </ThirdContainer>

                    <FourthContainer>
                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <p className="title">آدرس</p>

                            <p className="item">ونک ، برزیل شرقی ، نیلو ، ک ۱۴ ، پ ۴ ، و ۱</p>
                        </CustomContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <EditIconContainer>
                                <EditIcon />
                            </EditIconContainer>

                            <p>تغییر آدرس زمان تحویل</p>
                        </CustomContainer>
                    </FourthContainer>
                </ProfileWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default OrderDetails;