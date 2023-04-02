import React from 'react';
import Layout from '../../../Views/Layout';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import SearchOrdersForm from '../../../Views/Profile/Forms/SearchOrdersForm';
import { FormAndTitleContainer } from './styles';

const ProfileOrders = () => {
    return (
        <Layout>
            <ProfileLayout>
                <FormAndTitleContainer
                    disableMediaQuery={true}
                >
                    <p>تاریخچه سفارشات</p>

                    <SearchOrdersForm />
                </FormAndTitleContainer>
            </ProfileLayout>
        </Layout>
    );
}

export default ProfileOrders;