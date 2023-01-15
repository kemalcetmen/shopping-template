import {createSlice, PayloadAction} from "@reduxjs/toolkit"

/* i prefer take url in there you can take it in modal
from product state*/
interface Product {
    text: string,
}
const initialState: Product = {
    text: ""
}

const inputSlice = createSlice({
name: "search",
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
})

export default inputSlice.reducer

export const {changeInput} = inputSlice.actions