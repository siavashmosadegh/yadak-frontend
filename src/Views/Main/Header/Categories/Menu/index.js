import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Wrapper } from './styles';
import { 
    useSelector,
    useDispatch
} from 'react-redux';
import { Link } from 'react-router-dom';
import SubMenu from '../SubMenu';
import { fetchProductCategories } from '../../../../../Redux/General/Actions';

const Menu = () => {

    const dispatch = useDispatch();

    const {
        showResponsiveHeaderCategoriesModal,
        menuData,
        loading
    } = useSelector((state) => state.General);

    useEffect(() => {
        dispatch(fetchProductCategories());
    },[]);

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const [subMenuData, setSubMenuData] = useState([]);

    useEffect(() => {
        if (hoveredCategory !== null) {
            axios.get(`http://localhost:8080/api/v1/productType/get-product-type-by-category-id/${hoveredCategory}`)
            .then(function (response) {
              // handle success
              console.log(hoveredCategory);
              console.log(response.data.result);
              setSubMenuData(response.data.result);
              console.log(subMenuData);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              // always executed
            });
        }
    },[hoveredCategory]);

    return (
        <Wrapper>
            <div className="menu">
                {menuData?.result?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="menuItem"
                            onMouseEnter={() => setHoveredCategory(item.CategoryID)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            <Link to={`/search?category=${item.CategoryID}`}>
                                {item.FarsiCategoryName}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="subMenu">
                <SubMenu
                    subMenuData={subMenuData}
                />
            </div>
        </Wrapper>
    );
}

export default Menu;