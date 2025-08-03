import React, {useState} from 'react';
import {
    IconContainer,
    MenuWrapper,
    StyledCustomContainer,
    StyledLink,
    UserCustomContainer,
    VerticalLine
} from './styles';
import routePaths from '../../../../Routes/NameSpace';
import ActivityIcon from '../../../../Icons/Profile/ActivityIcon';
import OrderIcon from '../../../../Icons/Header/OrderIcon';
import EmptyHeartIcon from '../../../../Icons/Header/EmptyHeartIcon';
import CommentIcon from '../../../../Icons/Header/CommentIcon';
import ExitIcon from '../../../../Icons/Header/ExitIcon';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';
import PersonTwoIcon from '../../../../Icons/Header/PersonTwoIcon';
import PersonThreeIcon from '../../../../Icons/Header/PersonThreeIcon';
import EditIcon from '../../../../Icons/Profile/EditIcon';
import { Link, useLocation } from 'react-router-dom';
import AddressPinLocationIcon from '../../../../Icons/Profile/AddressPinLocationIcon';

const Menu = () => {

    const location = useLocation();

    const [menuItems, setMenuItems] = useState([
        {id: 0,title: "خلاصه ی فعالیت ها",icon: <ActivityIcon />,goTo: routePaths.profile},
        {id: 1,title: "سفارش ها",icon: <OrderIcon />,goTo: routePaths.profileOrders},
        {id: 2,title: "لیست ها",icon: <EmptyHeartIcon />,goTo: routePaths.profileLists},
        {id: 3,title: "دیدگاه ها",icon: <CommentIcon />,goTo: routePaths.profileOpinions},
        {id: 4,title: "اطلاعات حساب کاربری",icon: <PersonTwoIcon />,goTo: routePaths.profilePersonalInfo},
        {id: 5,title: "آدرس",icon: <AddressPinLocationIcon />,goTo: routePaths.profileAddress},
        {id: 6,title: "خروج",icon: <ExitIcon />,goTo: routePaths.logout}
    ]);

    const menuItemsContent = () => {
        return (
            menuItems.map( (item) => {
                return (
                    <StyledLink
                        to={item.goTo}
                        location={location.pathname}
                    >
                        <StyledCustomContainer
                            key={item.id}
                            justifyContent="flex-start"
                            disableMediaQuery={true}
                        >
                            <VerticalLine 
                                isActive={ item.goTo === location.pathname }
                            />

                            <IconContainer>
                                {item.icon}
                            </IconContainer>
                            
                            <>
                                {item.title}
                            </>
                        </StyledCustomContainer>                    
                    </StyledLink>
                );
            })
        );
    }

    return (
        <MenuWrapper>
            <UserCustomContainer
                disableMediaQuery={true}
            >
                <CustomContainer
                    disableMediaQuery={true}
                    justifyContent="flex-start"
                >
                    <IconContainer>
                        <PersonThreeIcon />
                    </IconContainer>
                    
                    siavash mosadegh
                </CustomContainer>

                <Link to={routePaths.profilePersonalInfo}>
                    <IconContainer>
                        <EditIcon />
                    </IconContainer>
                </Link>
            </UserCustomContainer>
            {menuItemsContent()}
        </MenuWrapper>
    );
}

export default Menu;