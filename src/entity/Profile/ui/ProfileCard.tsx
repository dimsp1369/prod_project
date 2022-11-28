import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextField } from 'shared/ui/TextField/TextField';
import { Profile } from 'entity/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, error, isLoading, data,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }
    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} border={10} />
                </div>
            ) }
            <div className={cls.items}>
                <TextField title={t('First name')} value={data?.first} />
                <TextField title={t('Last name')} value={data?.lastname} />
                <TextField title={t('Age')} value={data?.age} />
                <TextField title={t('Country')} value={data?.country} />
                <TextField title={t('City')} value={data?.city} />
                <TextField title={t('Currency')} value={data?.currency} />
            </div>
        </div>
    );
};
