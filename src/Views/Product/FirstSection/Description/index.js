import React from 'react';
import {
    Features,
    QuestionOpitionStar,
    UserSuggest,
    Wrapper
} from './styles';
import StarIcon from '../../../../Icons/ProductIcons/StarIcon';
import DotIcon from '../../../../Icons/ProductIcons/DotIcon';
import LikeIcon from '../../../../Icons/ProductIcons/LikeIcon';

const Description = (props) => {

    const {
        numOfQuestions,
        numOfOpinions,
        star,
        userSuggestNumber,
        userSuggestPercent,
        features
    } = props;

    const featuresCreator = () => {
        if (features !== null && features.length !== 0) {
            return (
                features.map(item => {
                    return (
                        <div className="featureItem">
                            <DotIcon />

                            <p>{item.title}</p>

                            <p>:</p>

                            <p>{item.explanation}</p>    
                        </div>
                    );
                })
            );
        }
    }

    return (
        <Wrapper>
            <QuestionOpitionStar>
                <div className="star">
                    <StarIcon />

                    {star}
                </div>

                <DotIcon />

                <div className="opinionAndQuestion">
                    {numOfOpinions}

                    <p>دیدگاه</p>
                </div>

                <DotIcon />

                <div className="opinionAndQuestion">
                    {numOfQuestions}

                    <p>پرسش</p>
                </div>
            </QuestionOpitionStar>

            <UserSuggest>
                <LikeIcon />

                <p>{userSuggestPercent}</p>

                <p>{`)`}</p>

                <p>{userSuggestNumber}</p>

                <p>نفر</p>

                <p>{`(`}</p>

                <p>از خریداران این کالا را پیشنهاد کردند</p>
            </UserSuggest> 

            <Features>
                <h3>ویژگی ها</h3>

                {featuresCreator()}
            </Features>           
        </Wrapper>
    );
}

export default Description;