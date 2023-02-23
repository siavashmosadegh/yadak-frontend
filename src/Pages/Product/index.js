import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
import AnswerQuestionModal from '../../Views/Product/Modals/AnswerQuestionModal';
import AskQuestionModal from '../../Views/Product/Modals/AskQuestionModal';
import PricingProcess from '../../Views/Product/PricingProcess';
import Questions from '../../Views/Questions';
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

    const ProductState = useSelector((state) => state.Product);
    const {
        showAskQuestionModal,
        showAnswerQuestionModal
    } = ProductState;

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
        price: 171000,
        questions: [
            {
                id: 0,
                question: "سلام وقت بخیر توی دیوار پیچ میشه یا فقط همینجوری توی باکس قرار میگیره؟کناف تی وی تحمل وزنشو داره؟",
                answers: [
                    {id: 0,answer: "درود بر شما که بهترین هستید هر دو را میتوانید انجام بدهید به شرطی که کناف شما راویز کاری شده باشد اصولی تر میشود ولی ادر کل تحمل میکنه و ما تو مغازه ها و نمایندگی هامون حتی پشت کارو یدونه برگ سوراخ میکنیم تا بتونیم مدلها رو تغیر بدیم هر ماه و شما اگه اینجا بودید میدیدید که هیچ پیچ و مهره ای در کار نیست ولی اصولی نمیشه"},
                    {id: 1,answer: "درود بر شما که بهترین هستید هر دو را میتوانید انجام بدهید به شرطی که کناف شما راویز کاری شده باشد اصولی تر میشود ولی ادر کل تحمل میکنه و ما تو مغازه ها و نمایندگی هامون حتی پشت کارو یدونه برگ سوراخ میکنیم تا بتونیم مدلها رو تغیر بدیم هر ماه و شما اگه اینجا بودید میدیدید که هیچ پیچ و مهره ای در کار نیست ولی اصولی نمیشه"}
                ]
            },
            {id: 1,question: "سوال 1",answers: []},
            {id: 2,question: "سوال 2",answers: []},
            {id: 3,question: "سوال 3",answers: []},
            {id: 4,question: "سوال 4",answers: []},
            {id: 5,question: "سوال 5",answers: []},
            {id: 6,question: "سوال 7",answers: []},
            {id: 7,question: "سوال 8",answers: []}
        ]
    });

    const [routingItems, setRoutingItems] = useState([
        {id: 0,title: "سیاوش یدک"},
        {id: 1,title: "موبایل"},
        {id: 2,title: "گوشی موبایل"}
    ]);

    // const [showAskQuestionModal, setShowAskQuestionModal] = useState(false);

    // const showAskQuestionModalHandler = () => {
    //     setShowAskQuestionModal(true);
    // }

    // const closeAskQuestionModalHandler = () => {
    //     setShowAskQuestionModal(false);
    // }

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
                    <div style={{width: "50%",display: "flex",flexDirection: "column",padding: "5px"}}>
                        <Description 
                            numOfQuestions={item.question}
                            numOfOpinions={item.opinion}
                            star={item.star}
                            userSuggestNumber={item.userSuggestNumber}
                            userSuggestPercent={item.userSuggestPercent}
                            features={item.features}
                        />
                    </div>

                    <div style={{width: "50%",display: "flex",flexDirection: "column",padding: "5px"}}>
                        <Store 
                            available={item.available}
                            price={item.price}
                        />
                        <PricingProcess />
                    </div>
                </div>

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

                <PricingProcess />
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

                <Questions 
                    questions={item.questions}
                />

                {
                    showAskQuestionModal === true
                        ?
                        <AskQuestionModal />
                        :
                        null
                }

                {
                    showAnswerQuestionModal === true
                        ?
                        <AnswerQuestionModal />
                        :
                        null
                }
            </ProductWrapper>
        </Layout>
    );
}

export default Product;