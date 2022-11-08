import { classNames } from 'shared/lib/classNames/className';
import React, { HTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onKeyPress'>

interface InputProps extends HTMLInputProps {
    className?: string,
    type?: string,
    value?: string | number,
    label?:string,
    onChange?: (value: string) => void
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined

}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        onChange,
        value,
        label,
        onKeyPress,
        ...otherProps
    } = props;

    const [isFilled, setIsFilled] = useState(!!value);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <input
                type={type}
                defaultValue={value}
                onChange={onChangeInput}
                onKeyPress={onKeyPress}
                {...otherProps}
            />
            {label && <label htmlFor={type} className={isFilled ? cls.active : ''}>{label}</label>}
        </div>
    );
});
