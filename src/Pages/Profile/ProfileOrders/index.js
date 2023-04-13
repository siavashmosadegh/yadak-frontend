import React from 'react';
import Layout from '../../../Views/Layout';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import SearchOrdersForm from '../../../Views/Profile/Forms/SearchOrdersForm';
import {
    FormAndTitleContainer,
    Line,
    ProfileWrapper,
    TabsContainer
} from './styles';
import { useSelector } from 'react-redux';
import ProfileOrdersTab from '../../../Views/Profile/ProfileOrdersTab';
import OngoingOrders from '../../../Views/Profile/Orders/OngoingOrders';
import SuccessfulOrders from '../../../Views/Profile/Orders/SuccessfulOrders';
import ReturnedOrders from '../../../Views/Profile/Orders/ReturnedOrders';
import CanceledOrders from '../../../Views/Profile/Orders/CanceledOrders';

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

                    <div className="tabsContainerParent">
                        <TabsContainer
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
                        </TabsContainer>
                    </div>

                    {
                        activeOrdersTab !== null
                            ?
                            <Line />
                            :
                            null
                    }

                    {
                        activeOrdersTab === 'جاری'
                            ?
                            <OngoingOrders />
                            :
                            null
                    }

                    {
                        activeOrdersTab === 'تحویل شده'
                            ?
                            <SuccessfulOrders />
                            :
                            null
                    }

                    {
                        activeOrdersTab === 'مرجوع شده'
                            ?
                            <ReturnedOrders />
                            :
                            null
                    }

                    {
                        activeOrdersTab === 'لغو شده'
                            ?
                            <CanceledOrders />
                            :
                            null
                    }
                </ProfileWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default ProfileOrders;