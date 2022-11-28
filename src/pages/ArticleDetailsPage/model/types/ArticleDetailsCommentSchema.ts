import { Comment } from 'entity/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentSchema extends EntityState<Comment>{
   error?: string;
   isLoading: boolean;
}
