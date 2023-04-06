import React from 'react';
import { useSelector } from 'react-redux';
import Empty from '../../../Empty/index';
import { Wrapper } from './styles';

const OngoingOrders = () => {

    const {
        onGoingOrders
    } = useSelector((state) => state.Orders);

    const onGoingOrdersContent = () => {
        if (onGoingOrders.length === 0) {
            return (
                <Empty
                    title="هنوز هیچ سفارشی ثبت نکرده اید"
                    width="100%"
                    height="400px"
                />
            );
        }
    }

    return (
        <Wrapper>
            {onGoingOrdersContent()}
        </Wrapper>
    );
}

export default OngoingOrders;