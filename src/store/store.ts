import * as reducers from '../reducers';

import { Action, ThunkAction, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: { ...reducers },
    middleware: getDefaultMiddleware({
        immutableCheck: false
    })
});


export type IRootState = ReturnType<typeof store.getState>;
export type IDispatch = typeof store.dispatch;
export type IAppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    IRootState,
    unknown,
    Action<string>
>;
