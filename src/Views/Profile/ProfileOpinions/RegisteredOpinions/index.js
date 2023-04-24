import React from 'react';
import { Wrapper } from './styles';
import { useState } from 'react';
import Empty from '../../../Empty';
import RegisteredOpinionItem from './RegisteredOpinionItem';
import img1 from '../../../../Assets/images/1.jpg';
import ProfileSubmitOpinionModal from '../../Modals/ProfileSubmitOpinionModal';
import { useSelector } from 'react-redux';
import DeleteOpinionModal from '../../Modals/DeleteOpinionModal';

const RegisteredOpinions = () => {

    const {
        showEditOpinionModal,
        showDeleteOpinionModal
    } = useSelector((state) => state.Orders)

    const [opinions, setOpinions] = useState([
        {
            id: 0,
            product: {
                id: 0,
                title: "شسکینمبت شسیمکنبت شسیمکنبت شسهخ شسص صث ق صثق صث ق صثق یب س یب سیب",
                imgSrc: img1
            },
            opinionTitle: "خوب بود",
            image: img1,
            opinionText: "شسیبخشخحع شسی ب شسیب ص ثق صثق بیس لیب  یب یب یبل یسب سیب سی بس یب سیب",
            score: 1,
            status: "تایید شده",
            suggestion: "like"
        },
        {
            id: 1,
            product: {
                id: 0,
                title: "شسکینمبت شسیمکنبت شسیمکنبت شسهخ شسص صث ق صثق صث ق صثق یب س یب سیب",
                imgSrc: img1
            },
            opinionTitle: "خوب بود",
            image: img1,
            opinionText: "شسیبخشخحع شسی ب شسیب ص ثق صثق بیس لیب  یب یب یبل یسب سیب سی بس یب سیب",
            score: 2,
            status: "در حال بررسی",
            suggestion: "dislike"
        },
        {
            id: 2,
            product: {
                id: 0,
                title: "شسکینمبت شسیمکنبت شسیمکنبت شسهخ شسص صث ق صثق صث ق صثق یب س یب سیب",
                imgSrc: img1
            },
            opinionTitle: "خوب بود",
            image: img1,
            opinionText: "شسیبخشخحع شسی ب شسیب ص ثق صثق بیس لیب  یب یب یبل یسب سیب سی بس یب سیب",
            score: 3,
            status: "در حال بررسی",
            suggestion: "question"
        },
        {
            id: 3,
            product: {
                id: 0,
                title: "شسکینمبت شسیمکنبت شسیمکنبت شسهخ شسص صث ق صثق صث ق صثق یب س یب سیب",
                imgSrc: img1
            },
            opinionTitle: "خوب بود",
            image: img1,
            opinionText: "شسیبخشخحع شسی ب شسیب ص ثق صثق بیس لیب  یب یب یبل یسب سیب سی بس یب سیب",
            score: 4,
            status: "در حال بررسی",
            suggestion: "question"
        }
    ]);

    const opinionsContent = () => {
        if (opinions.length === 0 || opinions === null) {
            return  <Empty
                        title="هنوز هیچ نظری ندادید"
                        width="100%"
                        height="400px"
                    />
        } else {
            return (
                opinions.map( (item) => {
                    return (
                        <RegisteredOpinionItem
                            item={item}
                            key={item.id}
                        />
                    );
                })
            )
        }
    }
    
    return (
        <Wrapper>
            {opinionsContent()}

            {
                showEditOpinionModal === true
                    ?
                    <ProfileSubmitOpinionModal
                        type="edit"
                    />
                    :
                    null
            }

            {
                showDeleteOpinionModal === true
                    ?
                    <DeleteOpinionModal />
                    :
                    null
            }
        </Wrapper>
    );
}

export default RegisteredOpinions;