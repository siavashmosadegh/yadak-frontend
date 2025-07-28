import { useEffect } from 'react';
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
import { getProfilePersonalInfoRequest } from '../../../Redux/User/Actions';
import { useDispatch } from 'react-redux';

const ProfilePersonalInfo = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfilePersonalInfoRequest());
    });

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