import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateUserProfile } from 'entity/Profile';
import { getUserProfile } from '../services/getUserProfile';
import { Profile, ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    form: undefined,
    data: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        declineUpdate: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateError = [];
        },
        saveUpdate: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        // GET USER PROFILE
        builder.addCase(getUserProfile.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(getUserProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        });
        builder.addCase(getUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        // UPDATE USER PROFILE
        builder.addCase(updateUserProfile.pending, (state) => {
            state.validateError = undefined;
            state.isLoading = true;
        });
        builder.addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.readonly = true;
            state.form = action.payload;
            state.data = action.payload;
            state.validateError = undefined;
        });
        builder.addCase(updateUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.validateError = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
