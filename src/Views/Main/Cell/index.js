import React from 'react';
import { CellWrapper } from './styles';

const Cell = (props) => {

    const { 
        item
    } = props;

    return (
        <CellWrapper>
            <p>{item.title}</p>

            <div className="price">
                <span>
                    {item.price}
                </span>

                <span className="discount">
                    {item.discount}
                </span>
            </div>
        </CellWrapper>
    );
}

export default Cell;