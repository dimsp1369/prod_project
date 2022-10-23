import React from 'react';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
   path: string,
   text: string,
   Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        Icon: MainIcon,
        text: 'mainPage',
    }, {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: 'aboutUs',
    }, {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: 'profile',
    },

];
