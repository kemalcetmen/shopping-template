import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface State {
    sort: string,
}
const initialState: State = {
    sort: ""
}

const inputSlice = createSlice({
name: "sort",
    initialState,
    reducers: {
        changeSorting: (state, action: PayloadAction<string>) => {
            state.sort = action.payload
        },
    },
})

export default inputSlice.reducer

export const {changeSorting} = inputSlice.actions