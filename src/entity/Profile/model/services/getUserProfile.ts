import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profileSchema';

export const getUserProfile = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    'profile/getProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!profileId) {
            return rejectWithValue('Error');
        }
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
