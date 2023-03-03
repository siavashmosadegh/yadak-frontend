import { Drawer } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BestSellerIcon from '../../../../Icons/BestSellerIcon';
import GeneralActions from '../../../../Redux/General/Actions';
import Logo from '../../Header/Logo';
import { IconContainer, Item, Line, TextContainer, Wrapper } from './styles';

const ResponsiveCategories = () => {

    const dispatch = useDispatch();

    const {
        showResponsiveHeaderCategoriesModal
    } = useSelector((state) => state.General);


    return (
        <Drawer
            anchor='right'
            open={showResponsiveHeaderCategoriesModal}
            onClose={() => dispatch(GeneralActions.closeResponsiveHeaderCategoriesModalHandler({}))}
        >
            <Wrapper>
                <Logo />

                <Line />

                <Item>
                    <IconContainer>
                        <BestSellerIcon />
                    </IconContainer>

                    <TextContainer>
                        تفیف هامون
                    </TextContainer>
                </Item>
            </Wrapper>
        </Drawer>
    );
}

export default ResponsiveCategories;