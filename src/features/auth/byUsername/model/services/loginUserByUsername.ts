import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entity/User';
import { USER_AUTH_LOCALSTORAGE } from 'shared/const/constants';

interface LoginUserByUsernameProps {
   username: string
   password: string
}

export const loginUserByUsername = createAsyncThunk<User, LoginUserByUsernameProps, {rejectValue: string}>(
    'login/byUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_AUTH_LOCALSTORAGE, JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('Error');
        }
    },
);
