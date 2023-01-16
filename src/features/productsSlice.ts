import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const { data } = await axios.get(`./list.json`);
    return data
})

interface Product {
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
    products: Product[],
    loading: boolean,
    error: string,
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: "",
}

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.products = action.payload.data
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.loading = false;
            state.error = "Error fetching user data";
        })
    },
})

export default productsSlice.reducer
export const { add, abstract, empty, changeLiked } = productsSlice.actions