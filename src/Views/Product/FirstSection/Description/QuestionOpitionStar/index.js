import React from 'react';
import { Wrapper } from './styles';
import StarIcon from '../../../../../Icons/ProductIcons/StarIcon';
import DotIcon from '../../../../../Icons/ProductIcons/DotIcon';

const QuestionOpitionStar = (props) => {

    const {
        star,
        numOfOpinions,
        numOfQuestions
    } = props;

    return (
        <Wrapper>
            {
                (star === null) || (star === 0)
                    ?
                    null
                    :
                    <div className="star">
                        <StarIcon />

                        {star}
                    </div>
            }
            {
                (star === null) || (star === 0)
                    ?
                    null
                    :
                    <DotIcon />
            }

            {
                (numOfOpinions === null || numOfOpinions === 0)
                    ?
                    null
                    :
                    <div className="opinionAndQuestion">
                        {numOfOpinions}

                        <p>دیدگاه</p>
                    </div>
            }
            {
                (numOfOpinions === null || numOfOpinions === 0)
                    ?
                    null
                    :
                    <DotIcon />
            }

            {
                (numOfQuestions === null || numOfQuestions === 0) 
                    ?
                    null
                    :
                    <div className="opinionAndQuestion">
                        {numOfQuestions}

                        <p>پرسش</p>
                    </div>
            }
        </Wrapper>
    );
}

export default QuestionOpitionStar;