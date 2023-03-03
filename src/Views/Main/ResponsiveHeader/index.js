import React from 'react';
import BasketIconTwo from '../../../Icons/BasketIconTwo';
import CategoryIcon from '../../../Icons/CategoryIcon';
import PersonThreeIcon from '../../../Icons/Header/PersonThreeIcon';
import QuestionMarkIcon from '../../../Icons/ProductIcons/QuestionMarkIcon';
import HeaderInputForm from '../Forms/HeaderInputForm';
import Logo from '../Header/Logo';
import RegisterLoginLink from '../Header/RegisterLoginLink';
import {
    BasketIconContainer,
    CategoryIconContainer,
    PersonThreeIconContainer,
    Wrapper
} from './styles';
import { useSelector } from 'react-redux';
import ResponsiveCategories from './ResponsiveCategories';
import GeneralActions from '../../../Redux/General/Actions';
import { useDispatch } from 'react-redux';

const ResponsiveHeader = () => {

    const dispatch = useDispatch();

    const {
        isLoggedIn
    } = useSelector((state) => state.Auth);

    return (
        <Wrapper>
            <div className="upperDiv">
                <QuestionMarkIcon />

                <Logo />

                <CategoryIconContainer
                    onClick={() => dispatch(GeneralActions.showResponsiveHeaderCategoriesModalHandler({}))}
                >
                    <CategoryIcon />
                </CategoryIconContainer>
            </div>

            <div className="lowerDiv">
                <div className="basketAndRegisterLogin">
                    <BasketIconContainer>
                        <BasketIconTwo />
                    </BasketIconContainer>

                    {
                        isLoggedIn === true
                            ?
                            <PersonThreeIconContainer>
                                <PersonThreeIcon />
                            </PersonThreeIconContainer>
                            :
                            <RegisterLoginLink />
                    }
                </div>
                <div className="formDiv">
                    <HeaderInputForm />
                </div>
            </div>

            <ResponsiveCategories />
        </Wrapper>
    );
}

export default ResponsiveHeader;