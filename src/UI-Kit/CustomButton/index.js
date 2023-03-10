import React from 'react';
import { Button } from './styles';

const CustomButton = (props) => {

    const {
        width,
        height,
        title,
        backgroundColor,
        borderRadius,
        border,
        color,
        fontSize,
        fontWeight,
        onClick,
        type
    } = props;

    return (
        <Button
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            border={border}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            onClick={onClick}
            type={type}
        >
            {title}
        </Button>
    );
}

CustomButton.defaultProps = {
    onClick: () => console.log("siavash"),
    type:"submit"
}

export default CustomButton;