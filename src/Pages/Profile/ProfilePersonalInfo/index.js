import { useEffect, useState } from 'react';
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
import {
    useDispatch,
    useSelector
} from 'react-redux';
import Loader from '../../../UI-Kit/Loader/Loader';
import UpdateNameFormModal from '../../../Views/Profile/Modals/UpdateNameFormModal';

const ProfilePersonalInfo = () => {

    const [showUpdateNameFormModal, setShowUpdateNameFormModal] = useState(false);

    const openShowUpdateNameFormModal = () => {
        setShowUpdateNameFormModal(true);
    }

    const closeShowUpdateNameFormModal = () => {
        setShowUpdateNameFormModal(false);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfilePersonalInfoRequest());
    },[]);

    const {
        user,
        loading
    } = useSelector((state) => state.User);

    return (
        <Layout>
            <ProfileLayout>
                <ProfilePersonalInfoWrapper>
                    {
                        loading === true
                            ?
                            <Loader />
                            :
                            <div className='row'>
                                <PersonalInfoItem>

                                    <ParagraphWrapper>
                                        <p>نام و خانوادگی</p>
                                    </ParagraphWrapper>

                                    <IconAndContentWrapper>
                                        <EditIconWrapper
                                            onClick={openShowUpdateNameFormModal}
                                        >
                                            <EditIcon />
                                        </EditIconWrapper>

                                        <p>
                                            {
                                                user !== null && user?.FirstName !== null && user?.LastName !== null
                                                    ?
                                                    <p>{user?.FirstName} {user?.LastName}</p>
                                                    :
                                                    <p>وارد نشده</p>
                                            }
                                        </p>
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
                    }

                    {
                        showUpdateNameFormModal === true
                            ?
                            <UpdateNameFormModal />
                            :
                            null
                    }
                </ProfilePersonalInfoWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default ProfilePersonalInfo;