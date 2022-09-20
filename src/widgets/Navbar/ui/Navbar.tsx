import React from 'react';
import {classNames} from "shared/lib/classNames/className";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeButton} from "shared/ui/ThemeButton";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>MAIN PAGE</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>ABOUT PAGE</AppLink>
            </div>
        </div>
    );
};


