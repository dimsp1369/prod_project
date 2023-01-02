import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { LoginSchema } from 'features/auth/byUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entity/Profile';
import { ArticleDetailsSchema } from 'entity/Article';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSaverSchema } from 'features/scrollSaver';

export interface StateSchema {
   counter: CounterSchema,
   user: UserSchema,
   scrollSaver: ScrollSaverSchema
   // Async reducers
   profile?: ProfileSchema,
   login?: LoginSchema
   articleDetails?: ArticleDetailsSchema,
   articleDetailsComment?: ArticleDetailsCommentSchema,
   addCommentForm?: AddCommentFormSchema,
   articles?: ArticlesPageSchema,

}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;
   // true - mounted, false - not mounted
   getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
   api: AxiosInstance,
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema
}
