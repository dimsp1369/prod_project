import { createSelector } from '@reduxjs/toolkit';
import { getAuthDataState } from 'entity/User';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/info.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/item';

export const getSideBarItemsSelector = createSelector(getAuthDataState, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RouterPath.main,
            Icon: MainIcon,
            text: 'mainPage',
        },
        {
            path: RouterPath.about,
            Icon: AboutIcon,
            text: 'aboutUs',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RouterPath.profile + userData.id,
                Icon: ProfileIcon,
                text: 'profile',
                authOnly: true,
            },
            {
                path: RouterPath.articles,
                Icon: ArticlesIcon,
                text: 'articles',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
