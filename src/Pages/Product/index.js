import React, { useState } from 'react';
import Layout from '../../Views/Layout/index';
import Description from '../../Views/Product/FirstSection/Description';
import Store from '../../Views/Product/FirstSection/Store';
import {
    FirstSectionWrapper,
    LeftDiv,
    PictureDiv,
    RoutingItem,
    RoutingSection
} from './styles';

const Product = () => {

    const [item, setItem] = useState({
        id: 1902374982374,
        title: "ساب ووفر خودرو پایونیر مدل تی اس دبلیو سیصدو دوازده دی چهارده",
        star: 4.3, // first section
        opinion: 92, // first section
        question: 170, // first section
        userSuggestPercent: "89%", // first section
        userSuggestNumber: 50, // first section
        features: [
            {id: 0,title: "آمپرها",explanation: "بنزین"},
            {id: 1,title: "فضای حمل بار",explanation: "ندارد"},
            {id: 2,title: "نوع رادیاتور",explanation: "بدون رادیاتور"},
            {id: 3,title: "نوع چراغ",explanation: "لامپ رشته ای"}
        ],
        available: false
    });

    const [routingItems, setRoutingItems] = useState([
        {id: 0,title: "سیاوش یدک"},
        {id: 1,title: "موبایل"},
        {id: 2,title: "گوشی موبایل"}
    ]);

    const routingItemsContent = () => {
        return (
            <RoutingSection>
                {
                    routingItems.map( (item) => {
                        return (
                            <RoutingItem key={item.id}>
                                <div className="titleDiv">
                                    {item.title}
                                </div>
                                {
                                    (routingItems.length - 1) !== item.id
                                        ?
                                        <div>/</div>
                                        :
                                        null
                                }
                            </RoutingItem>
                        )
                    })
                }
            </RoutingSection>
        );
    }

    const firstSection = () => {
        return (
            <FirstSectionWrapper>
                {leftDivContent()}

                {pictureDivContent()}
            </FirstSectionWrapper>
        );
    }

    const leftDivContent = () => {
        return (
            <LeftDiv>
                <h3>{item.title}</h3>

                <div className="description">
                    <Description 
                        numOfQuestions={item.question}
                        numOfOpinions={item.opinion}
                        star={item.star}
                        userSuggestNumber={item.userSuggestNumber}
                        userSuggestPercent={item.userSuggestPercent}
                        features={item.features}
                    />

                    <Store 
                        available={item.available}
                    />
                </div>
            </LeftDiv>
        );
    }

    const pictureDivContent = () => {
        return (
            <PictureDiv>
                picture
            </PictureDiv>
        );
    }

    return (
        <Layout>
            {routingItemsContent()}

            {firstSection()}
        </Layout>
    );
}

export default Product;