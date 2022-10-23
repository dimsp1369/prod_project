import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../Navbar.module.scss';

interface LoginBtnProps {
    onOpenModal: () => void
}

export const LoginBtn = memo(({ onOpenModal }: LoginBtnProps) => {
    const { t } = useTranslation('navbar');
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenModal} className={cls.links}>
            {t('login')}
        </Button>
    );
});
