import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entity/Profile/model/types/profileSchema';
import { Profile } from '../types/profileSchema';
import { validateProfileData } from './validateProfileData/validateProfileData';
import { getProfileForm } from '../selectors/getProfileSelector/getProfileSelector';

export const updateUserProfile = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateUserProfile',
    async (_, ThunkAPI) => {
        const {
            dispatch, extra, rejectWithValue, getState,
        } = ThunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
