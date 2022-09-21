import React from 'react';
import {classNames} from "shared/lib/classNames/className";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('navbar');


    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'
                         className={cls.mainLink}>{t('mainPage')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
                    {t('aboutUs')}
                </AppLink>
            </div>
        </div>
    );
};


