import React , {useEffect} from 'react';
import { Wrapper } from './styles';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import { Link } from 'react-router-dom';

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
                            <Link to={`search?category=${item.CategoryID}`}>
                                {item.FarsiCategoryName}
                            </Link>
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