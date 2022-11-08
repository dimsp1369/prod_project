import { classNames } from 'shared/lib/classNames/className';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    diameter?: string,
    width?: string,
    height?: string,
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        diameter,
        alt,
        width,
        height,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: width || diameter || '240px',
        height: height || diameter || '100%',
        borderRadius: diameter || undefined ? '50%' : '10px',
    }), [height, diameter, width]);

    return (
        <img
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
});
