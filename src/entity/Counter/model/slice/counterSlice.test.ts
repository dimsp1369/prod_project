import { counterReducer, CounterSchema } from 'entity/Counter';
import { counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    const state: CounterSchema = { value: 10 };
    test('decrement value', () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment value', () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
