import React, {useState} from 'react';
import CashOnDeliveryIcon from '../../Icons/Slogan/CashOnDeliveryIcon';
import FastDeliveryIcon from '../../Icons/Slogan/FastDeliveryIcon';
import OriginalityGuaranteeIcon from '../../Icons/Slogan/OriginalityGuaranteeIcon';
import SevenDayReturnGuarantee from '../../Icons/Slogan/SevenDayReturnGuarantee';
import TwentyFourHourSupportIcon from '../../Icons/Slogan/TwentyFourHourSupportIcon';
import { Wrapper } from './styles';

const Slogan = () => {

    const [items, setItems] = useState([
        {id: 0,title: "امکان تحویل اکسپرس",icon: <FastDeliveryIcon />},
        {id: 1,title: "پشتیبانی ۲۴ ساعته ، ۷ روز هفته",icon: <TwentyFourHourSupportIcon />},
        {id: 2,title: "امکان پرداخت در محل",icon: <CashOnDeliveryIcon />},
        {id: 3,title: "ضمانت ۷ روز بازگشت",icon: <SevenDayReturnGuarantee />},
        {id: 4,title: "ضمانت اصل بودن کالا",icon: <OriginalityGuaranteeIcon />}
    ]);

    const itemsCreator = () => {
        return (
            items.map((item) => {
                return (
                    <div className="item">
                        <span>{item.title}</span>
                        <span>{item.icon}</span>
                    </div>
                );
            })
        );
    }

    return (
        <Wrapper>
            {itemsCreator()}
        </Wrapper>
    );
}

export default Slogan;