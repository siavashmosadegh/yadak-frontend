import React from 'react';
import { useSelector } from 'react-redux';
import Empty from '../../../Empty/index';
import { Wrapper } from './styles';

const ReturnedOrders = () => {

    const {
        returnedOrders
    } = useSelector((state) => state.Orders);

    const returnedOrdersContent = () => {
        if (returnedOrders.length === 0) {
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
            {returnedOrdersContent()}
        </Wrapper>
    );
}

export default ReturnedOrders;