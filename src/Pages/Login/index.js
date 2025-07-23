import React from 'react';
import LoginRegisterForm from '../../Views/Main/Forms/LoginRegisterForm';
import { Wrapper } from './styles';
import {useNavigate, useLocation, Navigate} from "react-router-dom";
import MobileOtpForm from '../../Views/Main/Forms/MobileOtpForm/MobileOtpForm';
import { useSelector } from 'react-redux';

const Login = () => {

    const location = useLocation();

    console.log(localStorage.getItem("backURL"));

    const {
        step,
        error
    } = useSelector((state) => state.Auth);

    return (
        <Wrapper height={window.innerHeight}>
            <div className="box">
                <h3>سیاوش یدک</h3>

                <p className="loginRegisterText">ورود | ثبت نام</p>

                <p className="description">لطفا شماره موبایل خود را وارد کنید</p>

                {step === 'initial' && (
                    <LoginRegisterForm />
                )}

                {step === 'verify' && location.pathname === '/login' && (
                    <MobileOtpForm />
                )}

                {step === 'verified' && (
                    <Navigate to={localStorage.getItem("backURL")} />
                )}

                {
                    error !== null || error !== undefined
                        ?
                        <p>{error}</p>
                        :
                        null
                }
            </div>
        </Wrapper>
    );
}

export default Login;