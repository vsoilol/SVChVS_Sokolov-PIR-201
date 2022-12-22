import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productApi} from "./product.api";

interface ProductState {
    chosenProducts: string[];
    isButtonDisabled: boolean;
}

const initialState: ProductState = {
    chosenProducts: [],
    isButtonDisabled: false
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        toggleChosenProduct(state, action: PayloadAction<string>) {
            if (state.chosenProducts.includes(action.payload)) {
                state.chosenProducts = state.chosenProducts.filter(
                    (_) => _ !== action.payload
                );
            } else {
                state.chosenProducts.push(action.payload);
            }
        },
        toggleIsButtonDisabled(state, action: PayloadAction<boolean>) {
            state.isButtonDisabled = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productApi.endpoints.removeProduct.matchFulfilled,
            (state, action) => {
                const payload = action.payload! as {id: string}

                state.chosenProducts = state.chosenProducts.filter(
                    (_) => _ !== payload.id
                );
            }
        )
    },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
