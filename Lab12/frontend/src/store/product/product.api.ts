import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../../models/Product";
import {ServerResponse} from "../../models/ServerResponse";
import {LoginRequest} from "../../models/LoginRequest";
import {ProductRequest} from "../../models/ProductRequest";

export const productApi = createApi({
    reducerPath: "product/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
    }),
    tagTypes: ["Product"],
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => ({
                url: "product",
                method: "GET"
            }),
            providesTags: ["Product"]
        }),
        addProduct: build.mutation<void, ProductRequest>({
            query: (payload: ProductRequest) => ({
                url: "product",
                method: "POST",
                body: payload,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ["Product"]
        }),
        removeProduct: build.mutation<void, string>({
            query: (id: string) => ({
                url: `product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"]
        }),
        updateProduct: build.mutation<void, Product>({
            query: (product: Product) => ({
                url: `product/${product.id}`,
                method: "PUT",
                body: product,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ["Product"]
        }),
        loginUser: build.mutation<boolean, LoginRequest>({
            query: (payload: LoginRequest) => ({
                url: "auth/login",
                method: "POST",
                body: payload,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation,
    useLoginUserMutation
} = productApi
