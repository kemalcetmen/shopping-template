import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface Modal {
    product: Iproduct | null,
    modalOpen: boolean, 
}

interface Iproduct {
    id: number,
    photo: string,
}
/* i prefer take url in there you can take it in modal
from product state*/

const initialState: Modal = {
    product: null,
    modalOpen: false,
}

const modalSlice = createSlice({
name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<Iproduct>) => {
            state.modalOpen = true
            state.product = action.payload
        },
        closeModal: (state) => {
            state.modalOpen = false
            state.product = null
            },
    },
})

export default modalSlice.reducer

export const {openModal, closeModal} = modalSlice.actions