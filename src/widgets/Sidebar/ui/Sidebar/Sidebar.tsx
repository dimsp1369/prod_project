import { classNames } from 'shared/lib/classNames/className';
import React, { useState } from 'react';
import { ThemeButton } from 'shared/ui/ThemeButton';
import { TranslateButton } from 'shared/ui/TranslateButton';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import { BugButton } from 'widgets/PageError';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapse, setCollapse] = useState(false);
    const { t } = useTranslation('navbar');

    const onCollapse = () => {
        setCollapse((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapse]: collapse }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onCollapse}
                className={cls.collapse_btn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapse ? '>' : '<'}
            </Button>

            <div className={cls.link_items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.main}
                    className={cls.link}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link_item}>{t('mainPage')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.about}
                    className={cls.link}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link_item}>{t('aboutUs')}</span>
                </AppLink>
            </div>
            <div className={cls.bugTest_btn}>
                <BugButton />
            </div>
            <div className={cls.switchers}>
                <ThemeButton />
                <TranslateButton className={cls.lang} />
            </div>
        </div>
    );
}
