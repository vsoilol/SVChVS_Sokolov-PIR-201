import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";

export function Layout() {
    return (
        <div className="wrapper">
            <Header/>
            <main className="page">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}