import React from 'react';
import { useSelector } from 'react-redux';
import Empty from '../../../Empty/index';
import { Wrapper } from './styles';

const SuccessfulOrders = () => {

    const {
        successfulOrders
    } = useSelector((state) => state.Orders);

    const successfulOrdersContent = () => {
        if (successfulOrders.length === 0) {
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
            {successfulOrdersContent()}
        </Wrapper>
    );
}

export default SuccessfulOrders;