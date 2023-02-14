import React, { useState } from 'react';
import Layout from '../../Views/Layout/index';
import {
    FirstSectionWrapper,
    RoutingItem,
    RoutingSection
} from './styles';

const Product = () => {

    const [routingItems, setRoutingItems] = useState([
        {id: 0,title: "سیاوش یدک"},
        {id: 1,title: "موبایل"},
        {id: 2,title: "گوشی موبایل"}
    ]);

    const routingItemsContent = () => {
        return (
            <RoutingSection>
                {
                    routingItems.map( (item) => {
                        return (
                            <RoutingItem key={item.id}>
                                <div className="titleDiv">
                                    {item.title}
                                </div>
                                {
                                    (routingItems.length - 1) !== item.id
                                        ?
                                        <div>/</div>
                                        :
                                        null
                                }
                            </RoutingItem>
                        )
                    })
                }
            </RoutingSection>
        );
    }

    const firstSection = () => {
        return (
            <FirstSectionWrapper>
                
            </FirstSectionWrapper>
        );
    }

    return (
        <Layout>
            {routingItemsContent()}
        </Layout>
    );
}

export default Product;