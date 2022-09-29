import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18ForTest from 'shared/config/i18n/i18ForTest';

export function RenderWithTranslation(component: ReactNode) {
   return render(
      <I18nextProvider i18n={i18ForTest}>
         {component}
      </I18nextProvider>,
   );
}
