import React from 'react';
import AvailableInStoreIcon from '../../../../Icons/ProductIcons/AvailableInStoreIcon';
import EuroPriceIcon from '../../../../Icons/ProductIcons/EuroPriceIcon';
import UnavailableInStoreIcon from '../../../../Icons/ProductIcons/UnavailableInStoreIcon';
import VerifiedIcon from '../../../../Icons/ProductIcons/VerifiedIcon';
import { Line, Wrapper } from './styles';

const Store = (props) => {

    const {
        available
    } = props;

    return (
        <Wrapper>
            <div className="verified">
                <VerifiedIcon />

                <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
            </div>

            <Line />

            <div className="verified">
                {
                    available === true
                        ?
                        <AvailableInStoreIcon />
                        :
                        <UnavailableInStoreIcon />
                }
                {
                    available === true
                        ?
                        <p>موجود در انبار</p>
                        :
                        <p>ناموجود در بازار</p>
                }
            </div>

            <Line />

            <div className="price">
                <EuroPriceIcon />

                <p>171000</p>
            </div>
        </Wrapper>
    );
}

export default Store;