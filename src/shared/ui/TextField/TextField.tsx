import { classNames } from 'shared/lib/classNames/className';
import { memo } from 'react';
import cls from './TextField.module.scss';

export enum TextFieldTheme {}

interface TextFieldProps {
    className?: string,
    title?: string,
    value?: string | number,
    theme?: TextFieldTheme
}

export const TextField = memo((props: TextFieldProps) => {
    const {
        className,
        title,
        theme,
        value = '',
    } = props;
    return (
        <div className={classNames(cls.textField, {}, [className])}>
            {title && <span className={cls.title}>{title}</span>}
            <span className={cls.value}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <span className={cls.symbol}>&#x2937;</span>
                {value}
            </span>
        </div>
    );
});
