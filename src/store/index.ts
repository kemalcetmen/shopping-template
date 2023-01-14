import { configureStore } from "@reduxjs/toolkit";
import { useDispatch,useSelector, TypedUseSelectorHook } from "react-redux";
import productsSlice from "../features/productsSlice";
import modalSlice from "../features/modalSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        modal: modalSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;