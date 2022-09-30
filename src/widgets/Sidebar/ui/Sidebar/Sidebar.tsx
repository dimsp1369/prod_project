import { classNames } from 'shared/lib/classNames/className';
import React, { useState } from 'react';
import { ThemeButton } from 'shared/ui/ThemeButton';
import { TranslateButton } from 'shared/ui/TranslateButton';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
   const [collapse, setCollapse] = useState(false);

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
         >
            {collapse ? '<' : '>'}
         </Button>
         <div className={classNames(cls.switchers, { [cls.switcher_collapse]: collapse })}>
            <ThemeButton />
            <TranslateButton className={cls.lang} />
         </div>
      </div>
   );
}
