import React, { useState } from 'react';
import AddToListIcon from '../../Icons/ProductIcons/AddToListIcon';
import BellAlertIcon from '../../Icons/ProductIcons/BellAlertIcon';
import CompareIcon from '../../Icons/ProductIcons/CompareIcon';
import EmptyHeartIcon from '../../Icons/ProductIcons/EmptyHeartIcon';
import ShareIcon from '../../Icons/ProductIcons/ShareIcon';
import Layout from '../../Views/Layout/index';
import Description from '../../Views/Product/FirstSection/Description';
import QuestionOpitionStar from '../../Views/Product/FirstSection/Description/QuestionOpitionStar';
import UserSuggest from '../../Views/Product/FirstSection/Description/UserSuggest';
import Features from '../../Views/Product/FirstSection/Features';
import Store from '../../Views/Product/FirstSection/Store';
import PricingProcess from '../../Views/Product/PricingProcess';
import Slogan from '../../Views/Slogan';
import {
    FirstSectionResponsiveWrapper,
    FirstSectionWrapper,
    LeftDiv,
    ProductWrapper,
    RightDiv,
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
        available: true,
        price: 171000
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

                {rightDivContent()}
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
                        price={item.price}
                    />
                </div>

                {/* <PricingProcess /> */}
            </LeftDiv>
        );
    }

    const rightDivContent = () => {
        return (
            <RightDiv>
                <div className="icons">
                    <EmptyHeartIcon />

                    <ShareIcon />

                    <BellAlertIcon />

                    <CompareIcon />

                    <AddToListIcon />
                </div>

                <div className="picture">
                    <img src="/Assets/images/1.jpg"/>
                </div>
            </RightDiv>
        );
    }

    const firstSectionResponsive = () => {
        return (
            <FirstSectionResponsiveWrapper>
                {rightDivContent()}

                <h3>{item.title}</h3>

                <QuestionOpitionStar 
                    star={item.star}
                    numOfOpinions={item.opinion}
                    numOfQuestions={item.question}
                />

                <UserSuggest 
                    userSuggestNumber={item.userSuggestNumber}
                    userSuggestPercent={item.userSuggestPercent}
                />            

                <Store
                    available={item.available}
                    price={item.price}
                />

                {
                    (item.features === null) || (item.features.length === 0)
                        ?
                        null
                        :
                        <Features 
                            features={item.features}
                        />
                }

                {/* <PricingProcess /> */}
            </FirstSectionResponsiveWrapper>
        );
    }

    return (
        <Layout>
            <ProductWrapper>
                {routingItemsContent()}

                {firstSection()}

                {firstSectionResponsive()}

                <Slogan />
            </ProductWrapper>
        </Layout>
    );
}

export default Product;