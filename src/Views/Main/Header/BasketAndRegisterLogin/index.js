import React, {useState} from 'react';
import {
    BasketIconContainer,
    PersonAndReverseTriangleContainer,
    PersonIconContainer,
    ProfileItemsContainer,
    ReverseTriangleIconContainer,
    Wrapper
} from './styles';
import BasketIconTwo from '../../../../Icons/BasketIconTwo';
import { Link } from 'react-router-dom';
import routePaths from '../../../../Routes/NameSpace';
import {useLocation} from 'react-router-dom';
import PersonIcon from '../../../../Icons/Header/PersonIcon';
import ReverseTriangleIcon from '../../../../Icons/Header/ReverseTriangleIcon';
import OrderIcon from '../../../../Icons/Header/OrderIcon';
import EmptyHeartIcon from '../../../../Icons/Header/EmptyHeartIcon';
import CommentIcon from '../../../../Icons/Header/CommentIcon';
import ExitIcon from '../../../../Icons/Header/ExitIcon';
import PersonTwoIcon from '../../../../Icons/Header/PersonTwoIcon';
import LeftArrowIcon from '../../../../Icons/LeftArrowIcon';
import RegisterLoginLink from '../RegisterLoginLink';
import { useSelector } from 'react-redux';

const BasketAndRegisterLogin = () => {

    const location = useLocation();

    const myFunc = () => {
        localStorage.setItem("backURL", location.pathname);
    }

    const {
        isLoggedIn
    } = useSelector((state) => state.Auth);

    const [showProfileDiv, setShowProfileDiv] = useState(false);

    const changeShowProfileDivHandler = () => {
        setShowProfileDiv(!showProfileDiv);
    }

    const [profileDivItems, setProfileDivItems] = useState([
        {id: 0,title: "سفارش ها",goTo: routePaths.profileOrders,icon: <OrderIcon />},
        {id: 1,title: "لیست ها",goTo: routePaths.profileLists,icon: <EmptyHeartIcon />},
        {id: 2,title: "دیدگاه ها",goTo: routePaths.profileOpinions,icon: <CommentIcon />},
        {id: 3,title: "خروج از حساب کاربری",goTo: routePaths.logout,icon: <ExitIcon />}
    ]);

    return (
        <Wrapper>
            {/* <BasketIconContainer> */}
                {/* <BasketIcon /> */}
            {/* </BasketIconContainer> */}

            <BasketIconContainer>
                <BasketIconTwo />
            </BasketIconContainer>

            {
                isLoggedIn === false
                    ?
                    <RegisterLoginLink />
                    :
                    <div style={{position: "relative"}}>
                        <PersonAndReverseTriangleContainer onClick={changeShowProfileDivHandler} showProfileDiv={showProfileDiv}>
                            <ReverseTriangleIconContainer>
                                <ReverseTriangleIcon />
                            </ReverseTriangleIconContainer>

                            <PersonIconContainer>
                                <PersonIcon />
                            </PersonIconContainer>
                        </PersonAndReverseTriangleContainer>
                        {
                            showProfileDiv === true
                                ?
                                <ProfileItemsContainer>
                                    <Link to={routePaths.profile} style={{ textDecoration: 'none' ,color: "black"}}>
                                        <div className="singleItem">
                                            <div className="personIconAndName">
                                                <PersonTwoIcon />

                                                <span>
                                                    کاربر عزیز
                                                </span>                                        
                                            </div>

                                            <div className="leftArrowIconContainer">
                                                <LeftArrowIcon />
                                            </div>
                                        </div>
                                    </Link>
                                    {
                                        profileDivItems.map( (item) => {
                                            return (
                                                <Link to={item.goTo} style={{ textDecoration: 'none' ,color: "black"}}>
                                                    <div className="profileItem">
                                                        {item.icon}

                                                        <span className="profileItemTitle">
                                                            {item.title}
                                                        </span>
                                                    </div>                                                
                                                </Link>
                                            );
                                        })
                                    }
                                </ProfileItemsContainer>
                                :
                                null
                        }                    
                    </div>
            }

        </Wrapper>
    );
}

export default BasketAndRegisterLogin;