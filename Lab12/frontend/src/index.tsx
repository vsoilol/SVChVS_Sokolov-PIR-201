import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {Provider} from "react-redux";
import {store} from "./store";

import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {Layout} from "./components/Layout/Layout";
import {CatalogPage} from "./pages/CatalogPage/CatalogPage";
import {AboutUsPage} from "./pages/AboutUsPage/AboutUsPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <MainPage />,
                    },
                    {
                        path: "catalog",
                        element: <CatalogPage />,
                    },
                    {
                        path: "about-us",
                        element: <AboutUsPage />,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
