import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DownArrowIcon from '../../../../../Icons/Header/DownArrowIcon';
import LeftArrowIcon from '../../../../../Icons/Header/LeftArrowIcon';
import UpArrowIcon from '../../../../../Icons/Header/UpArrowIcon';
import {
    DownAndUpIconContainer,
    DownAndUpItemIconContainer,
    ItemsDiv,
    LeftArrowIconContainer,
    SubItemsDiv,
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

    // const onClickSelectedItemIdHandler = () => {
    //     if (activeCategoryItem === id) {
    //         setActiveCategoryItem(null);
    //     } else {
    //         setActiveCategoryItem(id);
    //     }
    // }

    const subItemsContent = (subItems) => {
        if (subItems !== null && subItems !== 0) {
            return (
                subItems.map( (item) => {
                    return (
                        <SubItemsDiv>
                            <Link to={item.goTo}>
                                {item.subItemTitle}
                            </Link>

                            <LeftArrowIconContainer>
                                <LeftArrowIcon />
                            </LeftArrowIconContainer>
                        </SubItemsDiv>
                    );
                })
            );
        }
    }

    const itemsContent = () => {
        if (items !== null && items.length !== 0) {
            return (
                <ItemsDiv>
                    <div className="allOfTheThings">
                        <Link to={goTo}>همه ی موارد این دسته</Link>

                        <LeftArrowIconContainer>
                            <LeftArrowIcon />
                        </LeftArrowIconContainer>
                    </div>
                    {items.map( (item) => {
                        return (
                            <>
                                <div
                                    className="itemDiv"
                                    // onClick={() => setSelectedItemId(item.id)}
                                    onClick={() => {
                                        if (selectedItemId === item.id) {
                                            setSelectedItemId(null);
                                        } else {
                                            setSelectedItemId(item.id);
                                        }
                                    }}
                                    id={item.id}
                                    selectedItemId={selectedItemId}
                                >
                                    {item.itemTitle}
        
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
                                {
                                    selectedItemId === item.id
                                        ?
                                        <>
                                            <div className="allOfTheThings">
                                                <Link to={item.goTo}>همه ی موارد این دسته</Link>

                                                <LeftArrowIconContainer>
                                                    <LeftArrowIcon />
                                                </LeftArrowIconContainer>
                                            </div>
                                            {subItemsContent(item.subItems)}
                                        </>
                                        :
                                        null
                                }
                                {/* <div>
                                    {subItemsContent(item.subItems)}
                                </div> */}
                            </>
                        );
                    })}
                </ItemsDiv>
            );
        }
    }

    const onClickActiveCategoryItemHandler = () => {
        if (activeCategoryItem === id) {
            setActiveCategoryItem(null);
        } else {
            setActiveCategoryItem(id);
        }
    }

    return (
        <Wrapper>
            <div
                className="headerTitleDiv"
                onClick={onClickActiveCategoryItemHandler}
            >
                <span>
                    {headerTitle}
                </span>

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