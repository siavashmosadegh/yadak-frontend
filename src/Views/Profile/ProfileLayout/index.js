import React from 'react';
import Menu from './Menu';
import { Wrapper } from './styles';

const ProfileLayout = (props) => {
    return (
        <Wrapper
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <div className="menu">
                <Menu />
            </div>
            
            <div className="children">
                {props.children}
            </div>
        </Wrapper>
    );
}

export default ProfileLayout;