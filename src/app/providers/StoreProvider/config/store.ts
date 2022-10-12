import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { loginReducer } from 'features/auth/byUsername';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer = combineReducers<StateSchema>({
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    });

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: _IS_DEV,
        preloadedState: initialState,
    });
}
