import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Root, StyledGrid } from './styles';
import GeneralActions from '../../../Redux/General/Actions';
import {Loader} from '../../../Shared/Loader/styles';
import {Grid} from '@mui/material';
import Irankhodro from '../../../Assets/SvgIcons/car-brands/irankhodro';
import Kia from '../../../Assets/SvgIcons/car-brands/kia';
import Mazda from '../../../Assets/SvgIcons/car-brands/mazda';
import Mercedes from '../../../Assets/SvgIcons/car-brands/mercedes';
import Saipa from '../../../Assets/SvgIcons/car-brands/saipa';
import Peugeot from '../../../Assets/SvgIcons/car-brands/peugeot';
import Hyundai from '../../../Assets/SvgIcons/car-brands/hyundai';

const MainPageCategories = () => {

    // const [items, setItems] = useState([]);

    const dispatch = useDispatch();

    var dict = {
        "11.png": <Saipa />,
        "10.png": <Irankhodro />,
        "9.png": <Mazda />,
        "8.png": <Peugeot />,
        "7.png": <Mercedes />,
        "6.png": <Kia />,
        "5.png": <Hyundai />
    };

    const {
        mainPageCategoriesItems,
        loading
    } = useSelector((state) => state.General);
    
    useEffect(() => {
        dispatch(GeneralActions.getItems({}));
    },[]);

    console.log(mainPageCategoriesItems);

    // useEffect(() => {
    //     setItems(mainPageCategoriesItems);
    // })

    // useEffect(() => {
    //     console.log(items);
    // });

    const ContentCreator = () => {
        if (loading === true) {
            return <Loader />
        } else {
            if (mainPageCategoriesItems !== null) {
                return (
                    mainPageCategoriesItems.map( (item, index) => {
                        console.log(item);
                        if (item !== null) {
                            return (
                                <StyledGrid
                                    container
                                    lg={2}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                    direction="column"
                                    // justifyContent="center"
                                    alignItems="center"
                                >
                                    {dict[item.image]}
                                    <p>
                                        {item.name}
                                    </p>
                                </StyledGrid>
                                // <StyledGrid  
                                //     item
                                //     lg={2}
                                //     md={4}
                                //     sm={6}
                                //     xs={12}
                                // >
                                //     {/* <img src={`../../Assets/images/${item.imageSrc}`} /> */}
                                //     {/* <img src={`/Assets/images/${item.imageSrc}`} /> */}
                                //     <img src="/Assets/images/5.jpeg" />
                                //     <p>
                                //         {item.title}
                                //     </p>
                                // </StyledGrid>
                            );
                        }
                    })
                );
            }
        }
    }
    
    return (
        <Root>
            <h3>دسته بندی بر اساس برند ماشین</h3>

            <Grid container>
                {ContentCreator()}
                {/* {ContentCreator()} */}
            </Grid>
        </Root>
    );
}

export default MainPageCategories;