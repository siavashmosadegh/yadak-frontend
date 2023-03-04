import { Drawer } from '@mui/material';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BestSellerIcon from '../../../../Icons/BestSellerIcon';
import DiscountIcon from '../../../../Icons/DiscountIcon';
import GeneralActions from '../../../../Redux/General/Actions';
import Logo from '../../Header/Logo';
import ResponsiveCategoryItem from './ResponsiveCategoryItem';
import {
    IconContainer,
    Item,
    TextContainer,
    Wrapper
} from './styles';

const ResponsiveCategories = () => {

    const dispatch = useDispatch();

    const {
        showResponsiveHeaderCategoriesModal,
        menuData
    } = useSelector((state) => state.General);

    const [activeCategoryItem, setActiveCategoryItem] = useState(null);

    const responsiveCategoriesItems = () => {
        return (
            menuData.map( (item) => {
                return (
                    <ResponsiveCategoryItem 
                        item={item}
                        activeCategoryItem={activeCategoryItem}
                        setActiveCategoryItem={setActiveCategoryItem}
                    />
                );
            })
        );
    }

    return (
        <Drawer
            anchor='right'
            open={showResponsiveHeaderCategoriesModal}
            onClose={() => dispatch(GeneralActions.closeResponsiveHeaderCategoriesModalHandler({}))}
        >
            <Wrapper>
                <Logo />

                <Item>
                    <IconContainer>
                        <DiscountIcon />
                    </IconContainer>

                    <TextContainer>
                        تخفیف ها
                    </TextContainer>
                </Item>

                <Item>
                    <IconContainer>
                        <BestSellerIcon />
                    </IconContainer>
                    <TextContainer>
                        پرفروش ترین
                    </TextContainer>
                </Item>

                {responsiveCategoriesItems()}
            </Wrapper>
        </Drawer>
    );
}

export default ResponsiveCategories;