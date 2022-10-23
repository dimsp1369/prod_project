import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entity/Profile';

interface ProfilePageProps {
   className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                {t('Profile Info')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
