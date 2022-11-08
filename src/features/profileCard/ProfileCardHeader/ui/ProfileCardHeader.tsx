import { classNames } from 'shared/lib/classNames/className';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCardHeader.module.scss';

interface ProfileCardHeaderProps {
    className?: string,
    readOnly?: boolean,
    onEdit?: () => void,
    onEditCancel?: () => void
    onEditSave?: () => void
}

export const ProfileCardHeader = (props: ProfileCardHeaderProps) => {
    const {
        className, onEdit, onEditCancel, readOnly, onEditSave,
    } = props;
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(cls.profileCardHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile Info')} />
                <div className={cls.buttonGroup}>
                    {readOnly
                        ? <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>{t('Edit')}</Button>
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEditSave}
                                    className={cls.saveBtn}
                                >
                                    {t('Save')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEditCancel}
                                >
                                    {t('Cancel')}
                                </Button>
                            </>
                        )}
                </div>
            </div>
        </div>
    );
};
