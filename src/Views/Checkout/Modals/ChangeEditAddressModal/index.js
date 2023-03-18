import React from 'react';
import CustomModal from '../../../../UI-Kit/CustomModal/index';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutActions from '../../../../Redux/Checkout/Actions';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import {
    AddLocationIconContainer,
    LeftArrowIconContainer,
    Line,
    Wrapper
} from './styles';
import LeftArrowIcon from '../../../../Icons/LeftArrowIcon';
import AddLocationIcon from '../../../../Icons/Checkout/AddLocationIcon';
import AddressItem from './AddressItem';

const ChangeEditAddressModal = () => {

    const {
        addresses,
        selectedAddress
    } = useSelector((state) => state.User);

    const dispatch = useDispatch();

    const addressesContent = () => {
        if (addresses !== null && addresses.length !== 0) {
            return (
                addresses.map( (item) => {
                    return (
                        <AddressItem
                            item={item}
                            selectedAddress={selectedAddress}
                        />
                    );
                })
            );
        } else {
            return <p>آدرسی ثبت نشده</p>
        }
    }

    return (
        <CustomModal
            width="500px"
            height="500px"
            closeCustomModalHandler={() => dispatch(CheckoutActions.closeChangeEditAddressModalHandler({}))}
            headerTitle="انتخاب آدرس"
            modalBackgroundColor="white"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <Wrapper>
                <CustomContainer
                    disableMediaQuery={true}
                >
                    <CustomContainer
                        disableMediaQuery={true}
                    >
                        <AddLocationIconContainer>
                            <AddLocationIcon />
                        </AddLocationIconContainer>

                        <p className="addTitle">افزودن آدرس جدید</p>
                    </CustomContainer>

                    <LeftArrowIconContainer>
                        <LeftArrowIcon />
                    </LeftArrowIconContainer>
                </CustomContainer>

                <Line />

                {addressesContent()}
            </Wrapper>
        </CustomModal>
    );
}

export default ChangeEditAddressModal;