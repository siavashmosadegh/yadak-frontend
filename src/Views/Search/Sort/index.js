import React, { useEffect } from 'react';
import SortIcon from '../../../Icons/Search/SortIcon';
import {
    CheckIconContainer,
    SortIconContainer,
    SortingItemsDiv,
    SortWrapper
} from './styles';
import { useSelector,useDispatch } from 'react-redux';
import SearchActions from '../../../Redux/Search/Actions';
import { Drawer } from '@mui/material';
import CheckIcon from '../../../Icons/Search/CheckIcon';
import useWindowSize from '../../../Util/Hooks/UseWindowSize';

const Sort = () => {

    const dispatch = useDispatch();

    const size = useWindowSize();

    const {
        sortingItems,
        selectedSort,
        showSortDrawer
    } = useSelector((state) => state.Search);

    console.log(selectedSort);

    const sortingItemsContent = () => {
        return (
            <SortingItemsDiv>
                {sortingItems.map( (item) => {
                    return (
                        <div
                            className="sortingItem"
                            key={item.id}
                            id={item.id}
                            onClick={() => dispatch(SearchActions.selectSortingItemHandler(item))}
                            // selectedSortId={selectedSort.id}
                        >
                            <p style={{
                                color: `${(selectedSort !== null && selectedSort.id === item.id) ? "red" : "black"}`
                            }}>
                                {item.title}
                            </p>

                            {
                                (selectedSort !== null && selectedSort.id === item.id)
                                    ?
                                    <CheckIconContainer>
                                        <CheckIcon />
                                    </CheckIconContainer>
                                    :
                                    null
                            }
                        </div>
                    );
                })}
            </SortingItemsDiv>
        );
    }

    useEffect(() => {
        if (size.width > 1100) {
            dispatch(SearchActions.closeSortDrawerHandler({}));
        }
    },[size.width]);

    return (
        <SortWrapper>
            <SortIconContainer
                onClick={() => {
                    if (size.width < 1100) {
                        dispatch(SearchActions.showSortDrawerHandler({}));
                    }
                }}
            >
                <SortIcon />
            </SortIconContainer>

            <span style={{marginLeft: "5px"}}>مرتب سازی</span>

            <span style={{marginLeft: "5px"}}>:</span>
            
            <div className="bigScreen">
                {sortingItemsContent()}
            </div>

            <div className="drawerDiv">
                {
                    selectedSort !== null
                        ?
                        selectedSort.title
                        :
                        null
                }
                <Drawer
                    anchor='bottom'
                    open={showSortDrawer}
                    onClose={() => dispatch(SearchActions.closeSortDrawerHandler({}))}
                >
                    {sortingItemsContent()}
                </Drawer>
            </div>
        </SortWrapper>
    );
}

export default Sort;