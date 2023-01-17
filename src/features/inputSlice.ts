import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface State {
    search: string,
}
const initialState: State = {
    search: ""
}

const inputSlice = createSlice({
name: "search",
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
    },
})

export default inputSlice.reducer

export const {changeInput} = inputSlice.actions