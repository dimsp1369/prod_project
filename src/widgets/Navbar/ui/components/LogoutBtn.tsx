import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../Navbar.module.scss';

interface LoginBtnProps {
    onLogout: () => void
}

export const LogoutBtn = memo(({ onLogout }: LoginBtnProps) => {
    const { t } = useTranslation('navbar');
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={onLogout} className={cls.links}>
            {t('logout')}
        </Button>
    );
});
