import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer = combineReducers<StateSchema>({
        counter: counterReducer,
        user: userReducer,
    });

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: _IS_DEV,
        preloadedState: initialState,
    });
}
