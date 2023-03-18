import React from 'react';
import { Wrapper } from './styles';

const CustomContainer = (props) => {

    const {
        disableMediaQuery,
        display,
        flexDirection,
        alignItems,
        justifyContent,
        responsiveFlexDirection,
        responsiveMaxWidth
    } = props;

    return (
        <Wrapper
            disableMediaQuery={disableMediaQuery}
            display={display}
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            responsiveFlexDirection={responsiveFlexDirection}
            responsiveMaxWidth={responsiveMaxWidth}
        >
            {props.children}
        </Wrapper>
    );
}

CustomContainer.defaultProps = {
    disableMediaQuery: false,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    responsiveFlexDirection: "column",
    responsiveMaxWidth: "1100px"
}

export default CustomContainer;