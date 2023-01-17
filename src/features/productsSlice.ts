import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const { data } = await axios.get(`./list.json`);
    return data
})

interface Product {
    id: string,
    suggestion: number,
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
        add: (state, action: PayloadAction<string>) => {
            if (state.products.length < 1) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload)
            state.products[index] = { ...state.products[index], inBasket: state.products[index].inBasket + 1 }
        },
        addMuch: (state, action: PayloadAction<{
            id: string,
            amount: number,
        }>) => {
            if (state.products.length < 1) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload.id)
            state.products[index] = { ...state.products[index], inBasket: action.payload.amount }
        },
        abstract: (state, action: PayloadAction<string>) => {
            if (state.products.length < 1) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload)
            if (state.products[index].inBasket === 0) return
            state.products[index] = { ...state.products[index], inBasket: state.products[index].inBasket - 1 }
        },
        empty: (state, action: PayloadAction<string>) => {
            if (state.products.length < 1) return
            const index = state.products?.findIndex((product: Product) => product.id === action.payload)
            if (state.products[index].inBasket === 0) return
            state.products[index] = { ...state.products[index], inBasket: 0 }
        },
        changeLiked: (state, action: PayloadAction<string>) => {
            if (state.products.length < 1) return
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
export const { add, addMuch, abstract, empty, changeLiked } = productsSlice.actions