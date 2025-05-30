import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    PriceSectionResponsive,
    ProductWrapper,
    RightDiv,
    RoutingItem,
    RoutingSection
} from './styles';
import {
    useSearchParams
} from 'react-router-dom';
import {
    getProductDetailsByProductID,
    getSelectedProductFeatures,
    getSelectedProductInventory
} from '../../Redux/Product/Actions';
import isAvailable from '../../Util/IsAvailable';
import Details from '../../Views/Product/Details';

const Product = () => {

    const ProductState = useSelector((state) => state.Product);
    const {
        showAskQuestionModal,
        showAnswerQuestionModal,
        selectedProduct,
        selectedProductFeatures,
        selectedProductInventory,
        selectedProductCar
    } = ProductState;

    console.log(`selectedProduct ID: ${selectedProduct?.ProductID}`);

    const dispatch = useDispatch();

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
        if (selectedProduct !== null && selectedProduct !== undefined) {
            return (
                <FirstSectionWrapper>
                    {leftDivContent()}
    
                    {rightDivContent()}
                </FirstSectionWrapper>
            );
        }
    }

    const leftDivContent = () => {
        return (
            <LeftDiv>
                {/* <h3>{selectedProduct.ProductName}</h3> */}

                {isAvailable(selectedProduct) && (
                    <h3>{selectedProduct.ProductName}</h3>
                )}

                <div className="description">
                    <div style={{width: "50%",display: "flex",flexDirection: "column",padding: "5px"}}>
                        {isAvailable(selectedProductFeatures) && (
                            <Description
                                numOfQuestions={5}
                                numOfOpinions={5}
                                star={5}
                                userSuggestNumber={5}
                                userSuggestPercent={5}
                                features={selectedProductFeatures}
                            />
                        )}
                    </div>

                    <div style={{width: "50%",display: "flex",flexDirection: "column",padding: "5px"}}>
                        {isAvailable(selectedProductInventory?.result) && isAvailable(selectedProduct) && (
                            <Store
                                available={selectedProductInventory.result}
                                price={selectedProduct.Price}
                            />
                        )}

                        <PricingProcess />

                        {isAvailable(selectedProduct) && (
                            <Details
                                productId={selectedProduct.ProductID}
                            />
                        )}
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
        if (selectedProduct !== null && selectedProduct !== undefined) {
            return (
                <FirstSectionResponsiveWrapper>
                    {rightDivContent()}
    
                    {isAvailable(selectedProduct) && (
                        <h3>{selectedProduct.ProductName}</h3>
                    )}
    
                    <QuestionOpitionStar 
                        star={5}
                        numOfOpinions={5}
                        numOfQuestions={5}
                    />
    
                    <UserSuggest 
                        userSuggestNumber={5}
                        userSuggestPercent={5}
                    />            
    
                    {isAvailable(selectedProductInventory?.result) && isAvailable(selectedProduct) && (
                        <Store
                            available={selectedProductInventory?.result}
                            price={selectedProduct?.Price}
                        />
                    )}

                    {
                        (selectedProductFeatures?.result === null) || (selectedProductFeatures?.result.length === 0) || (selectedProductFeatures?.result === "There are not any product features with the provided product id")
                            ?
                            null
                            :
                            <Features 
                                features={selectedProductFeatures}
                            />
                    }
    
                    <PricingProcess />

                    {isAvailable(selectedProduct) && (
                        <Details
                            productId={selectedProduct.ProductID}
                        />
                    )}
                </FirstSectionResponsiveWrapper>
            );
        }
    }

    // Initialize useSearchParams to access query parameters
    const [searchParams] = useSearchParams();

    // Get the initial `productID` parameter from the URL
    const initialProductID = searchParams.get('productID');

    // Initialize useState with the productID value
    const [productID, setProductID] = useState(initialProductID || '');

    // Sync the productID state if it changes in the URL
    useEffect(() => {
        if (initialProductID !== productID) {
            setProductID(initialProductID || '');
        }
    }, [initialProductID, productID]);

    useEffect(() => {
        if (productID !== null && productID !== undefined) {
            dispatch(getProductDetailsByProductID(productID));
        }
    },[productID]);

    useEffect(() => {
        if (productID !== null && productID !== undefined) {
            dispatch(getSelectedProductFeatures(productID));
        }
    },[productID]);

    useEffect(() => {
        if (productID ?? false) {
            dispatch(getSelectedProductInventory(productID));
        }
    }, [productID]);

    return (
        <Layout>
            <ProductWrapper>
                {routingItemsContent()}

                {firstSection()}

                {firstSectionResponsive()}

                <Slogan />

                {/* <Questions 
                    questions={selectedProduct.questions}
                /> */}

                <PriceSectionResponsive>
                    <p>قیمت مصرف کننده</p>

                    <div className="priceAndButton">
                        <span>{selectedProduct?.Price.toLocaleString()}</span>

                        <button>افزودن به سبد</button>
                    </div>
                </PriceSectionResponsive>

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