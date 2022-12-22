import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../../models/Product";
import {ServerResponse} from "../../models/ServerResponse";

export const productApi = createApi({
    reducerPath: "product/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/product/",
    }),
    tagTypes: ["Product"],
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => ({
                url: "",
                method: "GET"
            }),
            transformResponse: (response: ServerResponse<Product>) => response.data,
            providesTags: ["Product"]
        }),
        addProduct: build.mutation<void, Product>({
            query: (payload: Product) => ({
                url: "",
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
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"]
        }),
        updateProduct: build.mutation<void, Product>({
            query: (product: Product) => ({
                url: `/${product.id}`,
                method: "PUT",
                body: product,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ["Product"]
        })
    }),
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation
} = productApi
