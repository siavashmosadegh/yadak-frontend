import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '../../Routes/NameSpace';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(routePaths.default);

        // removing token from app
    });

    return (
        <div>
        </div>
    );
}

export default Logout;