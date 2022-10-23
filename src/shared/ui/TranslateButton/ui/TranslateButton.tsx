import { classNames } from 'shared/lib/classNames/className';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface TranslateButtonProps {
    className?: string
}

export const TranslateButton = memo(({ className }: TranslateButtonProps) => {
    const { t, i18n } = useTranslation('navbar');
    const onTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onTranslate}
        >
            {t('translate')}
        </Button>
    );
});
