import {classNames} from "shared/lib/classNames/className";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeButton} from "shared/ui/ThemeButton";
import {TranslateButton} from "shared/ui/TranslateButton";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [toggleCollapse, setToggleCollapse] = useState(false)

    const onToggleCollapse = () => {
        setToggleCollapse(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapse]: toggleCollapse}, [className])}>
            <button onClick={onToggleCollapse}>Toggle</button>
            <div className={classNames(cls.switchers, {[cls.switcher_collapse]: toggleCollapse})}>
                <ThemeButton/>
                <TranslateButton className={cls.lang}/>
            </div>
        </div>
    );
};
