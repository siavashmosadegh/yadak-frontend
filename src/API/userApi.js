import axiosClient from './axiosClient';

export const updateProfilePersonalInfoNamesApi = ({firstName, lastName}) => {
    return axiosClient.post('profile/personal-info/update-name', {firstName, lastName});
};