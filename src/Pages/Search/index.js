import React from 'react';
import Layout from '../../Views/Layout';
import Filter from '../../Views/Search/Filter';
import Sort from '../../Views/Search/Sort';
import { FilterIconContainer, SearchWrapper } from './styles';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ProductListItem from '../../Views/Search/ProductListItem';
import FilterIcon from '../../Icons/Search/FilterIcon';

const Search = () => {

    const {
        productList
    } = useSelector((state) => state.Product);

    const productListContent = () => {
        return (
            <Grid container>
                {productList.map( (item) => {
                    return (
                        <Grid item lg={4} md={6} sm={12} display="flex" justifyContent="center">
                            <ProductListItem
                                key={item.id}
                                item={item}
                            />
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
                    <FilterIconContainer>
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

            </SearchWrapper>
        </Layout>
    );
}

export default Search;