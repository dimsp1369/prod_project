import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entity/Profile';
import { getProfileForm } from '../selectors/getProfileSelector/getProfileSelector';

export const updateUserProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateUserProfile',
    async (_, ThunkAPI) => {
        const {
            dispatch, extra, rejectWithValue, getState,
        } = ThunkAPI;

        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
