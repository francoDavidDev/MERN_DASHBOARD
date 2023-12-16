import { createSlice } from "@reduxjs/toolkit";
//estado inicial
const initialState = {
    mode : 'dark',
    //userId: '63701cc1f03239b7f700000e',
};
//slice y reducers
export const globalSlice = createSlice({
    name : 'global',
    initialState,
    reducers:{
        setMode:{
            setMode:(state)=>{
                state.mode = state.mode === 'light' ? 'dark': 'light';
            }
        }
    }
})


export const {setMode} = globalSlice.actions;

export default globalSlice.reducer;