import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/auth/byUsername/model/slice/loginSlice';
import { profileReducer } from 'entity/Profile';
import { ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entity/Article/model/slices/articleDetailSlice';
import { addCommentReducer } from 'features/addComment/model/slices/addCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentReducer,
    articleDetailsComment: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
