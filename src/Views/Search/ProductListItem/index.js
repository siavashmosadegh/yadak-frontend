import React from 'react';
import { Discount, Wrapper } from './styles';
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
        numberOfItemsAvailableInStore,
        discount,
        questions,
    } = item;
    return (
        <Wrapper>
            <img src={img1} />


            <p>
                {title}
            </p>

            <div className="thirdRow">
                {
                    star === null
                        ?
                        <div className="starDiv">
                            <StarIcon />

                            {star}
                        </div>
                        :
                        null
                }

                {
                    (numberOfItemsAvailableInStore < 10) && (numberOfItemsAvailableInStore !== 0)
                        ?
                        <p className="descriptionParagraph">تنها {numberOfItemsAvailableInStore} عدد در انبار باقی مانده</p>
                        :
                        numberOfItemsAvailableInStore === 0
                            ?
                            <p className="descriptionParagraph">ناموجود در انبار</p>
                            :
                            null
                }
            </div>

            <div className="priceRow">
                <div className="priceDiv">
                    <p className="toman">تومان</p>

                    {price.toLocaleString()}
                </div>

                {
                    discount !== null
                        ?
                        <Discount>
                            {discount}
                        </Discount>
                        :
                        null
                }
            </div>
        </Wrapper>
    );
}

export default ProductListItem;