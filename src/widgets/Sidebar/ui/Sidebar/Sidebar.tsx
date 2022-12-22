import { classNames } from 'shared/lib/classNames/className';
import React, { memo, useMemo, useState } from 'react';
import { ThemeButton } from 'shared/ui/ThemeButton';
import { TranslateButton } from 'shared/ui/TranslateButton';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { BugButton } from 'widgets/PageError';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSideBarItemsSelector } from 'widgets/Sidebar/model/selectors/getSideBarItemsSelector';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapse, setCollapse] = useState(false);
    const sidebarItemsList = useSelector(getSideBarItemsSelector);

    const onCollapse = () => {
        setCollapse((prev) => !prev);
    };

    const SideBarItems = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapse={collapse} />
    )), [collapse, sidebarItemsList]);

    return (
        <menu
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

            <div className={cls.items}>
                {SideBarItems}
            </div>
            <div className={cls.bugTest_btn}>
                <BugButton />
            </div>
            <div className={cls.switchers}>
                <ThemeButton />
                <TranslateButton className={cls.lang} />
            </div>
        </menu>
    );
});
