import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Empty from '../../../Empty/index';
import { Wrapper } from './styles';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import OngoingOrderItem from './OngoingOrderItem';
import { Link } from 'react-router-dom';
import OrdersActions from '../../../../Redux/Orders/Actions';

const OngoingOrders = () => {

    const dispatch = useDispatch();

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
        } else {
            return (
                <CustomContainer
                    disableMediaQuery={true}
                    flexDirection="column"
                >
                    {
                        onGoingOrders.map( (item) =>  {
                            return (
                                <Link
                                    to={item.orderLink}
                                    onClick={() => dispatch(OrdersActions.selectOrder(item))}
                                >
                                    <OngoingOrderItem
                                        item={item}
                                    />
                                </Link>                                
                            );
                        })
                    }
                </CustomContainer>
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