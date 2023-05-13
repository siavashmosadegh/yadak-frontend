import React from 'react';
import { Button } from './styles';

const CustomButton = (props) => {

    const {
        width,
        height,
        title,
        backgroundColor,
        disabledBackgroundColor,
        borderRadius,
        border,
        disabledBorder,
        color,
        disabledColor,
        fontSize,
        fontWeight,
        onClick,
        type,
        disabled
    } = props;

    return (
        <Button
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            disabledBackgroundColor={disabledBackgroundColor}
            borderRadius={borderRadius}
            border={border}
            disabledBorder={disabledBorder}
            color={color}
            disabledColor={disabledColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {title}
        </Button>
    );
}

CustomButton.defaultProps = {
    backgroundColor: "red",
    disabledBackgroundColor: "white",
    color: "white",
    disabledColor: "red",
    border: "none",
    disabledBorder: "1px solid red",
    onClick: () => console.log("siavash"),
    type:"submit",
    disabled: false
}

export default CustomButton;