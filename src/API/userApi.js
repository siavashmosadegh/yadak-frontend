import axiosClient from './axiosClient';

export const updateProfilePersonalInfoNamesApi = ({firstname, lastname}) => {
    return axiosClient.post('profile/personal-info/update-name', {
        firstName: firstname,
        lastName: lastname
    });
};

export const getProfilePersonalInfoRequestApi = () => {
    return axiosClient.get('/profile/get-user-profile');
};