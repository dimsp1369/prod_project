import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from 'shared/ui/PageContainer/PageContainer';

interface AboutPageProps {
   className?: string
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <PageContainer>
            {t('aboutUs')}
        </PageContainer>
    );
};

export default AboutPage;
