import axiosClient from './axiosClient';

export const updateProfilePersonalInfoNamesApi = ({firstName, lastName}) => {
    return axiosClient.post('profile/personal-info/update-name', {firstName, lastName});
};

export const getProfilePersonalInfoRequestApi = () => {
    return axiosClient.get('/profile/get-user-profile');
};