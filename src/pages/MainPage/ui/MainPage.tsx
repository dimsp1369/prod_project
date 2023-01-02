import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from 'widgets/PageContainer/PageContainer';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <PageContainer>
            {t('mainPage')}
        </PageContainer>
    );
};

export default MainPage;
