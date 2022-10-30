import { classNames } from 'shared/lib/classNames/className';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../model/selectors/getProfileSelector/getProfileSelector';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div>
                <Text title={t('Profile Info')} />
                <Button theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div>
                <Input label={t('First name')} value={data?.first} />
                <Input label={t('Last name')} value={data?.lastname} />
            </div>
        </div>
    );
};
