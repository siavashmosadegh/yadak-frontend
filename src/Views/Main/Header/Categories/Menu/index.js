import React , {useEffect} from 'react';
import { Wrapper } from './styles';
import { 
    useSelector,
    useDispatch
} from 'react-redux';

const Menu = () => {

    const dispatch = useDispatch();

    const {
        showResponsiveHeaderCategoriesModal,
        menuData,
        loading
    } = useSelector((state) => state.General);

    useEffect(() => {
        dispatch({ type: 'FETCH_PRODUCT_CATEGORIES_REQUEST' });
    }, []);

    return (
        <Wrapper>
            <div className="menu">
                {menuData.result.map((item) => {
                    return (
                        <div className="menuItem">
                            {item.FarsiCategoryName}
                        </div>
                    );
                })}
            </div>
            <div className="subMenu">

            </div>
        </Wrapper>
    );
}

export default Menu;