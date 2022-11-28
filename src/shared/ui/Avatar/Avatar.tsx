import { classNames } from 'shared/lib/classNames/className';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    border?: string | number,
    width?: string | number,
    height?: string | number,
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        border,
        alt,
        width,
        height,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: width || '240px',
        height: height || '100%',
        // borderRadius: radius || undefined ? '50%' : '10px',
        borderRadius: border,
    }), [height, border, width]);

    return (
        <img
            style={styles}
            src={src}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
});
