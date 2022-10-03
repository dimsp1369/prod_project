import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18ForTest from 'shared/config/i18n/i18ForTest';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
   router?: string;
}

export function ComponentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const { router = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[router]}>
            <I18nextProvider i18n={i18ForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
