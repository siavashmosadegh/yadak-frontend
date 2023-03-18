import React from 'react';
import LocationIcon from '../../../Icons/Checkout/LocationIcon';
import LeftArrowIcon from '../../../Icons/LeftArrowIcon';
import CustomContainer from '../../../UI-Kit/Grid/CustomContainer';
import {
    LeftArrowIconContainer,
    LocationIconContainer,
    Wrapper
} from './styles';

const Address = () => {
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

                    <p>ونک / برزیل شرقی / نیلو / سمت چپ</p>
                </CustomContainer>

                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="center"
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