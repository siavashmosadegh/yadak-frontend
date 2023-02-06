import { Stack } from '@mui/material';
import React from 'react';

const MainPageCategoryItem = (props) => {

    const {
        item
    } = props;

    return (
        <Stack>
            <img src={item.imageSrc} alt="als" />

            {item.name}
        </Stack>
    );
}

export default MainPageCategoryItem;