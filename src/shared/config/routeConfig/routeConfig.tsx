import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about'
}

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {path: RouterPath.main, element: <MainPage/>},
    [AppRouter.ABOUT]: {path: RouterPath.about, element: <AboutPage/>},
}
