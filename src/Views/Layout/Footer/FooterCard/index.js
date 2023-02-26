import React from 'react';
import { Wrapper } from './styles';

const FooterCard = (props) => {

    const {
        header,
        items
    } = props;

    return (
        <Wrapper>
            <h3>{header}</h3>

            {
                items.map( (item) => {
                    return (
                        <p key={item.id}>{item.title}</p>
                    );
                })
            }
        </Wrapper>
    );
}

export default FooterCard;