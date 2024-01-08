import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
    nodes: Array<number>;
}

interface IChangeValue {
    id: number;
    value: number;
}

const sessionData = sessionStorage.getItem('nodes');
const nodes = sessionData !== null ? JSON.parse(sessionData) : [];

const initialState: IState = {
    nodes: nodes,
};

export const inboostSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        addValue(state: IState, action: PayloadAction<number>) {
            state.nodes = [...state.nodes, action.payload];
        },
        changeValue(state: IState, action: PayloadAction<IChangeValue>) {
            state.nodes = state.nodes.map((value, index) =>
                index === action.payload.id - 1 ? action.payload.value : value
            );
        },
        setState(state: IState, action: PayloadAction<IState>) {
            state.nodes = [...state.nodes, ...action.payload.nodes];
        },
    },
});

export const inboostAction = inboostSlice.actions;
export const inboostReducer = inboostSlice.reducer;
