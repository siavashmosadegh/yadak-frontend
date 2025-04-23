import React from 'react';
import { FeaturesWrapper } from './styles';
import DotIcon from '../../../../Icons/ProductIcons/DotIcon';

const Features = (props) => {

    const {
        features
    } = props;
    
    const featuresCreator = () => {

        if (features.result !== null && features.result.length !== 0) {
            return (
                features.result.map(item => {
                    return (
                        <div className="featureItem">
                            <DotIcon />

                            <p>{item.Title}</p>

                            <p>:</p>

                            <p>{item.Explanation}</p>    
                        </div>
                    );
                })
            );
        }
    }

    return (
        <FeaturesWrapper>
            <h3>ویژگی ها</h3>

            {featuresCreator()}
        </FeaturesWrapper>
    );
}

export default Features;