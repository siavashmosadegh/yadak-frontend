import React from 'react';
import InfoIcon from '../../../Icons/InfoIcon';
import LeftArrowIcon from '../../../Icons/LeftArrowIcon';
import { Wrapper } from './styles';

const PricingProcess = () => {
    return (
        <Wrapper>
            <div className="infoAndTitle">
                <InfoIcon />

                <p>فرآیند قیمت گذاری و نظارت بر قیمت</p>
            </div>

            <LeftArrowIcon />
        </Wrapper>
    );
}

export default PricingProcess;