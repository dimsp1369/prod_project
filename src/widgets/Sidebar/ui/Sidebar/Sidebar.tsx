import { classNames } from 'shared/lib/classNames/className';
import React, { useState } from 'react';
import { ThemeButton } from 'shared/ui/ThemeButton';
import { TranslateButton } from 'shared/ui/TranslateButton';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
   const [toggleCollapse, setToggleCollapse] = useState(false);

   const onToggleCollapse = () => {
      setToggleCollapse((prev) => !prev);
   };

   return (
      <div
         data-testid="sidebar"
         className={classNames(cls.sidebar, { [cls.collapse]: toggleCollapse }, [className])}
      >
         <button
            type="button"
            data-testid="sidebar-toggle"
            onClick={onToggleCollapse}
         >
            Toggle
         </button>
         <div className={classNames(cls.switchers, { [cls.switcher_collapse]: toggleCollapse })}>
            <ThemeButton />
            <TranslateButton className={cls.lang} />
         </div>
      </div>
   );
}
