import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';

interface MainPageProps {
   className?: string
}

const MainPage = ({ className }: MainPageProps) => {
   const { t } = useTranslation('main');
   return (
      <div>
         <BugButton />
         {t('mainPage')}
      </div>
   );
};

export default MainPage;
