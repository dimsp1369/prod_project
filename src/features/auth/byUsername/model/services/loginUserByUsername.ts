import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entity/User';
import { USER_AUTH_LOCALSTORAGE } from 'shared/const/constants';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginUserByUsernameProps {
   username: string;
   password: string;
}

export const loginUserByUsername = createAsyncThunk<User, LoginUserByUsernameProps, ThunkConfig<string>>(
    'login/byUsername',
    async (authData, {
        dispatch,
        extra,
        rejectWithValue,
    }) => {
        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_AUTH_LOCALSTORAGE, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
