import { Drawer } from '@mui/material';
import React, {useEffect, useState} from 'react';
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
import useWindowSize from '../../../../Util/Hooks/UseWindowSize';

const ResponsiveCategories = () => {

    const dispatch = useDispatch();

    const size = useWindowSize();

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
                        key={item.id}
                        item={item}
                        activeCategoryItem={activeCategoryItem}
                        setActiveCategoryItem={setActiveCategoryItem}
                    />
                );
            })
        );
    }

    useEffect(() => {
        if (size.width > 1100) {
            dispatch(GeneralActions.closeResponsiveHeaderCategoriesModalHandler({}));
        }
    },[size.width]);

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