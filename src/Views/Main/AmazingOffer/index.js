import React from 'react';
import Cell from '../Cell/index';
import { Wrapper } from './styles';
import { useState } from 'react';
import Carousel from '../../../Kit-Components/Carousel/index';

const AmazingOffer = () => {

    const [data, setData] = useState([
        {id: 0,price: "انقد تومن",discount: "61%",title: "کتری"},
        {id: 1,price: "انقد تومن",discount: "61%",title: "منقل"},
        {id: 2,price: "انقد تومن",discount: "61%",title: "ماشین"},
        {id: 3,price: "انقد تومن",discount: "61%",title: "موبایل"},
        {id: 4,price: "انقد تومن",discount: "61%",title: "لبتاب"},
        {id: 5,price: "انقد تومن",discount: "61%",title: "کتری"},
        {id: 6,price: "انقد تومن",discount: "61%",title: "منقل"},
        {id: 7,price: "انقد تومن",discount: "61%",title: "ماشین"},
        {id: 8,price: "انقد تومن",discount: "61%",title: "موبایل"},
        {id: 9,price: "انقد تومن",discount: "61%",title: "لبتاب"},
        {id: 10,price: "انقد تومن",discount: "61%",title: "کتری"},
        {id: 11,price: "انقد تومن",discount: "61%",title: "منقل"},
        {id: 12,price: "انقد تومن",discount: "61%",title: "ماشین"},
        {id: 13,price: "انقد تومن",discount: "61%",title: "موبایل"},
        {id: 14,price: "انقد تومن",discount: "61%",title: "لبتاب"}
    ]);

    return (
        <Wrapper>
            <Carousel
                name="asdfasdf"
            >
                {data.map( (item) => {
                    return (
                        <Cell 
                            item={item}
                            key={item.id}
                        />
                    );
                })}
            </Carousel>
        </Wrapper>
    );
}

export default AmazingOffer;