import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18ForTest from 'shared/config/i18n/i18ForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions {
   router?: string;
   initialState?: DeepPartial<StateSchema>
}

export function ComponentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const { router = '/', initialState } = options;
    return render(
        <MemoryRouter initialEntries={[router]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18ForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
