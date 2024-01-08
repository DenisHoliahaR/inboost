import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { inboostReducer } from './inboost/inboost.slice';

export const store = configureStore({
    reducer: {
        inboost: inboostReducer,
    },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
