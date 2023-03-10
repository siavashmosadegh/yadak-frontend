import { Modal } from '@mui/material';
import React from 'react';
import MultiplyIcon from '../../Icons/ProductIcons/MultiplyIcon';
import { Wrapper } from './styles';

const CustomModal = (props) => {

    const {
        width,
        height,
        closeCustomModalHandler,
        headerTitle,
        modalBackgroundColor,
        headerHeight,
        mediaQueryBreakpoint
    } = props;

    return (
        <Modal
            open={true}
            sx={{display: "flex",alignItems: "center",justifyContent: "center"}}
        >
            <Wrapper
                width={width}
                height={height}
                modalBackgroundColor={modalBackgroundColor}
                headerHeight={headerHeight}
                mediaQueryBreakpoint={mediaQueryBreakpoint}
            >
                <div className="header">
                    <span>{headerTitle}</span>

                    <span
                        onClick={closeCustomModalHandler}
                    >
                        <MultiplyIcon />
                    </span>
                </div>

                <div className="content">
                    {props.children}
                </div>
            </Wrapper>
        </Modal>
    );
}

export default CustomModal;