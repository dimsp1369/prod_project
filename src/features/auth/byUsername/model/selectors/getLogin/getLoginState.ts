import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state.login?.username || '';
export const getLoginPassword = (state: StateSchema) => state.login?.password || '';
export const getLoginError = (state: StateSchema) => state.login?.error || undefined;
export const getLoginIsLoading = (state: StateSchema) => state.login?.isLoading || false;
