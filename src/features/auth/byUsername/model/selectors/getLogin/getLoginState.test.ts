import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from './getLoginState';

describe('getLoginState', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'admin' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('If empty state, should return username', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });

    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: '2323' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('2323');
    });
    test('If empty state, should return password', () => {
        const state: DeepPartial<StateSchema> = { };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: { error: 'error' },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });

    test('If empty state, should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('If empty state, should return true', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
