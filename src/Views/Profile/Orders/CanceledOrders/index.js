import React from 'react';
import { useSelector } from 'react-redux';
import Empty from '../../../Empty/index';
import { Wrapper } from './styles';

const CanceledOrders = () => {

    const {
        canceledOrders
    } = useSelector((state) => state.Orders);

    const canceledOrdersContent = () => {
        if (canceledOrders.length === 0) {
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
            {canceledOrdersContent()}
        </Wrapper>
    );
}

export default CanceledOrders;