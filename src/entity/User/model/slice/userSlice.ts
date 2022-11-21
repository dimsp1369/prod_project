import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_AUTH_LOCALSTORAGE } from 'shared/const/constants';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_AUTH_LOCALSTORAGE);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_AUTH_LOCALSTORAGE);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
