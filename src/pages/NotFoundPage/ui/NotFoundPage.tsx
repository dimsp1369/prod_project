import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';

import { PageContainer } from 'widgets/PageContainer/PageContainer';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <PageContainer className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Page Not Found')}
        </PageContainer>
    );
};
