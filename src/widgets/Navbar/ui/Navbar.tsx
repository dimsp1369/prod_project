import React from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR}>
                    {t('login')}
                </Button>
            </div>
        </div>
    );
};
