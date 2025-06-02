import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

const ResponsiveCategoryItem = (props) => {

    const [selectedItemId, setSelectedItemId] = useState(null);

    const {
        item,
        activeCategoryItem,
        setActiveCategoryItem
    } = props;

    const {
        CategoryID,
        CategoryName,
        Description,
        CreatedDate,
        FarsiCategoryName
    } = item;

    const subItemsContent = () => {
        if (subMenuData !== null && subMenuData.length !== 0 && subMenuData !== "There is no product type with the provided category id") {
            return (
                subMenuData.map( (item) => {
                    return (
                        <SubItemsDiv>
                            <Link
                                to={`/product-category?productType=${item.productTypeID}`}
                                style={{marginRight: "10px",marginBottom: "4px"}}
                            >
                                {item.productTypeNameFarsi}
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
        //if (items !== null && items.length !== 0) {
            return (
                <ItemsDiv>
                    <div className="allOfTheThings">
                        <Link to={`/search?category=${CategoryID}`}>همه ی موارد این دسته</Link>

                        <LeftArrowIconContainer>
                            <LeftArrowIcon />
                        </LeftArrowIconContainer>
                    </div>
                    {/* 
                        اینجا چیزی که در انتهای فایل هست نوشته شده بود
                    */}
                </ItemsDiv>
            );
        //}
    }

    const onClickActiveCategoryItemHandler = () => {
        if (activeCategoryItem === CategoryID) {
            setActiveCategoryItem(null);
        } else {
            setActiveCategoryItem(CategoryID);
        }
    }

    const [subMenuData, setSubMenuData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/productType/get-product-type-by-category-id/${CategoryID}`)
        .then(function (response) {
            // handle success
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
    },[]);

    return (
        <Wrapper>
            <div
                className="headerTitleDiv"
                onClick={onClickActiveCategoryItemHandler}
            >
                <span>
                    {FarsiCategoryName}
                </span>

                <DownAndUpIconContainer
                    id={CategoryID}
                    activeCategoryItem={activeCategoryItem}
                >
                    {
                        CategoryID === activeCategoryItem
                            ?
                            <UpArrowIcon />
                            :
                            <DownArrowIcon />
                    }
                </DownAndUpIconContainer>
            </div>
            {
                CategoryID === activeCategoryItem
                    ?
                    itemsContent()
                    :
                    null
            }

            {
                CategoryID === activeCategoryItem
                    ?
                    subItemsContent()
                    :
                    null
            }
        </Wrapper>
    );
}

export default ResponsiveCategoryItem;

// {items.map( (item) => {
//     return (
//         <>
//             <div
//                 className="itemDiv"
//                 // onClick={() => setSelectedItemId(item.id)}
//                 onClick={() => {
//                     if (selectedItemId === item.id) {
//                         setSelectedItemId(null);
//                     } else {
//                         setSelectedItemId(item.id);
//                     }
//                 }}
//                 id={item.id}
//                 selectedItemId={selectedItemId}
//             >
//                 {item.itemTitle}

//                 <DownAndUpItemIconContainer
//                     selectedItemId={selectedItemId}
//                     id={item.id}
//                 >
//                     {
//                         item.id === selectedItemId
//                             ?
//                             <UpArrowIcon />
//                             :
//                             <DownArrowIcon />
//                     }
//                 </DownAndUpItemIconContainer>                            
//             </div>
//             {
//                 selectedItemId === item.id
//                     ?
//                     <>
//                         <div className="allOfTheThings">
//                             <Link to={item.goTo}>همه ی موارد این دسته</Link>

//                             <LeftArrowIconContainer>
//                                 <LeftArrowIcon />
//                             </LeftArrowIconContainer>
//                         </div>
//                         {/* {subItemsContent(item.subItems)} */}
//                     </>
//                     :
//                     null
//             }
//             {/* <div>
//                 {subItemsContent(item.subItems)}
//             </div> */}
//         </>
//     );
// })}
