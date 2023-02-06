import React, {useState} from 'react';
import { Wrapper } from './styles';

const Menu = () => {

    const [data, setData] = useState([
        {headerTitle: "قطعات بدنه",items: null},
        {headerTitle: "موتور و اگزوز",items: null},
        {headerTitle: "برقی و الکتریکی",items: null},
        {headerTitle: "رینگ و لاستیک",items: null},
        {headerTitle: "روغن و فیلتر",items: null},
        {headerTitle: "قطعات داخلی",items: null},
        {headerTitle: "انتقال قدرت",items: null},
        {headerTitle: "فرمان ، جلوبندی و ترمز",items: null},
        {headerTitle: "لوازم جانبی و اسپرت",items: null},
        {headerTitle: "بلبرینگ ماشین",items: null},
        {headerTitle: "کاسه نمد ماشین",items: null},
        {headerTitle: "اورینگ ماشین",items: null},
        {headerTitle: "گردگیر ماشین",items: null},
        {headerTitle: "لوله های ماشین",items: null},
        {headerTitle: "تسمه ماشین",items: null},
        {headerTitle: "شلنگ ماشین",items: null}     
    ]);
    return (
        <Wrapper>
            <div className="menu">
                {data.map((item) => {
                    return (
                        <div className="menuItem">
                            {item.headerTitle}
                        </div>
                    );
                })}
            </div>
            <div className="subMenu">

            </div>
        </Wrapper>
    );
}

export default Menu;