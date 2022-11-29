import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  NOT_FOUND = 'not_found'
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.PROFILE]: '/profile/',
    [AppRouter.ARTICLES]: '/articles',
    [AppRouter.ARTICLES_DETAILS]: '/articles/', // + :id
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouter, AppRouterProps> = {
    [AppRouter.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRouter.PROFILE]: {
        path: `${RouterPath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouter.ARTICLES]: {
        path: RouterPath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRouter.ARTICLES_DETAILS]: {
        path: `${RouterPath.articles_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRouter.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
};
