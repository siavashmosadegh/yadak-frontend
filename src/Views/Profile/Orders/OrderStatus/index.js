import React from 'react';
import {
    Wrapper,
    StatusContainer,
    NextStepCustomContainer
} from './styles';
import { LinearProgress } from '@mui/material';

const OrderStatus = (props) => {

    const {
        status,
        nextStepStatus,
        linearProgressValue
    } = props;

    return (
        <Wrapper>
            <StatusContainer
                disableMediaQuery={true}
            >
                <p className="currentStatus">{status}</p>

                {
                    nextStepStatus !== null
                    ?
                        <NextStepCustomContainer
                            disableMediaQuery={true}
                        >
                                <p className="text">مرحله بعد</p>

                                <p>:</p>

                                <p className="processed">{nextStepStatus}</p>
                        </NextStepCustomContainer>
                    :
                        null
                }
            </StatusContainer>

            <LinearProgress variant="determinate" value={linearProgressValue} sx={{width: "100%",height: "5px",rotate: "180deg"}}/>
        </Wrapper>
    );
}

export default OrderStatus