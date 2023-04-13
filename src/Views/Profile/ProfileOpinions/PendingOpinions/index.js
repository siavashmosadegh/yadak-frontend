import React, {useState} from 'react';
import { Wrapper } from './styles';
import Empty from '../../../Empty';

const PendingOpinions = () => {

    const [opinions, setOpinions] = useState([]);

    const opinionsContent = () => {
        if (opinions !== null || opinions.length === 0) {
            return  <Empty
                        title="در مورد تمام سفارشات نظر ثبت کرده اید"
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

export default PendingOpinions;