import axiosClient from './axiosClient';

export const verifyOtp = ({ mobile, otp }) => {
    return axiosClient.post('/login/verify-otp', { mobile, otp });
};

export const requestOtp = ({ mobile }) => {
    return axiosClient.post('/login/request-otp', { mobile });
};