import { Grid } from '@mui/material';
import React, { useState } from 'react';
import AparatIcon from '../../../Icons/Footer/AparatIcon';
import InstagramIcon from '../../../Icons/Footer/InstagramIcon';
import LinkedinIcon from '../../../Icons/Footer/LinkedinIcon';
import TwitterIcon from '../../../Icons/Footer/TwitterIcon';
import NewsletterForm from '../../Main/Forms/NewsletterForm';
import FooterCard from './FooterCard';
import { Wrapper } from './styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {

    const location = useLocation();

    const [isProduct, setIsProduct] = useState(false);

    useEffect(() => {
        if (location.pathname.includes('/product')) {
            setIsProduct(true);
        } else {
            setIsProduct(false);
        }
    });

    const [first, setFirst] = useState({
        header: "با دیجیکالا",
        items: [
            {id: 0,title: "اتاق خبر سیاوش یدک",link: ""},
            {id: 1,title: "فروش در سیاوش یدک",link: ""},
            {id: 2,title: "فرصت های شغلی",link: ""},
            {id: 3,title: "گزارش تخلف در دیجیکالا",link: ""},
            {id: 4,title: "تماس با دیجیکالا",link: ""},
            {id: 5,title: "درباره دیجیکالا",link: ""}
        ]
    });

    const [second, setSecond] = useState({
        header: "خدمات مشتریان",
        items: [
            {id: 0,title: "پاسخ به پرسش های متداول",link: ""},
            {id: 1,title: "رویه های بازگرداندن کالا",link: ""},
            {id: 2,title: "شرایط استفاده",link: ""},
            {id: 3,title: "حریم خصوصی",link: ""},
            {id: 4,title: "گزارش باگ",link: ""}
        ]
    });

    const [third, setThird] = useState({
        header: "راهنمای خرید از دیجیکالا",
        items: [
            {id: 0,title: "نحوه ثبت سفارش",link: ""},
            {id: 1,title: "رویه ارسال سفارش",link: ""},
            {id: 2,title: "شیوه های پرداخت",link: ""}
        ]
    });

    const [icons, setIcons] = useState([
        {id: 0,icon: <InstagramIcon />,link: ""},
        {id: 1,icon: <TwitterIcon />,link: ""},
        {id: 2,icon: <LinkedinIcon />,link: ""},
        {id: 3,icon: <AparatIcon />,link: ""}
    ])

    return (
        <Wrapper isProduct={isProduct}>
            <Grid container flexDirection="row-reverse">
                <Grid item lg={3} md={4} sm={6} xs={12} sx={{border: "1px solid red",paddingInline: "10px"}} justifyContent="flex-start" flexDirection="column">
                    <FooterCard 
                        header={first.header}
                        items={first.items}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12} sx={{border: "1px solid red",paddingInline: "10px"}} justifyContent="flex-start" flexDirection="column">
                    <FooterCard 
                        header={second.header}
                        items={second.items}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12} sx={{border: "1px solid red",paddingInline: "10px"}} justifyContent="flex-start" flexDirection="column">
                    <FooterCard 
                        header={third.header}
                        items={third.items}
                    />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12} sx={{border: "1px solid red",paddingInline: "10px"}} justifyContent="flex-start" flexDirection="column">
                    <h3>همراه ما باشید</h3>

                    <div className="iconsDiv">
                        {
                            icons.map( (item) => {
                                return <a>{item.icon}</a>
                            })
                        }
                    </div>

                    <p>با ثبت ایمیل از جدیدترین تخفیف ها باخبر شوید</p>

                    <NewsletterForm />
                </Grid>
            </Grid>
            {/* <div style={{width: "auto"}}>
            </div>

            <div style={{width: "auto"}}>
            </div>

            <div style={{width: "auto"}}>
            </div> */}
        </Wrapper>
    );
}

export default Footer;