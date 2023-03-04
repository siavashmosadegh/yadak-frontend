import React, {useState} from 'react';
import DownArrowIcon from '../../../../../Icons/Header/DownArrowIcon';
import UpArrowIcon from '../../../../../Icons/Header/UpArrowIcon';
import {
    DownAndUpIconContainer,
    DownAndUpItemIconContainer,
    ItemsDiv,
    Wrapper
} from './styles';

const ResponsiveCategoryItem = (props) => {

    const [selectedItemId, setSelectedItemId] = useState(null);

    const {
        item,
        activeCategoryItem,
        setActiveCategoryItem
    } = props;

    const {
        id,
        headerTitle,
        goTo,
        items,
    } = item;

    const itemsContent = () => {
        if (items !== null && items.length !== 0) {
            return (
                <ItemsDiv>
                    {items.map( (item) => {
                        return (
                            <div
                                className="itemDiv"
                                onClick={() => setSelectedItemId(item.id)}
                            >
                                {
                                    item.itemTitle
                                }
    
                                <DownAndUpItemIconContainer
                                    selectedItemId={selectedItemId}
                                    id={item.id}
                                >
                                    {
                                        item.id === selectedItemId
                                            ?
                                            <UpArrowIcon />
                                            :
                                            <DownArrowIcon />
                                    }
                                </DownAndUpItemIconContainer>                            
                            </div>
                        );
                    })}
                </ItemsDiv>
            );
        }
    }

    return (
        <Wrapper>
            <div
                className="headerTitleDiv"
                onClick={() => setActiveCategoryItem(id)}
            >
                {headerTitle}

                <DownAndUpIconContainer
                    id={id}
                    activeCategoryItem={activeCategoryItem}
                >
                    {
                        id === activeCategoryItem
                            ?
                            <UpArrowIcon />
                            :
                            <DownArrowIcon />
                    }
                </DownAndUpIconContainer>
            </div>
            {
                id === activeCategoryItem
                    ?
                    itemsContent()
                    :
                    null
            }
        </Wrapper>
    );
}

export default ResponsiveCategoryItem;