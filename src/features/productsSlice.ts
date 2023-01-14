import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios"

export interface Product {
    id: number,
    brand: string,
    explanation: string,
    photo: string,
    price: number,
    ratio: number,
    ratioNumber: number,
    isLiked: boolean,
    inBasket: number,
}

interface ProductState {
    products: Product[] | null,
    loading: boolean,
    error: string,
    filtered: Product[] | null | undefined,
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: "",
    filtered: [],
}

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const { data } = await axios.get(`./list.json`);
    return data
})
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            if (state.products === null) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload)
            state.products[index] = { ...state.products[index], inBasket: state.products[index].inBasket + 1 }
        },
        abstract: (state, action: PayloadAction<number>) => {
            if (state.products === null) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload)
            if (state.products[index].inBasket === 0) return

            state.products[index] = { ...state.products[index], inBasket: state.products[index].inBasket - 1 }
        },
        empty: (state, action: PayloadAction<number>) => {
            if (state.products === null) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload)
            if (state.products[index].inBasket === 0) return

            state.products[index] = { ...state.products[index], inBasket: 0 }
        },
        changeLiked: (state, action: PayloadAction<number>) => {
            if (state.products === null) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload)

            state.products[index] = { ...state.products[index], isLiked: !state.products[index].isLiked }
        },
        filter: (state, action: PayloadAction<string>) => {           
            const filteredProducts = state.products?.filter((product: Product) => {
                let fullName = product.brand + ' ' + product.explanation

                return fullName.toLowerCase().includes(action.payload.toLowerCase())
            })
            state.filtered = filteredProducts
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.products = action.payload.data
            state.filtered = action.payload.data
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching user data";
        })
    },
})

export default productsSlice.reducer
export const { add, abstract, empty, changeLiked, filter } = productsSlice.actions