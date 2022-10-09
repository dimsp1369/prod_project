import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/test/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Render Counter', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment by click Btn', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const toggle = screen.getByTestId('increment-btn');
        fireEvent.click(toggle);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement by click Btn', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const toggle = screen.getByTestId('decrement-btn');
        fireEvent.click(toggle);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
