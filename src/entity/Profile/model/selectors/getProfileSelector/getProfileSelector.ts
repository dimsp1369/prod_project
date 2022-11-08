import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
export const getProfileForm = (state: StateSchema) => state.profile?.form;
export const getProfileError = (state: StateSchema) => state.profile?.error || undefined;
export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading || false;
export const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly || false;
