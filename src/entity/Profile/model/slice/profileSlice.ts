import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserProfile } from '../services/getUserProfile';
import { Profile, ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(getUserProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
