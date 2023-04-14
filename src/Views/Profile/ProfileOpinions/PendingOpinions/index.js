import React, {useState} from 'react';
import { Wrapper } from './styles';
import Empty from '../../../Empty';
import img1 from '../../../../Assets/images/1.jpg';
import PendingOptionItem from './PendingOptionItem';
import { Grid } from '@mui/material';

const PendingOpinions = () => {

    const [opinions, setOpinions] = useState([
        {id: 0,title: "شسکینمبت شسیمکنبت شسیمکنبت شسهخ شسص صث ق صثق صث ق صثق یب س یب سیب",imgSrc: img1},
        {id: 1,title: "صثق سی بس یب ل یب ای بل سیب شیسی بیب سیب سی بسش یب سق ثل با لا ن تعان بلا یبسل یس ل",imgSrc: img1},
        {id: 2,title: "al;skdfj a sdf asdf w er sdf sd fs df qweg f hgj hk gh j fg dfg dsf gsd sdf",imgSrc: img1},
        {id: 3,title: "sdfsdfsdfsdfdf",imgSrc: img1}
    ]);

    const opinionsContent = () => {
        if (opinions === null || opinions.length === 0) {
            return  <Empty
                        title="در مورد تمام سفارشات نظر ثبت کرده اید"
                        width="100%"
                        height="400px"
                    />
        } else {
            return (
                <Grid container>
                    {
                        opinions.map( (item) => {
                            return (
                                <Grid
                                    item
                                    xl={4}
                                    lg={6}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    padding="10px"
                                >
                                    <PendingOptionItem
                                        key={item.id}
                                        item={item}
                                    />
                                </Grid>
                            );  
                        })
                    }
                </Grid>
            );
        }
    }

    return (
        <Wrapper>
            {opinionsContent()}
        </Wrapper>
    );
}

export default PendingOpinions;