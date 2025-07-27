import React from 'react';
import Layout from '../../../Views/Layout';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import {
    EditIconWrapper,
    PersonalInfoItem,
    ProfilePersonalInfoWrapper,
    IconAndContentWrapper,
    ParagraphWrapper
} from './styles';
import EditIcon from '../../../Icons/Profile/EditIcon';

const ProfilePersonalInfo = () => {
    return (
        <Layout>
            <ProfileLayout>
                <ProfilePersonalInfoWrapper>
                    <div className='row'>
                        <PersonalInfoItem>

                            <ParagraphWrapper>
                                <p>نام و نام خانوادگی</p>
                            </ParagraphWrapper>

                            <IconAndContentWrapper>
                                <EditIconWrapper>
                                    <EditIcon />
                                </EditIconWrapper>

                                <p style={{marginBottom: "30px"}}>سیاوش مصدق</p>
                            </IconAndContentWrapper>
                        </PersonalInfoItem>

                        <PersonalInfoItem>
                            <p>کد ملی</p>

                            <IconAndContentWrapper>
                                <EditIconWrapper>
                                    <EditIcon />
                                </EditIconWrapper>

                                <p>۲۱۳۴۲۳۴۲۳۴</p>
                            </IconAndContentWrapper>
                        </PersonalInfoItem>
                    </div>
                </ProfilePersonalInfoWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default ProfilePersonalInfo;