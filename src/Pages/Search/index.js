import React, {useEffect, useState} from 'react';
import Layout from '../../Views/Layout';
import Filter from '../../Views/Search/Filter';
import Sort from '../../Views/Search/Sort';
import {
    SearchWrapper,
    FilterIconContainer
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import ProductListItem from '../../Views/Search/ProductListItem';
import FilterIcon from '../../Icons/Search/FilterIcon';
import FilterModal from '../../Views/Search/Modals/FilterModal';
import SearchActions from '../../Redux/Search/Actions';
import {Link} from 'react-router-dom';
import ProductActions from '../../Redux/Product/Actions';
import { useParams } from 'react-router-dom';

const Search = () => {

    const dispatch = useDispatch();

    const {category} = useParams();
    
    const [categoryID, setCategoryID] = useState(category);

    useEffect(() => {
        setCategoryID(category);
    }, [category]);

    // useEffect(() => {
    //     dispatch(OrdersActions.selectActiveOpinionTab(title));
    //     dispatch({ type: 'SEARCH_PRODUCT_BY_CATEGORY_ID' , data });
    // });

    const {
        showFilterModal
    } = useSelector((state) => state.Search);

    const {
        productList
    } = useSelector((state) => state.Product);

    const productListContent = () => {
        return (
            <Grid container>
                {productList.map( (item) => {
                    return (
                        <Grid 
                            item
                            lg={4}
                            md={6}
                            sm={12}
                            xs={12}
                            display="flex"
                            justifyContent="center"
                            onClick={() => dispatch(ProductActions.selectProductHandler(item))}
                        >
                            <Link
                                to={item.productLink}
                                // target={'_blank'}
                            >
                                <ProductListItem
                                    key={item.id}
                                    item={item}
                                />
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }

    return (
        <Layout>
            <SearchWrapper>
                <Sort />

                <div className="responsiveFilter">
                    <FilterIconContainer
                        onClick={() => dispatch(SearchActions.showFilterModalHandler({}))}
                    >
                        <FilterIcon />
                    </FilterIconContainer>

                    <p>فیلتر ها</p>
                </div>
                
                <div className="lowerDiv">
                    
                    <div className="filterDiv">
                        <Filter />
                    </div>

                    <div className="productListDiv">
                        {productListContent()}
                    </div>
                </div>

                {
                    showFilterModal === true
                        ?
                        <FilterModal />
                        :
                        null
                }
            </SearchWrapper>
        </Layout>
    );
}

export default Search;