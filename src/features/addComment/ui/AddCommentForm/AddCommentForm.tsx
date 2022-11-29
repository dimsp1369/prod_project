import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addCommentActions, addCommentReducer } from 'features/addComment/model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
    getCommentFormError,
    getCommentFormIsLoading,
    getCommentFormText,
} from 'features/addComment/model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

interface AddCommentFromProps {
   className?: string;
   onSendComment: (text: string) => void
}

const reducer: ReducersList = {
    addCommentForm: addCommentReducer,
};

const AddCommentForm = memo((props: AddCommentFromProps) => {
    const { className, onSendComment } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');

    const text = useSelector(getCommentFormText);
    const error = useSelector(getCommentFormError);
    const isLoading = useSelector(getCommentFormIsLoading);

    const addCommentHandler = useCallback((text: string) => {
        dispatch(addCommentActions.setComment(text));
    }, [dispatch]);

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '');
        addCommentHandler('');
    }, [addCommentHandler, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.AddCommentFrom, {}, [className])}>
                <Input
                    className={cls.input}
                    onChange={addCommentHandler}
                    value={text}
                />
                <Button disabled={isLoading} onClick={onSendCommentHandler}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
