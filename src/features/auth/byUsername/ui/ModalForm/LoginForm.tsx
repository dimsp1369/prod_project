import { classNames } from 'shared/lib/classNames/className';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation('navbar');
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input className={cls.loginInput} label={t('User name')} />
            <Input type="password" className={cls.loginInput} label={t('Password')} />
            <Button className={cls.loginBtn}>{t('Submit')}</Button>
        </div>
    );
};
