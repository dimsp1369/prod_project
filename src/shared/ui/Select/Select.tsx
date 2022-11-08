import { classNames } from 'shared/lib/classNames/className';
import React, { memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string,
    content: string
}

interface SelectProps {
    className?: string,
    label?: string
    options?: SelectOptions[],
    value?: string,
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange,
    } = props;

    const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const selectOptions = useMemo(() => options?.map((opt) => (
        <option value={opt.value} className={cls.option} key={opt.value}>
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && <label htmlFor={label} className={cls.label}>{label}</label>}
            <select value={value} id={label} className={cls.select} onChange={onSelectHandler}>
                {selectOptions}
            </select>
        </div>
    );
});
