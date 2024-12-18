import React, { useEffect , useState} from 'react';
import {
    Column,
    Wrapper
} from './styles';
import SubMenuItem from './SubMenuItem';
import OneDimensionalArrayToTwoDimensionalArray from '../../../../../Util/OneDimensionalArrayToTwoDimensionalArray';  

const SubMenu = (props) => {

    const {
        subMenuData
    } = props;

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const distributedColumns = OneDimensionalArrayToTwoDimensionalArray(subMenuData, 10);
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
                                <SubMenuItem
                                    key={itemIndex}
                                    title={item.productTypeNameFarsi}
                                />
                            );
                        })}
                    </Column>
                );
            })}
        </Wrapper>
    );
}

export default SubMenu;