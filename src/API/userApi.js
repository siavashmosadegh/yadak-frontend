import axiosClient from './axiosClient';

export const getProfilePersonalInfoNamesApi = ({firstName, lastName}) => {
    return axiosClient.post('profile/personal-info/update-name', {firstName, lastName});
};