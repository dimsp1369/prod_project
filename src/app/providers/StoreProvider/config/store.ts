import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { counter: counterReducer },
        devTools: _IS_DEV,
        preloadedState: initialState,
    });
}
