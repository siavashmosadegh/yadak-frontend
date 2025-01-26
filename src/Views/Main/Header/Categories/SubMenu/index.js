import React, { useEffect , useState} from 'react';
import {
    Column,
    Wrapper
} from './styles';
import SubMenuItem from './SubMenuItem';
import OneDimensionalArrayToTwoDimensionalArray from '../../../../../Util/OneDimensionalArrayToTwoDimensionalArray';  
import { Link } from 'react-router-dom';

const SubMenu = (props) => {

    const {
        subMenuData
    } = props;

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const distributedColumns = OneDimensionalArrayToTwoDimensionalArray(subMenuData, 13);
        setColumns(distributedColumns);
        console.log(distributedColumns);
    },[subMenuData]);

    return (
        <Wrapper>
            {columns.map((column, columnIndex) => {
                return (
                    <Column key={columnIndex}>
                        {column.map((item, itemIndex) => {
                            return (
                                <Link to={`/product-category/?category=${item.categoryID}&productType=${item.productTypeID}`}>
                                    <SubMenuItem
                                        key={itemIndex}
                                        title={item.productTypeNameFarsi}
                                    />
                                </Link>
                            );
                        })}
                    </Column>
                );
            })}
        </Wrapper>
    );
}

export default SubMenu;