import { useEffect } from 'react';
import Layout from '../../../Views/Layout';
import ProfileAddressItem from '../../../Views/Profile/ProfileAddress/ProfileAddressItem';
import ProfileLayout from '../../../Views/Profile/ProfileLayout';
import { ProfileAddressWrapper } from './styles';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import { getProfilePersonalInfoRequest } from '../../../Redux/User/Actions';
import Loader from '../../../UI-Kit/Loader/Loader';
import AddAddressModal from '../../../Views/Profile/Modals/AddAddressModal';
import { useState } from 'react';

const ProfileAddress = () => {

    const {
        user,
        loading
    } = useSelector((state) => state.User);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfilePersonalInfoRequest())
    },[]);

    const [showAddAddressModal, setShowAddAddressModal] = useState(false);

    const openShowAddAddressModal = () => {
        setShowAddAddressModal(true);
    }

    const closeShowAddAddressModal = () => {
        setShowAddAddressModal(false);
    }

    return (
        <Layout>
            <ProfileLayout>
                <ProfileAddressWrapper>
                    <div className='row'>
                        <div className='addNewAddress'>
                            <p
                                onClick={() => openShowAddAddressModal()}
                            >
                                افزودن آدرس جدید
                            </p>
                        </div>

                        <h3>آدرس ها</h3>
                    </div>

                    <div className='addresses'>
                        {
                            loading === true 
                                ?
                                <Loader />
                                :
                                    user?.PostalAddress !== null && user?.ZipCode !== null
                                        ?
                                        <ProfileAddressItem
                                            postalAddress={user?.PostalAddress}
                                            pelak={user?.AddressHouseNumber}
                                            vahed={user?.AddressUnitNumber}
                                            zipCode={user?.ZipCode}
                                        />
                                        :
                                        <p>آدرس تعریف نشده</p>
                        }



                        {/* <ProfileAddressItem /> */}
                    </div>

                    {
                        showAddAddressModal === true
                            ?
                            <AddAddressModal
                                onClose={closeShowAddAddressModal}
                            />
                            :
                            null
                    }
                </ProfileAddressWrapper>
            </ProfileLayout>
        </Layout>
    );
}

export default ProfileAddress;