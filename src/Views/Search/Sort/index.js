import React, {useState} from 'react';
import SortIcon from '../../../Icons/Search/SortIcon';
import { SortIconContainer, SortingItemsDiv, SortWrapper } from './styles';

const Sort = () => {

    const [sortingItems, setSortingItems] = useState([
        {id: 0,title: "مرتبط ترین"},
        {id: 1,title: "پربازدید ترین"},
        {id: 2,title: "جدید ترین"},
        {id: 3,title: "پرفروش ترین"},
        {id: 4,title: "ارزان ترین"},
        {id: 5,title: "گران ترین"},
        {id: 6,title: "سریع ترین ارسال"},
        {id: 7,title: "پیشنهاد خریداران"},
        {id: 8,title: "منتخب"}
    ]);

    const [selectedSortingItemId, setSelectedSortingItemId] = useState(null);

    const sortingItemsContent = () => {
        return (
            <SortingItemsDiv>
                {sortingItems.map( (item) => {
                    return (
                        <div
                            className="sortingItem"
                            key={item.id}
                            onClick={() => setSelectedSortingItemId(item.id)}
                            id={item.id}
                            selectedSortingItemId={selectedSortingItemId}
                        >
                            {item.title}
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