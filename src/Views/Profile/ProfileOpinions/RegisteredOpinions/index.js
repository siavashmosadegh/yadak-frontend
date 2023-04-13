import React from 'react';
import { Wrapper } from './styles';
import { useState } from 'react';
import Empty from '../../../Empty';

const RegisteredOpinions = () => {

    const [opinions, setOpinions] = useState([]);

    const opinionsContent = () => {
        if (opinions.length === 0 || opinions === null) {
            return  <Empty
                        title="هنوز هیچ نظری ندادید"
                        width="100%"
                        height="400px"
                    />
        }
    }
    
    return (
        <Wrapper>
            {opinionsContent()}
        </Wrapper>
    );
}

export default RegisteredOpinions;