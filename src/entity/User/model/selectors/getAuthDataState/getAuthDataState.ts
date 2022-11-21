import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthDataState = (state: StateSchema) => state.user.authData;
export const getUserInited = (state: StateSchema) => state.user._inited;
