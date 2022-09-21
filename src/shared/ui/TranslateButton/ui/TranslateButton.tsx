import {classNames} from "shared/lib/classNames/className";
import cls from './TranslateButton.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface TranslateButtonProps {
    className?: string
}

export const TranslateButton = ({className}: TranslateButtonProps) => {
    const {t, i18n} = useTranslation();
    const onTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={classNames(cls.translateButton, {}, [className])} theme={ButtonTheme.CLEAR}
                onClick={onTranslate}>
            {t('lang')}
        </Button>
    );
};
