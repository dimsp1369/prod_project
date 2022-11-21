import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getUserProfile,
    getValidateProfileErrors,
    profileActions,
    ProfileCard,
    updateUserProfile,
} from 'entity/Profile';
import { EditableProfileCard } from 'features/profileCard/editableProfileCard';
import React, { useCallback, useEffect } from 'react';
import { ProfileCardHeader } from 'features/profileCard/ProfileCardHeader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import { Currency } from 'entity/Currency/model/types/currency';
import { Country } from 'entity/Country/model/types/country';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export const UserProfile = () => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateError = useSelector(getValidateProfileErrors);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onEditCancel = useCallback(() => {
        dispatch(profileActions.declineUpdate());
    }, [dispatch]);

    const onEditSave = useCallback(() => {
        dispatch(updateUserProfile());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.saveUpdate({ first: value || '' }));
    }, [dispatch]);
    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.saveUpdate({ lastname: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.saveUpdate({ age: Number(value || 0) }));
    }, [dispatch]);
    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.saveUpdate({ country: value || undefined }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.saveUpdate({ city: value || '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.saveUpdate({ currency: value || undefined }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.saveUpdate({ username: value || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.saveUpdate({ avatar: value || '' }));
    }, [dispatch]);

    return (
        <>
            <ProfileCardHeader
                onEdit={onEdit}
                readOnly={readOnly}
                onEditCancel={onEditCancel}
                onEditSave={onEditSave}
            />
            {readOnly
                ? <ProfileCard error={error} data={formData} isLoading={isLoading} />
                : (
                    <>
                        <div>
                            {validateError?.length ? validateError.map((error) => (
                                <Text key={error} text={error} theme={TextTheme.ERROR} />
                            )) : null}
                        </div>
                        <EditableProfileCard
                            data={formData}
                            onChangeFirstName={onChangeFirstName}
                            onChangeLastName={onChangeLastName}
                            onChangeAge={onChangeAge}
                            onChangeCountry={onChangeCountry}
                            onChangeCity={onChangeCity}
                            onChangeCurrency={onChangeCurrency}
                            onChangeUsername={onChangeUsername}
                            onChangeAvatar={onChangeAvatar}
                        />
                    </>
                )}
        </>
    );
};
