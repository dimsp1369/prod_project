import { classNames } from 'shared/lib/classNames/className';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string
    value?: Country,
    onChange?: (value: Country) => void
}

const options = [
    { value: Country.USA, content: Country.USA },
    { value: Country.CANADA, content: Country.CANADA },
    { value: Country.MEXICO, content: Country.MEXICO },
    { value: Country.RUSSIA, content: Country.RUSSIA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange } = props;
    const { t } = useTranslation();

    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Country')}
            onChange={onChangeCountry}
            value={value}
            options={options}
        />
    );
});
