import { classNames } from 'shared/lib/classNames/className';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { loginUserByUsername } from '../../model/services/loginUserByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from '../../model/selectors/getLogin/getLoginState';

interface LoginFormProps {
   className?: string;
   onSuccess: () => void;
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation('navbar');
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback(async () => {
        const result = await dispatch(loginUserByUsername({
            username,
            password,
        }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('LoginForm')} className={cls.loginTitle} theme={TextTheme.PRIMARY} />
                {error && <Text text={t('errorCredentials')} theme={TextTheme.ERROR} />}
                <Input
                    className={cls.loginInput}
                    label={t('User name')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="password"
                    className={cls.loginInput}
                    label={t('Password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button className={cls.loginBtn} onClick={onSubmit} disabled={isLoading}>{t('Submit')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
