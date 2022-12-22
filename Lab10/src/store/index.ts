import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./product/product.slice";
import {productApi} from "./product/product.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        product: productReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>