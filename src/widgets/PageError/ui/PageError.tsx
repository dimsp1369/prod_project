import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Oops...Something went wrong!')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};
