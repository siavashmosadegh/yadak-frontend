import React, {useState} from 'react';
import BestSellerIcon from '../../../../Icons/BestSellerIcon';
import CategoryIcon from '../../../../Icons/CategoryIcon';
import DiscountIcon from '../../../../Icons/DiscountIcon';
import {
    IconContainer,
    CategoryItem,
    TextContainer,
    Wrapper,
    Item
} from './styles';
import Menu from './Menu';

const Categories = () => {

    const [showMenu, setShowMenu] = useState(false);

    // console.log(showMenu);

    return (
        <Wrapper>
            <Item className="firstTime">
                <TextContainer>
                    پرفروش ترین
                </TextContainer>
                <IconContainer>
                    <BestSellerIcon />
                </IconContainer>
            </Item>
            <Item className="secondTime">
                <TextContainer>
                    تخفیف ها
                </TextContainer>
                <IconContainer>
                    <DiscountIcon />
                </IconContainer>
            </Item>
            <CategoryItem 
                onMouseOver={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
            >
                <div className="textAndIcon">
                    <TextContainer>
                        دسته بندی
                    </TextContainer>
                    <IconContainer>
                        <CategoryIcon />
                    </IconContainer>
                </div>
                {
                    showMenu === true
                        ?
                        <Menu>
                            asd;lfkjasdfkl;jasdfkl;jasdkl;fj
                        </Menu>
                        :
                        null
                }
            </CategoryItem>
        </Wrapper>
    );
}

export default Categories;