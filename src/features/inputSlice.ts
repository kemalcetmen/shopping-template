import {createSlice, PayloadAction} from "@reduxjs/toolkit"

/* i prefer take url in there you can take it in modal
from product state*/
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