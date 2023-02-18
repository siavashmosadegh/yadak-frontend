import React from 'react';
import { FeaturesWrapper } from './styles';
import DotIcon from '../../../../Icons/ProductIcons/DotIcon';

const Features = (props) => {

    const {
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
        <FeaturesWrapper>
            <h3>ویژگی ها</h3>

            {featuresCreator()}
        </FeaturesWrapper>
    );
}

export default Features;