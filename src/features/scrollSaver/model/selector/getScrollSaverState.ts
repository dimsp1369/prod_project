import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSaverState = (state: StateSchema) => state.scrollSaver?.scroll;
export const getScrollSaverByPath = createSelector(
    getScrollSaverState,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
