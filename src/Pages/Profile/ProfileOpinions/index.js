import React from 'react';
import Layout from '../../../Views/Layout';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import {
    HeaderContainer,
    Line,
    ProfileWrapper,
    TabsContainer
} from './styles';
import ProfileOpinionsTab from '../../../Views/Profile/ProfileOpinionsTab';
import { useSelector } from 'react-redux';
import PendingOpinions from '../../../Views/Profile/ProfileOpinions/PendingOpinions';
import RegisteredOpinions from '../../../Views/Profile/ProfileOpinions/RegisteredOpinions';

const ProfileOpinions = () => {

    const {
        activeOpinionsTab
    } = useSelector((state) => state.Orders);

    return (
        <Layout>
            <ProfileLayout>
                <ProfileWrapper>
                    <HeaderContainer>
                        <p className='header'>دیدگاه ها</p>
                    </HeaderContainer>

                    <TabsContainer
                        disableMediaQuery={true}
                        justifyContent="flex-start"
                    >
                        <ProfileOpinionsTab
                            title="در انتظار ثبت"
                            activeOpinionTab={activeOpinionsTab}
                        />

                        <ProfileOpinionsTab
                            title="دیدگاه های من"
                            activeOpinionTab={activeOpinionsTab}
                        />
                    </TabsContainer>

                    {
                        activeOpinionsTab !== null
                            ?
                            <Line />
                            :
                            null
                    }

                    {
                        activeOpinionsTab === 'در انتظار ثبت'
                            ?
                            <PendingOpinions />
                            :
                            null
                    }

                    {
                        activeOpinionsTab === 'دیدگاه های من'
                            ?
                            <RegisteredOpinions />
                            :
                            null
                    }
                </ProfileWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default ProfileOpinions;