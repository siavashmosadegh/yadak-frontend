import React from 'react';
import LocationIcon from '../../../Icons/Checkout/LocationIcon';
import LeftArrowIcon from '../../../Icons/LeftArrowIcon';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import {
    LeftArrowIconContainer,
    LocationIconContainer,
    Wrapper
} from './styles';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import CheckoutActions from '../../../Redux/Checkout/Actions';
import { useEffect } from 'react';
import UserActions from '../../../Redux/User/Actions';

const Address = () => {

    const dispatch = useDispatch();

    const {
        addresses,
        selectedAddress
    } = useSelector((state) => state.User);

    console.log(selectedAddress);

    useEffect(() => {
        if (addresses === null || addresses.length === 0) {

        } else {
            dispatch(UserActions.selectAddressHandler(addresses[0]));
        }
    },[]);

    return (
        <Wrapper>
            <p className="title">آدرس تحویل سفارش</p>

            <CustomContainer
                disableMediaQuery={true}
            >
                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="center"
                >
                    <LocationIconContainer>
                        <LocationIcon />
                    </LocationIconContainer>

                    <p>
                        {
                            selectedAddress !== null
                                ?
                                selectedAddress.title
                                :
                                null
                        }
                    </p>
                </CustomContainer>

                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="center"
                    onClick={() => dispatch(CheckoutActions.showChangeEditAddressModalHandler({}))}
                >
                    <p className="changeEditText">تغییر | ویرایش</p>

                    <LeftArrowIconContainer>
                        <LeftArrowIcon />
                    </LeftArrowIconContainer>
                </CustomContainer>
            </CustomContainer>
        </Wrapper>
    );
}

export default Address;