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
        responsiveMaxWidth,
        onClick,
        className
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
            onClick={onClick}
            className={className}
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
    responsiveMaxWidth: "1100px",
    onClick: console.log("this log is shown because onClick props is empty")
}

export default CustomContainer;