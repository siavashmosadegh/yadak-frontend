import React from 'react';
import CustomContainer from '../../UI-Kit/Grid/CustomContainer';
import Layout from '../../Views/Layout';
import ProfileLayout from '../../Views/Profile/ProfileLayout';
import {
    FailedDeliveryIconContainer,
    FirstRowCustomContainer,
    IconContainer,
    PendingDeliveryIconContainer,
    ProfileWrapper,
    SecondRowCustomContainer,
    StyledSpan,
    SuccessfulDeliveryIconContainer
} from './styles';
import HeaderComponent from '../../Views/HeaderComponent/index';
import LeftArrowIcon from '../../Icons/Profile/LeftArrowIcon';
import { Link } from 'react-router-dom';
import routePaths from '../../Routes/NameSpace';
import PendingDelivery from '../../Icons/Profile/PendingDeliveryIcon';
import SuccessfulDelivery from '../../Icons/Profile/SuccessfulDeliveryIcon';
import FailedDeliveryIcon from '../../Icons/Profile/FailedDeliveryIcon';
import { useSelector } from 'react-redux';

const Profile = () => {

    const {
        onGoingOrders,
        successfulOrders,
        returnedOrders
    } = useSelector((state) => state.Orders);

    return (
        <Layout>
            <ProfileLayout>
                <ProfileWrapper>
                    <FirstRowCustomContainer
                        disableMediaQuery={true}
                    >
                        <HeaderComponent
                            title="سفارش های من"
                            font="15px"
                        />

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <Link to={routePaths.profileOrders}>
                                <StyledSpan>
                                    مشاهده ی همه
                                </StyledSpan>
                            </Link>

                            <IconContainer>
                                <LeftArrowIcon />
                            </IconContainer>
                        </CustomContainer>
                    </FirstRowCustomContainer>

                    <SecondRowCustomContainer
                        // disableMediaQuery={true}
                    >
                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <PendingDeliveryIconContainer>
                                <PendingDelivery />
                            </PendingDeliveryIconContainer>

                            <div>
                                <CustomContainer
                                    disableMediaQuery={true}
                                    justifyContent="flex-start"
                                >
                                    <span className='numberSpan'>
                                        {onGoingOrders.length}
                                    </span>

                                    <span>
                                        سفارش
                                    </span>                                    
                                </CustomContainer>

                                <p>
                                    جاری
                                </p>
                            </div>
                        </CustomContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <SuccessfulDeliveryIconContainer>
                                <SuccessfulDelivery />
                            </SuccessfulDeliveryIconContainer>

                            <div>
                                <CustomContainer
                                    disableMediaQuery={true}
                                    justifyContent="flex-start"
                                >
                                    <span className='numberSpan'>
                                        {successfulOrders.length}
                                    </span>

                                    <span>
                                        سفارش
                                    </span>
                                </CustomContainer>

                                <p>
                                    تحویل شده
                                </p>
                            </div>
                        </CustomContainer>

                        <CustomContainer
                            disableMediaQuery={true}
                        >
                            <FailedDeliveryIconContainer>
                                <FailedDeliveryIcon />
                            </FailedDeliveryIconContainer>

                            <div>
                                <CustomContainer
                                    disableMediaQuery={true}
                                    justifyContent="flex-start"
                                >
                                    <span className='numberSpan'>
                                        {returnedOrders.length}
                                    </span>

                                    <span>
                                        سفارش                                        
                                    </span>                                    
                                </CustomContainer>

                                <p>
                                    مرجوع شده
                                </p>
                            </div>
                        </CustomContainer>
                    </SecondRowCustomContainer>
                </ProfileWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default Profile;