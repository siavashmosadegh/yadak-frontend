import React from 'react';
import { Wrapper } from './styles';
import img1 from '../../../Assets/images/1.jpg';
import StarIcon from '../../../Icons/ProductIcons/StarIcon';

const ProductListItem = (props) => {

    const {
        item
    } = props;

    const {
        id,
        title,
        star,
        opinion,
        question,
        userSuggestPercent,
        userSuggestNumber,
        features,
        available,
        price,
        questions,
    } = item;
    return (
        <Wrapper>
            <img src={img1} />

            {title}

            <div className="starDiv">
                {star}

                <StarIcon />
            </div>
        </Wrapper>
    );
}

export default ProductListItem;