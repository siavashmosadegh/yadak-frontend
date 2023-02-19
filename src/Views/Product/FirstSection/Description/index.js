import React from 'react';
import {
    Wrapper
} from './styles';
import Features from '../Features';
import QuestionOpitionStar from './QuestionOpitionStar';
import UserSuggest from './UserSuggest';

const Description = (props) => {

    const {
        numOfQuestions,
        numOfOpinions,
        star,
        userSuggestNumber,
        userSuggestPercent,
        features
    } = props;
    
    return (
        <Wrapper>
            <QuestionOpitionStar
                numOfQuestions={numOfQuestions}
                numOfOpinions={numOfOpinions}
                star={star}
            />

            <UserSuggest
                userSuggestNumber={userSuggestNumber}
                userSuggestPercent={userSuggestPercent}
            />

            {
                (features === null) || (features.length === 0) 
                    ?
                    null
                    :
                    <Features 
                        features={features}
                    />
            }
        </Wrapper>
    );
}

export default Description;

// const featuresCreator = () => {
//     if (features !== null && features.length !== 0) {
//         return (
//             features.map(item => {
//                 return (
//                     <div className="featureItem">
//                         <DotIcon />

//                         <p>{item.title}</p>

//                         <p>:</p>

//                         <p>{item.explanation}</p>    
//                     </div>
//                 );
//             })
//         );
//     }
// }


                {/* {
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
                } */}
            {/* </QuestionOpitionStar> */}