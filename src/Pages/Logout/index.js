import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '../../Routes/NameSpace';
import { useDispatch } from 'react-redux';
import AuthActions from '../../Redux/Auth/Actions';

const Logout = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(AuthActions.logout({}));

        navigate(routePaths.default);
    });

    return (
        <div>
        </div>
    );
}

export default Logout;