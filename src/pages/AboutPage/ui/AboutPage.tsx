import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
   className?: string
}

const AboutPage = ({ className }: AboutPageProps) => {
   const { t } = useTranslation('about');
   return (
      <div>
         {t('aboutUs')}
      </div>
   );
};

export default AboutPage;
