import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaverSchema } from '../types/scrollSaverSchema';

const initialState: ScrollSaverSchema = {
    scroll: {},
};

export const scrollSaverSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },

    },

});

export const { actions: scrollSaverActions } = scrollSaverSlice;
export const { reducer: scrollSaverReducer } = scrollSaverSlice;
