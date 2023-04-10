import React from 'react';
import { useSelector } from 'react-redux';
import Empty from '../../../Empty/index';
import { Wrapper } from './styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import CanceledOrderItem from './CanceledOrderItem';

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
        } else {
            return (
                <CustomContainer
                    disableMediaQuery={true}
                    flexDirection="column"
                >
                    {
                        canceledOrders.map( (item) => {
                            return (
                                <CanceledOrderItem
                                    item={item}
                                />
                            );
                        })
                    }
                </CustomContainer>
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