import { classNames } from 'shared/lib/classNames/className';
import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getScrollSaverByPath, scrollSaverActions, scrollSaverReducer } from 'features/scrollSaver';
import { useLocation } from 'react-router-dom';
import { use } from 'i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import cls from './PageContainer.module.scss';

interface PageContainerProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void;
}

export const PageContainer = (props: PageContainerProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollSaverByPath(state, pathname));

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaverActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.pageContainer, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
