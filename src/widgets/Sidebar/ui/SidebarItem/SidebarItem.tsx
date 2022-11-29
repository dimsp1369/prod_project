import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { useSelector } from 'react-redux';
import { getAuthDataState } from 'entity/User';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/item';

interface SidebarItemProps {
    item: SidebarItemType,
    collapse?: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapse } = props;
    const { t } = useTranslation('navbar');
    const isAuth = useSelector(getAuthDataState);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapse]: collapse })}
        >
            {/* <item.Icon className={cls.icon} /> */}
            <Icon Svg={item.Icon} className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
