import React from 'react';
import SortIcon from '../../../Icons/Search/SortIcon';
import {
    SortIconContainer,
    SortingItemsDiv,
    SortWrapper
} from './styles';
import { useSelector,useDispatch } from 'react-redux';
import SearchActions from '../../../Redux/Search/Actions';

const Sort = () => {

    const dispatch = useDispatch();

    const {
        sortingItems,
        selectedSort
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
                            <p>
                                {item.title}
                            </p>
                        </div>
                    );
                })}
            </SortingItemsDiv>
        );
    }

    return (
        <SortWrapper>
            <SortIconContainer>
                <SortIcon />
            </SortIconContainer>

            <span>مرتب سازی</span>

            <span>:</span>

            {sortingItemsContent()}
        </SortWrapper>
    );
}

export default Sort;