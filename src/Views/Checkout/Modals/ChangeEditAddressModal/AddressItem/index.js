import { Radio } from '@mui/material';
import React from 'react'
import HomeIcon from '../../../../../Icons/Checkout/HomeIcon';
import StampIcon from '../../../../../Icons/Checkout/StampIcon';
import CustomContainer from '../../../../../UI-Kit/Grid/CustomContainer';
import {
    HomeIconContainer,
    OtherDiv,
    StampIconContainer,
    Wrapper
} from './styles';

const AddressItem = (props) => {
    
    const {
        item,
        selectedAddress
    } = props;

    const {
        id,
        title,
        zipCode,
        houseNumber
    } = item;

    return (
        <Wrapper>
            <CustomContainer
                alignItems="flex-start"
                disableMediaQuery={true}
            >
                <div className="radioDiv">
                    <Radio
                        checked={selectedAddress.id === id}
                        // onChange={handleChange}
                        value={id}
                        name="radio-buttons"
                        // inputProps={{ 'aria-label': 'A' }}
                    />
                </div>
                <OtherDiv
                    flexDirection="column"
                    alignItems="flex-end"
                >
                    <p>
                        {title}
                    </p>
                    
                    <CustomContainer
                        disableMediaQuery={true}
                        justifyContent="center"
                    >
                        <StampIconContainer>
                            <StampIcon />
                        </StampIconContainer>

                        {zipCode}
                    </CustomContainer>

                    <CustomContainer>
                        <HomeIconContainer>
                            <HomeIcon />
                        </HomeIconContainer>

                        {houseNumber}
                    </CustomContainer>
                </OtherDiv>
            </CustomContainer>
        </Wrapper>
    );
}

export default AddressItem