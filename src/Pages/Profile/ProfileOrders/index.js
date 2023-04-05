import React from 'react';
import Layout from '../../../Views/Layout';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import SearchOrdersForm from '../../../Views/Profile/Forms/SearchOrdersForm';
import {
    FormAndTitleContainer,
    Line,
    ProfileWrapper
} from './styles';
import { useSelector } from 'react-redux';
import ProfileOrdersTab from '../../../Views/Profile/ProfileOrdersTab';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import Empty from '../../../Views/Empty';

const ProfileOrders = () => {

    const {
        onGoingOrders,
        successfulOrders,
        returnedOrders,
        canceledOrders,
        activeOrdersTab
    } = useSelector((state) => state.Orders);

    return (
        <Layout>
            <ProfileLayout>
                <ProfileWrapper>
                    <FormAndTitleContainer
                        disableMediaQuery={true}
                    >
                        <p>تاریخچه سفارشات</p>

                        <SearchOrdersForm />
                    </FormAndTitleContainer>

                    <CustomContainer
                        disableMediaQuery={true}
                        justifyContent="flex-start"
                    >
                        <ProfileOrdersTab
                            title="جاری"
                            number={onGoingOrders.length}
                            activeOrdersTab={activeOrdersTab}
                        />

                        <ProfileOrdersTab
                            title="تحویل شده"
                            number={successfulOrders.length}
                            activeOrdersTab={activeOrdersTab}
                        />

                        <ProfileOrdersTab
                            title="مرجوع شده"
                            number={returnedOrders.length}
                            activeOrdersTab={activeOrdersTab}
                        />

                        <ProfileOrdersTab
                            title="لغو شده"
                            number={canceledOrders.length}
                            activeOrdersTab={activeOrdersTab}
                        />
                    </CustomContainer>

                    <Line />

                    {
                        activeOrdersTab === 'جاری'
                            ?
                            onGoingOrders.length !== 0
                                ?
                                null
                                :
                                <Empty
                                    title="هنوز هیچ سفارشی ثبت نکرده اید"
                                    width="100%"
                                    height="500px"
                                />
                                :
                                null
                    }
                </ProfileWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default ProfileOrders;