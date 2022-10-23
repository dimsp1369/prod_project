import axios from 'axios';
import { USER_AUTH_LOCALSTORAGE } from 'shared/const/constants';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_AUTH_LOCALSTORAGE),
    },
});
