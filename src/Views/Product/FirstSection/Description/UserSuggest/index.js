import React from 'react';
import { Wrapper } from './styles';
import LikeIcon from '../../../../../Icons/ProductIcons/LikeIcon';

const UserSuggest = (props) => {

    const {
        userSuggestNumber,
        userSuggestPercent
    } = props;
    return (
        <Wrapper>
            {
                (userSuggestNumber === null || userSuggestNumber === 0 || userSuggestPercent === null || userSuggestPercent === 0)
                    ?
                    null
                    :
                    <>
                        <LikeIcon />
        
                        <p>{userSuggestPercent}</p>
        
                        <p>{`)`}</p>
        
                        <p>{userSuggestNumber}</p>
        
                        <p>نفر</p>
        
                        <p>{`(`}</p>
        
                        <p>از خریداران این کالا را پیشنهاد کردند</p>                        
                    </>
            }

        </Wrapper>
    );
}

export default UserSuggest;