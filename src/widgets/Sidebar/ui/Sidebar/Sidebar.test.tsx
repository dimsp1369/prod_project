import { fireEvent, screen } from '@testing-library/react';
import {
   RenderWithTranslation,
} from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
   test('Render Sidebar', () => {
      RenderWithTranslation(<Sidebar />);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });
   test('Sidebar collapse on click', () => {
      RenderWithTranslation(<Sidebar />);
      const toggle = screen.getByTestId('sidebar-toggle');
      fireEvent.click(toggle);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
   });
});
