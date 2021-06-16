import { IRootState } from '../../store/store';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
    isDirty: boolean;
}

const initialState: IInitialState = {
    isDirty: false
};
export const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // @ts-ignore
        setIsDirty: (state, action: PayloadAction<boolean>) => {
            state.isDirty = action.payload;
        }
    },
});

export const {
    setIsDirty } = appReducer.actions;
        // @ts-ignore
export const selectIsDirty = (state: IRootState): boolean => state.app.isDirty;

export default appReducer.reducer;
