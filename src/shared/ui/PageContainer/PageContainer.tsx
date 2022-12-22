import { classNames } from 'shared/lib/classNames/className';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import cls from './PageContainer.module.scss';

interface PageContainerProps {
   className?: string;
   children: ReactNode;
   onScrollEnd?: () => void
}

export const PageContainer = (props: PageContainerProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    return (
        <section ref={wrapperRef} className={classNames(cls.pageContainer, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
